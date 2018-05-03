const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
type Query {
  person(cpr: String): Person
  donation(id: Int, type: String): Donation
  employee(employeeID: String): Employee
  allPersons: [Person]
  allDonations: [Donation]
  allEmployees: [Employee]
}
type Person {
  cpr: String
  firstName: String
  lastName: String
  donations: [Donation]
}
input PersonInput {
  cpr: String
  firstName: String
  lastName: String
}
type Donation {
  id: Int
  type: String
  person: Person
}
input DonationInput {
  id: Int
  type: String
  person: String
}
type Employee {
  employeeID: String
  privateKey: String
}
input EmployeeInput {
  employeeID: String
  privateKey: String
}
type Mutation {
  createPerson(input: PersonInput!): Person
  createDonation(input: DonationInput!): Donation
  createEmployee(input: EmployeeInput!): Employee
}`;

const schema = makeExecutableSchema({typeDefs, resolvers});

module.exports = schema;