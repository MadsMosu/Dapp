import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

/*
const Person = ({person}) => (

);
*/

const PersonList = ({data}) => {
    const {error, allPersons} = data;
    if(error) {
        return <div>Error loading persons</div>
    }
    if(allPersons && allPersons.length) {

    }
}

export const allPersons = gql`
    query {
        allPersons {
            cpr
            firstName
            lastName
        }
    }
`;

export default graphql(allPersons)(PersonList);