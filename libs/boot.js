module.exports = app => {
  app.db.sequelize.sync().then(() => {
    console.log('Sequelize connection established')

    app.listen(app.get('port'), () => {
      console.log(`NTask API = porta ${app.get('port')}`)
    })
  })
}