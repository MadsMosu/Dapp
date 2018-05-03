import React, { Component } from 'react';
import Layout from '../../components/admin/Layout';
import EmployeeForm from '../../components/admin/EmployeeForm';
import withData from '../../lib/withData';


class addEmployee extends Component {

    render() {
        return(
            <Layout>
                <EmployeeForm />
            </Layout>
        );
    }
}

export default withData(addEmployee);