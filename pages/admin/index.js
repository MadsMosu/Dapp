import React, { Component } from 'react';
import Layout from '../../components/admin/Layout';
import EmployeeTable from '../../components/admin/EmployeeTable';
import withData from '../../lib/withData';
import ethers from 'ethers';
import provider from '../../utils/configs/provider';
import network from '../../utils/configs/network';
import abi from '../../utils/abi/employeeStore';
import contractAddr from '../../utils/addresses/employeeStore';
import EmployeeRow from '../../components/admin/EmployeeRow'; 
import { Table } from 'semantic-ui-react';


class adminPage extends Component {
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
    return {employees}; 
  };

  renderRows() {
    return this.props.employees.map((employee, index) => {
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
        <Layout>
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
        </Layout>
  )
}
};


export default adminPage;
