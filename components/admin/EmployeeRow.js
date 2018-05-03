import React, {Component} from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import ethers from 'ethers';
import provider from '../../utils/configs/provider';
import abi from '../../utils/abi/employeeStore';
import contractAddr from '../../utils/addresses/employeeStore';

class EmployeeRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            balance: ""
        };       
    };

    componentWillMount = async () => {
        await provider.getBalance(this.props.employee[0]).then((balance) => {
            var accBalance = ethers.utils.formatEther(balance)
            this.setState({balance: accBalance});    
        });
    };

    onClickAuth = async () => {
        const adminWallet = new ethers.Wallet("0xcc213ad8f9f68662570d16bc20be6662f86477e3e7edd3b140b007bca44c6186", provider);
        const EmployeeStore = new ethers.Contract(contractAddr, abi, adminWallet);

        if(this.props.employee[3].toString() == "true") {
            await EmployeeStore.removeAuthentication(this.props.employee[0]);     
        } else {
            await EmployeeStore.addAuthentication(this.props.employee[0]);
        };
        
        window.alert('Please wait for the transaction to finish and reload the page.');
    };

    renderButton() {
        if(this.props.employee[0].toString() == '0xa9a77d5e0EE091eee7Eeb761C18b1324aC8F16Dc') {
            return('Authenticated')
        } else {
            if(this.props.employee[3].toString() == "true") {
                return(
                    <Button basic onClick={this.onClickAuth}>
                        <Icon color='green' name='checkmark' size='large'/>
                    </Button>
                );          
            } else {
                return(
                    <Button basic onClick={this.onClickAuth}>
                        <Icon color='red' name='close' size='large'/>
                    </Button>
                );         
            }
        }           
    };

    render()  {
        const { Row, Cell, Button } = Table;   
        return (
            <Row>              
                <Cell>{this.props.employee[1]}</Cell>
                <Cell>{this.props.employee[2]}</Cell>
                <Cell>{this.props.employee[0]}</Cell>
                <Cell>{this.state.balance + ' Ether'}</Cell>
                <Cell>{this.renderButton()}</Cell>
            </Row>
        );
    }        
}


export default EmployeeRow;