module.exports = {
  servers: {
    one: {
      host: '34.224.7.174',
      username: 'ubuntu',
      pem:"/Users/jordan/Downloads/cardswithfriends.pem"
      // password:
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'Cards With Friends',
    path: '../Project',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'cardgamesonline.tech',
      MONGO_URL: 'mongodb://cardgamesonline.tech'
    },

    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 60
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};