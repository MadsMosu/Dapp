import React, { Component } from 'react';
import { Form, Input, Button, Message, Dropdown, TextArea } from 'semantic-ui-react'
import ethers from 'ethers';
import provider from '../utils/configs/provider';
import network from '../utils/configs/network';
import abi from '../utils/abi/sampleStore';
import contractAddr from '../utils/addresses/sampleStore';

import {graphql, Mutation, compose} from 'react-apollo';
import gql from 'graphql-tag';

class CellTissueSampleForm extends Component {
    state = {
        establishment: "",
        dateOfProcurement: "",
        placeOfProcurement: "",
        donationType: "",
        status: "",
        description: "",
        expiryDate: "",
        cprValue: "",
        errorMessage: "",
        loading: false
    }
  
    onSubmit = async (event) => {
        event.preventDefault();
        
        this.setState({loading: true, errorMessage: ''});
        //blockchain
        const employeeWallet = new ethers.Wallet("0x274d1e42f06076e6d3ef981f0c244750827ccf56b19768816618e9217129a030", provider);
        const SampleStore = new ethers.Contract(contractAddr, abi, employeeWallet); 
        await SampleStore.functions.addCellTissueSample(this.state.establishment, this.state.dateOfProcurement, this.state.placeOfProcurement, this.state.donationType, this.state.expiryDate, this.state.status, this.state.description);
        
        let cellTissueSampleCount;
        await SampleStore.functions.cellTissueSampleCount().then(function(value) {
            cellTissueSampleCount = value;
        });
                    
        //db  
        await this.props.mutate({
            variables: {
                id: parseInt(cellTissueSampleCount)+1,
                type: "Cell/tissue",
                person: this.state.cprValue,
            }
        });
        this.setState({loading: false});     
        window.alert('Succesfully added a new cell or tissue sample. Please wait for the transaction to finish.'); 
    };

    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value });
    }


    render() {
        if(this.props.data.loading) {
            return(
                <div>Loading...</div>
            );
        } else {
            let cprOptions = [];
            for(var i = 0; i < this.props.data.allPersons.length; i++) {
                cprOptions[i] = {key: this.props.data.allPersons[i].cpr, value: this.props.data.allPersons[i].cpr, text: this.props.data.allPersons[i].cpr};
            }; 
        return(
            <div>
                <h3>Add a new Cell/Tissue Sample</h3>
                <Form onSubmit={this.onSubmit.bind(this)} error={!!this.state.errorMessage}>
                    <h4>Sample</h4>
                    <Form.Field inline>
                        <Input label='Establishment' name='establishment' placeholder='Establishment name' value={this.state.name} required={true} onChange={this.handleChange} />
                    </Form.Field> 
                    <Form.Field inline>
                        <Input label='Date of Procurement' name='dateOfProcurement' placeholder='Date of Procurement' value={this.state.name} required={true} onChange={this.handleChange} />
                    </Form.Field> 
                    <Form.Field inline>
                        <Input label='Place of Procurement' name='placeOfProcurement' placeholder='Place of Procurement' value={this.state.name} required={true} onChange={this.handleChange} />
                    </Form.Field> 
                    <Form.Field inline>
                        <Input label='Donation Type' name='donationType' placeholder='Donation Type' value={this.state.name} required={true} onChange={this.handleChange} />
                    </Form.Field> 
                    <Form.Field inline>
                        <Input label='Date of Expiry' name='expiryDate' placeholder='Expiry Date' value={this.state.name} required={true} onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field inline>
                        <Input label='Status' name='status' placeholder='Status' value={this.state.name} required={true} onChange={this.handleChange} />
                    </Form.Field> 
                    <Form.Field inline>
                        <TextArea label='Description' name='description' placeholder='Description' value={this.state.name} required={true} onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field inline>
                        <Dropdown name='cprValue' placeholder='CPR number of person' search selection options={cprOptions} required={true} onChange={this.handleChange}/>
                    </Form.Field>
                    <Message error header='Error!' content={this.state.errorMessage} />
                    <Button loading={this.state.loading} primary>Submit</Button>                                                 
                </Form>
            </div>
        );
    }
    }
}

const createDonation = gql`
    mutation createDonation($id: Int!, $type: String!, $person: String!) {
        createDonation(input: {id: $id, type: $type, person: $person}) {
            id
            type
            person {
                cpr
                firstName
                lastName
            }
        }
    } 
`;

const allPersons = gql`
query allPersons { 
    allPersons {
        cpr
    }
}
`;

//const EmployeeWithData = graphql(employee, {options: ({employeeID}) => ({variables: {employeeID}}),})(SampleForm);
        
export default compose(
graphql(allPersons,),
graphql(createDonation,),
)(CellTissueSampleForm);