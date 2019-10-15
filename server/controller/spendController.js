const postDailySpend = (req, res) => {
  let dbInstance = req.app.get('db')

  dbInstance.postSpend(req.body.id, req.body.item, req.body.price, req.body.purchaseDate)
  .then((repsonse) => {
    return res.status(200).send(repsonse)
  })
  .catch((err) => console.error('Unable to post postSpend()', err))
}

module.exports = {
  postDailySpend
}