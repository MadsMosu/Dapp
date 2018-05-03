import ethers from 'ethers';
import provider from '../../utils/configs/provider';
import network from '../../utils/configs/network';
import abi from '../../utils/abi/employeeStore';
import contractAddr from '../../utils/addresses/employeeStore';
import EmployeeRow from './EmployeeRow'; 
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';

class EmployeeTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeesList: [],
            privateKey: ""
        };
    }

    fetchEmployees = async () => {
        const adminWallet = new ethers.Wallet("0xcc213ad8f9f68662570d16bc20be6662f86477e3e7edd3b140b007bca44c6186", provider);
        const EmployeeStore = new ethers.Contract(contractAddr, abi, adminWallet);

        let count;
        await EmployeeStore.functions.employeesCount().then(function(value) {
        count = value;
        });
    
        let employeesList = [];
        for(let i = 1; i<=count; i++) {
            await EmployeeStore.getEmployeeByIndex(i).then(function(result) {
            employeesList.push(result);
        });
        };
        return {employeesList}; 
    };


    componentWillMount = async () => {
        var employees = await this.fetchEmployees();
        this.setState({employeesList: employees});
    };  

    renderRows() {
        return this.state.employeesList.map((employee, index) => {
            return (<EmployeeRow
                key={index}
                employee={employee}
            />
            );
        });
    };

    render() {
        const { Header, Row, HeaderCell, Body } = Table;
        return(
            <div>
                <h3>Employees</h3>
                <Table>
                    <Header>
                        <Row>
                        <HeaderCell>Name</HeaderCell>
                        <HeaderCell>Employee ID</HeaderCell>
                        <HeaderCell>Address</HeaderCell>
                        <HeaderCell>Account Balance</HeaderCell>
                        <HeaderCell>Authenticated</HeaderCell>                  
                        </Row>
                    </Header>
                    <Body>{this.renderRows()}</Body>
                </Table>
            </div>
        )
    }
}

const employee = gql`
    query employee($employeeID: String){ 
        employee(employeeID: $employeeID) {
            privateKey
        }
    }
`;

export default graphql(employee, {
    options: {
        variables: {employeeID: "1234"},
    },
})(EmployeeTable);
