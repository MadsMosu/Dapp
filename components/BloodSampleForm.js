import React, { Component } from 'react';
import { Form, Input, Button, Message, Dropdown, TextArea } from 'semantic-ui-react'
import ethers from 'ethers';
import provider from '../utils/configs/provider';
import abi from '../utils/abi/sampleStore';
import contractAddr from '../utils/addresses/sampleStore';

import {graphql, Mutation, compose} from 'react-apollo';
import gql from 'graphql-tag';
import { graphiqlConnect } from 'apollo-server-express';

class BloodSampleForm extends Component {
    state = {
        employeeID: "",
        componentName: "",
        volume: "",
        establishment: "",
        ABOSelection: "",
        ABOOptions: [{text: 'Group A', value: 'Group A'},{text: 'Group B', value: 'Group B'}, {text: 'Group AB', value: 'Group AB'}, {text: 'Group O', value: 'Group O'}],
        RhDGroup: "",
        expiryDate: "",
        cprValue: "",
        errorMessage: "",
        loading: false
    };
    
    onSubmit = async (event) => {
        event.preventDefault();
        
        this.setState({loading: true, errorMessage: ''});
        //blockchain
        const employeeWallet = new ethers.Wallet("0x274d1e42f06076e6d3ef981f0c244750827ccf56b19768816618e9217129a030", provider);
        const SampleStore = new ethers.Contract(contractAddr, abi, employeeWallet); 
    
        await SampleStore.functions.addBloodSample(this.state.componentName, this.state.volume, this.state.establishment, this.state.ABOSelection, this.state.RhDGroup, this.state.expiryDate);
        

        let bloodSampleCount;
        await SampleStore.functions.bloodSampleCount().then(function(value) {
            bloodSampleCount = value;
        });
                    
        //db  
        await this.props.mutate({
            variables: {
                id: parseInt(bloodSampleCount)+1,
                type: "Blood",
                person: this.state.cprValue,
            }
        });
        this.setState({loading: false});   
        window.alert('Succesfully added a new blood sample. Please wait for the transaction to finish.');  
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
                <h3>Add a new Blood Sample</h3>
                <Form onSubmit={this.onSubmit.bind(this)} error={!!this.state.errorMessage}>
                    <h4>Sample</h4> 
                    <Form.Field inline>
                        <Input label='Component Name' name='componentName' placeholder='Name' value={this.state.name} required={true} onChange={this.handleChange} />
                    </Form.Field> 
                    <Form.Field inline>
                        <Input label='Volume in ml' name='volume' placeholder='volume' value={this.state.name} required={true} onChange={this.handleChange} />
                    </Form.Field> 
                    <Form.Field inline>
                        <Input label='Establishment' name='establishment' placeholder='Establishment name' value={this.state.name} required={true} onChange={this.handleChange} />
                    </Form.Field> 
                    <Dropdown name='ABOSelection' placeholder='ABO Group' selection options={this.state.ABOOptions} required={true} onChange={this.handleChange} style={{marginBottom: '20px'}}/>
                    <Form.Field inline>
                        <Input label='RhD Group' name='RhDGroup' placeholder='RhD Group' value={this.state.name} required={true} onChange={this.handleChange} />
                    </Form.Field> 
                    <Form.Field inline>
                        <Input label='Date of Expiry' name='expiryDate' placeholder='Expiry Date' value={this.state.name} required={true} onChange={this.handleChange} />
                    </Form.Field> 
                    <Form.Field inline>
                        <Dropdown name='cprValue' placeholder='CPR number of person' search selection options={cprOptions} required={true} onChange={this.handleChange}/>
                    </Form.Field>
                    <Message error header='Error!' content={this.state.errorMessage} />
                    <Button loading={this.state.loading} primary>Submit Sample</Button>                                               
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

        
export default compose(
graphql(allPersons,),
graphql(createDonation,),
)(BloodSampleForm);







