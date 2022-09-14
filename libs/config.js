module.exports = { 
  database: 'ntask',
  username: 'root',
  password: '235711',
  params: {
    host: 'localhost',
    dialect: 'mysql',
    define: {
      underscore: true
    },
    logging: true
  },
  jwtSecret: "Ntak$K-API",
  jwtSession: {session: false}
}