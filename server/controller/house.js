const postHouseUtites = (req, res, next) => {
  let { houseID, date, utites } = req.body
  let dbInstance = req.app.get('db')

  dbInstance.postHouseUtilites(utites.gas, utites.water, utites.electric, utites.internet, date, houseID)
  .then((response) => {
    res.status(200).send(response)
  })
  .catch((err) => console.log('Unable to post postHouseUtites()', err))
}

const postHousePayment = (req, res, next) => {
  console.log(req.body)
  let { date, payment, houseID } = req.body
  let dbInstance = req.app.get('db')

  dbInstance.postHousePayment(payment, date, houseID)
  .then((response) => {
    res.status(200).send(response)
  })
  .catch((err) => console.log('Unable to post postHouseUtites()', err))
}

const getHouseHistory = (req, res, next) => {
  // console.log('hit getHouseHistory', req.params)
  let dbInstance = req.app.get('db')
  dbInstance.getHousehistory(req.params.id)
  .then((response) => {
    res.status(200).send(response)
  })
  .catch((err) => console.log('Unable to post getHouseHistory()', err))

}

module.exports = {
  postHouseUtites,
  postHousePayment,
  getHouseHistory
}