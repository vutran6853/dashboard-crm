const postHouseUtites = (req, res) => {
  let { houseID, date, utites } = req.body
  let dbInstance = req.app.get('db')

  dbInstance.postHouseUtilites(utites.gas, utites.water, utites.electric, utites.internet, date, houseID)
  .then((response) => {
    res.status(200).send(response)
  })
  .catch((err) => console.log('Unable to post postHouseUtites()', err))
}

const postHousePayment = (req, res) => {
  console.log(req.body)
  let { date, payment, houseID } = req.body
  let dbInstance = req.app.get('db')

  dbInstance.postHousePayment(payment, date, houseID)
  .then((response) => {
    res.status(200).send(response)
  })
  .catch((err) => console.log('Unable to post postHouseUtites()', err))
}

const getHouseHistory = (req, res) => {
  // console.log('hit getHouseHistory', req.params)
  let dbInstance = req.app.get('db')
  dbInstance.getHousehistory(req.params.id)
  .then((response) => {
    res.status(200).send(response)
  })
  .catch((err) => console.log('Unable to post getHouseHistory()', err))

}

const postRoomPayment = (req, res) => {
  let dbInstance = req.app.get('db')
  let { date, amount, room_ID } = req.body

  dbInstance.postRoomPaymentDB(room_ID, date, amount)
  .then((response) => res.status(200).send(response))
  .catch((err) => console.log('Unable to post postRoomPayment()', err))
}

const getHouseUtitlesOverall = (req, res) => {
  let dbInstance = req.app.get('db')

  dbInstance.getHousehistoryUtilitesOverall(req.params.id)
  .then((response) => res.status(200).send(response))
  .catch((err) => console.log('Unable to fetch getHouseUtitlesOverall()', err))
}

const getHouseUtitlesAll = (req, res) => {
  // console.log('enter mmememme')
  let dbInstance = req.app.get('db')
  dbInstance.getHousehistoryUtilitesAll(req.params.id)
  .then((response) => res.status(200).send(response))
  .catch((err) => console.log('Unable to fetch getHouseUtitlesAll()', err))

}

module.exports = {
  postHouseUtites,
  postHousePayment,
  getHouseHistory,
  postRoomPayment,
  getHouseUtitlesOverall,
  getHouseUtitlesAll
}