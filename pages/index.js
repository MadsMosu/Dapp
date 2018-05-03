import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Table, Checkbox, Label } from 'semantic-ui-react';
import ethers from 'ethers';
import provider from '../utils/configs/provider';
import abi from '../utils/abi/sampleStore';
import contractAddr from '../utils/addresses/sampleStore';
import BloodSampleRow from '../components/BloodSampleRow';
import CellTissueSampleRow from '../components/CellTissueSampleRow';

class SamplePage extends Component {

    static async getInitialProps() {
        const employeeWallet = new ethers.Wallet("0x274d1e42f06076e6d3ef981f0c244750827ccf56b19768816618e9217129a030", provider);
        const SampleStore = new ethers.Contract(contractAddr, abi, employeeWallet);
    
        let bloodCount;
        await SampleStore.functions.bloodSampleCount().then(function(value) {
            bloodCount = value;
        });

        let cellTissueCount;
        await SampleStore.functions.cellTissueSampleCount().then(function(value) {
            cellTissueCount = value;
        });

        let bloodSampleIndicators = [];
        for(let i = 1; i<=bloodCount; i++) {
            await SampleStore.functions.getBloodSampleIndicatorByIndex(i).then(function(result) {
            const bloodSample = {
                id: parseInt(result[0]),
                signer: result[1],
                inStorage: result[2]
            };
            bloodSampleIndicators.push(bloodSample);
        });
        };
           
        let cellTissueSampleIndicators = [];
        for(let i = 1; i<=cellTissueCount; i++) {
            await SampleStore.functions.getCellTissueSampleIndicatorByIndex(i).then(function(result) {
            const cellTissueSample = {
                id: parseInt(result[0]),
                signer: result[1],
                inStorage: result[2]
            };
            cellTissueSampleIndicators.push(cellTissueSample);
        });
        };

        return {bloodSampleIndicators, cellTissueSampleIndicators}; 
      };

      renderBloodRows() {
        return this.props.bloodSampleIndicators.map((donation, index) => {
            return (<BloodSampleRow
                key={index}
                donation={donation}
            />
            );
        });
      };

      renderCellTissueRows() {
        return this.props.cellTissueSampleIndicators.map((donation, index) => {
            return (<CellTissueSampleRow
                key={index}
                donation={donation}
            />
            );
        });
      };

    render() {
        const { Header, Row, HeaderCell, Body } = Table;
        return(
            <Layout>
                <h3>Blood Samples</h3>
                <Table>
                    <Header>
                        <Row>
                        <HeaderCell>Donation ID</HeaderCell>
                        <HeaderCell>Signer</HeaderCell>
                        <HeaderCell>In Storage</HeaderCell>
                        <HeaderCell>Sample</HeaderCell>
                        </Row>
                    </Header>
                    <Body>{this.renderBloodRows()}</Body>
                </Table>
                <h3>Cell and Tissue Samples</h3>
                <Table>
                    <Header>
                        <Row>
                        <HeaderCell>Donation ID</HeaderCell>
                        <HeaderCell>Signer</HeaderCell>
                        <HeaderCell>In Storage</HeaderCell>
                        <HeaderCell>Sample</HeaderCell>
                        </Row>
                    </Header>
                    <Body>{this.renderCellTissueRows()}</Body>
                </Table>
            </Layout>
        );
    }
}

export default SamplePage;