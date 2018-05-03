
module.exports = {
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      gas: 4698712,
      gasPrice: 1000000000,
      network_id: '*'
    }
  }
}
