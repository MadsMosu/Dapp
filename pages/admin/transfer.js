import React, {Component} from 'react';
import ethers from 'ethers';
import provider from '../../utils/configs/provider';
import network from '../../utils/configs/network';
import abi from '../../utils/abi/employeeStore';
import contractAddr from '../../utils/addresses/employeeStore';
import { Form, Input, Button, Message, Dropdown } from 'semantic-ui-react'
import Layout from '../../components/admin/Layout';

import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import withData from '../../lib/withData';

class transfer extends Component {
    state = {
        selectorValue: "",
        amount: "",
        errorMessage: "",
        loading: false,
        options: []
    }

    static async getInitialProps() {
        const adminWallet = new ethers.Wallet("0xcc213ad8f9f68662570d16bc20be6662f86477e3e7edd3b140b007bca44c6186", provider);
        const EmployeeStore = new ethers.Contract(contractAddr, abi, adminWallet);

        let count;
        await EmployeeStore.functions.employeesCount().then(function(value) {
        count = value;
        });

        let employees = [];
        for(let i = 1; i<=count; i++) {
            await EmployeeStore.getEmployeeByIndex(i).then(function(result) {
            employees.push(result);
        });
        };
        
        let employeeOptions = [];
        for(var i = 0; i < employees.length; i++) {
            employeeOptions[i] = {key: employees[i][2], value: employees[i][2], text: employees[i][2]};
        };

        return {employees, employeeOptions};
    }

    componentDidMount() {
        this.setState({options: this.props.employeeOptions});
    }

    onSubmit = async (event) => {
        event.preventDefault();
        
        this.setState({loading: true, errorMessage: ''});

        //blockchain
        const adminWallet = new ethers.Wallet(this.props.data.employee.privateKey, provider);
        const EmployeeStore = new ethers.Contract(contractAddr, abi, adminWallet);

        var employee;
        await EmployeeStore.functions.getEmployeeByEmployeeID(this.state.selectorValue).then(function(result) {
            employee = result;
        });
  
        await adminWallet.send(employee[0], ethers.utils.parseEther(this.state.amount));
                     
        this.setState({loading: false});     
    };

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    render() {
        return(
            <Layout>
                <h3>Transfer Ether</h3>
                <Form onSubmit={this.onSubmit.bind(this)} error={!!this.state.errorMessage}>
                    <Form.Field inline>
                        <Dropdown name='selectorValue' placeholder='Select Employee' search selection options={this.state.options} required={true} onChange={this.handleChange}/>
                    </Form.Field>                     
                    <Form.Field inline>
                        <Input label='Amount in Ether' placeholder='Amount' value={this.state.name} required={true} onChange={event => 
                        this.setState({ amount: event.target.value })}/>
                    </Form.Field> 
                    <Message error header='Error!' content={this.state.errorMessage} />          
                    <Button loading={this.state.loading} primary>Send</Button>
                </Form>
            </Layout>
        );
    };
}

const employee = gql`
    query employee($employeeID: String){ 
        employee(employeeID: $employeeID) {
            privateKey
        }
    }
`;

export default withData(graphql(employee, {
    options: {
        variables: {employeeID: "1234"},
        updateQueries: {}
    },
})
(transfer));