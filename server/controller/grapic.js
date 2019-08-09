const userHistoryInfo = (req, res, next) => {
  let dbInstance = req.app.get('db')

  dbInstance.getUserHistoryInfo(req.params.id)
  .then((response) => {
    // console.log('respons', response)
    return res.status(200).send(response)
  })
  .catch((err) => console.error('Unable to fetch getUserHistoryInfo()', err))
}

module.exports = {
  userHistoryInfo
}