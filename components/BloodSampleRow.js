import React, {Component} from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import ethers from 'ethers';
import provider from '../utils/configs/provider';
import abi from '../utils/abi/employeeStore';
import contractAddr from '../utils/addresses/employeeStore';
import {Link} from '../routes';

class BloodSampleRow extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: ""
        };
    };

    componentWillMount = async () => {
        const adminWallet = new ethers.Wallet("0xcc213ad8f9f68662570d16bc20be6662f86477e3e7edd3b140b007bca44c6186", provider);
        const EmployeeStore = new ethers.Contract(contractAddr, abi, adminWallet); 

        await EmployeeStore.functions.getEmployeeByAddress(this.props.donation.signer).then((result) => {
            this.setState({name: result[1]});
        });
    };

    renderButton() {
        return(
            <Link route={`/blooddonations/${this.props.donation.id}`}>
                <a><Button basic>Go to</Button></a>
            </Link>
        );                          
    };

    renderStorage() {
        if(this.props.donation.inStorage == true) {
            return(
                <Icon color='green' name='checkmark' size='large'/>
            );          
        } else {
            return(
                <Icon color='red' name='close' size='large'/>
            );         
        }
    };

    render()  {
        const { Row, Cell, Button } = Table;   
        return (
            <Row>              
                <Cell>{this.props.donation.id}</Cell>
                <Cell>{this.state.name}</Cell>
                <Cell>{this.renderStorage()}</Cell>
                <Cell>{this.renderButton()}</Cell>
            </Row>
        );
    }        
}


export default BloodSampleRow;