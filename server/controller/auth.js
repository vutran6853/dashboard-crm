const bcrypt = require('bcrypt')
const saltRounds = 10

const register = async (req, res) => {
  let dbInstance = req.app.get('db')

  let hashpassword = await bcrypt.hash(req.body.passValue.password, saltRounds)
  // .then((response) => response)
  // .catch((err) => console.log('Unable to hash password at login()', err))

  let result = await dbInstance.registerAccount(req.body.passValue.username, hashpassword)

  if(result) {
    res.status(200).send(result)
  } else {
    console.log('err')
  }
}

const login = (req, res) => {
  let dbInstance = req.app.get('db')
  console.log('req', req.body)

  dbInstance.loginInAccount(req.body.passValue.username)
  .then((response) => {
    if(response.length > 0) {
      bcrypt.compare(req.body.passValue.password, response[0].users_password)
      .then((result) => {
        if(result === true) {
          console.log('login in succend')
          return res.status(200).send(response)
        } else {
          console.log('incorrent password send message')
        }
      })

    } else {
      console.log('not exist username is not exist send back')
      return res.status(404).send()
    }
  })
}

module.exports = {
  register,
  login
}