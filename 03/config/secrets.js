module.exports = {
  db: process.env.MONGODB || 'mongodb://localhost:27017/twitatron',

  cryptos: {
    algorithm: 'aes256',
    key: process.env.CRYPTO_KEY || 'Your crypto key goes here' 
  },

  sessionSecret: process.env.SESSION_SECRET || 'Your session secret goes here',

  twitter: {
    consumerKey: process.env.TWITTER_KEY || '4duPqFs0y5Av9KPGIolbz0RhU',
    consumerSecret: process.env.TWITTER_SECRET  || 'DSaVDtOcnEW6H5mxWHVIYRCC7RRdPPsaUTF5OnmbXPd0lLcbYx',
    callbackURL: process.env.TWITTER_CALLBACK || 'http://localhost:3000/auth/twitter/callback',
    passReqToCallback: true
  }
};