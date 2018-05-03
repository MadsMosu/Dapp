import React, {Component} from 'react';
import ethers from 'ethers';
import provider from '../utils/configs/provider';
import abi from '../utils/abi/sampleStore';
import contractAddr from '../utils/addresses/sampleStore';
import { Grid, Segment } from 'semantic-ui-react'
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

class BloodInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {id};
    }

    async componentWillMount() {
        const employeeWallet = new ethers.Wallet("0x274d1e42f06076e6d3ef981f0c244750827ccf56b19768816618e9217129a030", provider);
        const SampleStore = new ethers.Contract(contractAddr, abi, employeeWallet);
        console.log(this.props.id);
        this.setState({id: this.props.id});
        
        
    }

    render() {
        <div>
            <h3>Sample Information</h3>
            <Grid columns={3} divided>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Segment>Component name:</Segment>
                        <Segment>Volume: </Segment>
                        <Segment>Establishment: </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>ABO group: </Segment>
                        <Segment>RhD group: </Segment>
                        <Segment>Date of expiry: </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>CPR number of person: </Segment>
                        <Segment>First name: </Segment>
                        <Segment>Last name: </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    }
}

const donation = gql`
    query donation($id: Int, $type: String){ 
        donation(id: $id, type: $type) {
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

export default graphql(donation, {
    options: {
        variables: {id: this.props.id, type: "Blood"},
    },
})(BloodInfo);