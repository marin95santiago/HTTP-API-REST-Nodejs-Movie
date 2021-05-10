export default {
    port: process.env.PORT || 5000,
    jwtSecret: process.env.SECRET || 'qwerasdzxcv',
    DB: {
      URI: process.env.MONGODB_URI || 'mongodb://localhost/apimovie'
    }
};