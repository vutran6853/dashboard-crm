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

const updateEmail = (req, res) => {
  let dbInstance = req.app.get('db')
  // console.log('req', req.body)

  dbInstance.postUpdateEmail(req.body.id, req.body.newEmail)
  .then((response) => {
    console.log('response', response)
    // res.status(200).send(response)
  })
  .catch((err) => {
    console.log('Unable to post at updateEmail(): ', err)
  })
}

const updatePassword = (req, res) => {
  let dbInstance = req.app.get('db')

  console.log('hit updatePassword')
  console.log('req.body.', req.body)
  // bcrypt.hash(req.body.newPassword, saltRounds)
  // .then((hashpassword) => {
  //   dbInstance.postUpdatePassword(req.body.id, hashpassword)
  //   .then((response) => {
  //     console.log('response', response)
  //     res.status(200).send(response)
  //   })
  //   .catch((err) => {
  //     console.log('Unable to post at updateEmail(): ', err)
  //   })
  // })
  // .catch((err) => {
  //   console.log('unable to hash password at updatePassword(): ', err)
  // })
}

module.exports = {
  register,
  login,
  updateEmail,
  updatePassword
}