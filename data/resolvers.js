const {Employee, Person, Donation} = require('./mongodb');

const resolvers = {
  Query: {
    person(_, args) {
      return Person.findOne(args);
    },
    allPersons() {
      return Person.find();
    },
    donation(_, args) {
      return Donation.findOne(args);
    },
    allDonations() {
      return Donation.find();
    },
    employee(_, args) {
      return Employee.findOne(args);
    },
    allEmployees() {
      return Employee.find();
    },
  },
  Person: {
    donations(person) {
      return Donation.find({person});
    },
  },
  Donation: {
    person(donation) {
      return Person.findOne(donation.person);
    },
  },

  Mutation: {
    async createPerson(_, {input}) {
      const person = new Person({...input});
      await person.save();
      return person.toObject();
    },
    async createDonation(_, {input}) {
      const person = await Person.findOne({cpr: input.person});
      const donation = new Donation({
        ...input,
        person: person._cpr
      });
      await donation.save();
      return donation.toObject();
    },
    async createEmployee(_, {input}) {
      const employee = new Employee({...input})
      await employee.save();
      return employee.toObject();
    },
  },
};

module.exports = resolvers;