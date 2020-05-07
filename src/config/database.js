require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : 
})

module.exports = {
  host: process.env.BD_HOST,
  username: process.env.BD_USER,
  password: process.env.BD_PASS,
  database: process.env.BD_NAME,
  dialect: process.env.BD_DIALECT || 'postgres',
  storage: './__tests__/database.sqlite',
  operatorAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}