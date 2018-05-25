# Ethereum DApp

## Prerequisites

Be sure to have the following installed:
- MongoDB Shell
- Ganache-cli

MongoDB Shell can be downloaded from the following site: https://www.mongodb.com/download-center#community
Ganache can be downloaded from the following site: http://truffleframework.com/ganache/

Direct a command console to MongoDB bin folder and type "mongod", followed by a new command console at same directory and type "mongo". In The second console window, type "use ffudb".

Be sure to load in the data dump into MongoDB, else the application WILL NOT WORK.
In the second console window type: 
```mongorestore --db ffudb projectdir/ffudb/donations```
```mongorestore --db ffudb projectdir/ffudb/employees```
```mongorestore --db ffudb projectdir/ffudb/people```

Where projectdir is the main directory of the project. 

### How to Start MongoDB

Direct a command console to MongoDB bin folder and type ```mongod```, followed by a new command console windows at same directory and type ```mongo```.

## Getting Started

Open browser and go to ```localhost:3000```.
Go to ```localhost:3000/admin``` to get access to the admin section.

## Running the tests

Open the ganache-app and nagivate a command console to the project directory.
- Type  ```truffle test``` to run all automated tests. 
