import React, { Component } from 'react';
import Layout from '../components/Layout';
import withData from '../lib/withData';
import CellTissueSampleForm from '../components/CellTissueSampleForm';

class addCellTissueSample extends Component {

    render() {
        return(
            <Layout>
                <CellTissueSampleForm />
            </Layout>
        );
    }
}

        
export default withData(addCellTissueSample);