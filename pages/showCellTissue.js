import React, {Component} from 'react';
import Layout from '../components/Layout';
import withData from '../lib/withData';
import {graphql, Compose} from 'react-apollo';
import gql from 'graphql-tag';
import { Grid, Segment, Button } from 'semantic-ui-react'
import ethers from 'ethers';
import provider from '../utils/configs/provider';
import abi from '../utils/abi/sampleStore';
import contractAddr from '../utils/addresses/sampleStore';

class ShowCellTissue extends Component {
    state = {
        loading: false
    };

    static async getInitialProps(props) {
        const id = props.query.id;
        const employeeWallet = new ethers.Wallet("0x274d1e42f06076e6d3ef981f0c244750827ccf56b19768816618e9217129a030", provider);
        const SampleStore = new ethers.Contract(contractAddr, abi, employeeWallet);

        let sample;
        await SampleStore.functions.getCellTissueSampleByIndex(id).then(function(result) {
            sample = result;
        });

        let sampleIndicator;
        await SampleStore.functions.getCellTissueSampleIndicatorByIndex(id).then(function(result) {
            sampleIndicator = result;
        });

        return{
            id,
            establishment: sample[0],
            dateOfProcurement: sample[1],
            placeOfProcurement: sample[2],
            donationType: sample[3],
            dateOfExpiry: sample[4],
            status: sample[5],
            description: sample[6],
            inStorage: sampleIndicator[2],
        };
    }

    onTake = async (event) => {
        event.preventDefault();
        this.setState({loading: true, errorMessage: ''});
        
        const employeeWallet = new ethers.Wallet("0x274d1e42f06076e6d3ef981f0c244750827ccf56b19768816618e9217129a030", provider);
        const SampleStore = new ethers.Contract(contractAddr, abi, employeeWallet); 

        await SampleStore.functions.takeCellTissueSample(this.props.id);

        this.setState({loading: false});   
        window.alert('Sample has been succesfully taken. Please wait for the transaction to finish.'); 
    };

    render() {
        if(this.props.data.loading) {
            return(
                <div>Loading...</div>
            )
        } else {
        return(
            <Layout>
                <h3>Sample Information</h3>
                <Grid columns={3} divided>
                    <Grid.Row stretched>
                        <Grid.Column>
                            <Segment>Establishment: {this.props.establishment}</Segment>
                            <Segment>Date of procurement: {this.props.dateOfProcurement}</Segment>
                            <Segment>Place of procurement: {this.props.placeOfProcurement}</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>DonationType: {this.props.donationType}</Segment>
                            <Segment>Date of expiry: {this.props.dateOfExpiry}</Segment>
                            <Segment>Status: {this.props.status}</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>CPR number of person: {this.props.data.donation.person.cpr}</Segment>
                            <Segment>First name: {this.props.data.donation.person.firstName}</Segment>
                            <Segment>Last name: {this.props.data.donation.person.lastName}</Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row stretched>
                        <Grid.Column>
                            <Segment>Description: {this.props.description}</Segment>
                        </Grid.Column>                   
                    </Grid.Row>
                </Grid>
                {this.props.inStorage == true && 
                    <Button loading={this.state.loading} onClick={this.onTake.bind(this)} primary style={{marginTop: '40px'}}>Take Sample</Button>
                }  
            </Layout>
        );       
    }
    }
};

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

const employee = gql`
    query employee($employeeID: String!){ 
        employee(employeeID: $employeeID) {
            privateKey
        }
    }
`;

export default withData(
    graphql(donation, {
    options: (props) => ({
        variables: {
            id: props.id,
            type: "Cell/tissue",
        },
    }),})
(ShowCellTissue));
