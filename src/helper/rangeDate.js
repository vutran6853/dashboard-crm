function handleCreateRangeOfYear() {
  let time = new Date()
  let year = time.getFullYear()
  let past = year - 1
  let future = year + 10
  let newArray = []

  for (let i = past; future > i; i++) {
    newArray.push(i)
  }

  return ['---', ...newArray]
}

export default handleCreateRangeOfYear
