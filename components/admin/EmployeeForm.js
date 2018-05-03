import React, { Component } from 'react';
import { Form, Input, Button, Message } from 'semantic-ui-react'
import ethers from 'ethers';
import provider from '../../utils/configs/provider';
import network from '../../utils/configs/network';
import abi from '../../utils/abi/employeeStore';
import contractAddr from '../../utils/addresses/employeeStore';

import {graphql, Mutation, compose} from 'react-apollo';
import gql from 'graphql-tag';

class EmployeeForm extends Component {
    state = {
        name: "",
        employeeID: "",
        errorMessage: "",
        loading: false
    }

    onSubmit = async (event) => {
        event.preventDefault();
        
        this.setState({loading: true, errorMessage: ''})

        //blockchain
        const adminWallet = new ethers.Wallet(this.props.data.employee.privateKey, provider);
        const newEmployeeWallet = ethers.Wallet.createRandom();

        const EmployeeStore = new ethers.Contract(contractAddr, abi, adminWallet);     
        await adminWallet.send(newEmployeeWallet.address, ethers.utils.parseEther('1.0'));
        await EmployeeStore.functions.newEmployee(newEmployeeWallet.address, this.state.name, this.state.employeeID);
                     
        //db      
        await this.props.mutate({
            variables: {
                employeeID: this.state.employeeID,
                privateKey: newEmployeeWallet.privateKey,
            }
        });
        this.setState({loading: false});    
        window.alert('Succesfully added a new employee. Please wait for the transaction to finish.');
    };

    render() {
        return(
            <div>
                <h3>Authenticate a new Employee</h3>
                <Form onSubmit={this.onSubmit.bind(this)} error={!!this.state.errorMessage}>                    
                    <Form.Field inline>
                        <Input label='Name' placeholder='Name' value={this.state.name} required={true} onChange={event => 
                        this.setState({ name: event.target.value })}/>
                    </Form.Field> 
                    <Form.Field inline>
                        <Input label='Employee ID' placeholder='Employee ID' value={this.state.employeeID} required={true} onChange={event =>
                        this.setState({ employeeID: event.target.value})}/>
                    </Form.Field> 
                    <Message error header='Error!' content={this.state.errorMessage} />          
                    <Button loading={this.state.loading} primary>Submit</Button>
                </Form>
            </div>
        );
    }
}

const createEmployee = gql`
    mutation createEmployee($employeeID: String!, $privateKey: String!) {
        createEmployee(input: {employeeID: $employeeID, privateKey: $privateKey}) {
            employeeID
            privateKey
        }
    } 
`;

const employee = gql`
    query employee($employeeID: String!){ 
        employee(employeeID: $employeeID) {
            privateKey
        }
    }
`;
        
export default compose(
graphql(createEmployee,),
graphql(employee, {
    options: {
        variables: {employeeID: "1234"},
    },
}),
)(EmployeeForm);

