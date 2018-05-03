import React, { Component } from 'react';
import Layout from '../components/Layout';
import withData from '../lib/withData';
import BloodSampleForm from '../components/BloodSampleForm';

class addBloodSample extends Component {

    render() {
        return(
            <Layout>
                <BloodSampleForm />
            </Layout>
        );
    }
}

        
export default withData(addBloodSample);