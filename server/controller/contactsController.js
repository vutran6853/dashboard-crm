const contacts = (req, res) => {
  let dbInstance = req.app.get('db')

  dbInstance.getAllContacts()
  .then((response) => {
    // console.log('response', response)
    return res.status(200).send(response)
  })
  .catch((err) => {
    console.log('unable to fetch getAllContacts', err)
  })
}

module.exports = {
  contacts
}