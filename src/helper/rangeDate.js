// let range_date = []

function handleCreateRangeOfYear() {
  let time = new Date()
  let year = time.getFullYear()
  let past = year - 1
  let future = year + 10
  let newArray = []

  for (let i = past; future > i; i++) {
    newArray.push(i)
  }

  // console.log(newArray)
  // return newArray
  // range_date.push('----', ...newArray)
  return ['---', ...newArray]
}


export default handleCreateRangeOfYear