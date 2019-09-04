import React, { useState } from 'react'
import axios from 'axios'
import { isNumber } from 'util';

function Room(props) {
  let [amount, setAmount] = useState('')
  let [year, setYear] = useState('')
  let [month, setMonth] = useState('')
  let [roomID, setRoomID] = useState('')
  let [monthText] = useState(['----', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])
  let range_date = []

  function handleCreateRangeOfYear() {
    let time = new Date()
    let year = time.getFullYear()
    let past = year - 1
    let future = year + 100
    let newArray = []

    for (let i = past; future > i; i++) {
      newArray.push(i)
    }
    return range_date.push('----', ...newArray)
  }

  handleCreateRangeOfYear()


  const handlePostRentRoom = () => {
    if (!isNaN(roomID)) {
      let newObj = {
        date: `${ year }-${ month }`,
        amount,
        room_ID: roomID
      }  
      // console.log(newObj)

      axios.post('http://localhost:3020/api/room', newObj)
      .then((response) => {
        console.log(response)
      })
      .catch(() => console.log('%c Unable post at handlePostRentRoom()', 'color: red; font-size: 1rem'))

    }

    return null
  }

  const handleSetAmount = (e) => {
    setAmount(e.target.value)
  }

  const handleSelectYear = (e) => {
    setYear(e.target.value)
  }

  const handleSelectMonth = (e) => {
    setMonth(e.target.value)
  }

  const handleSelectRoomID = (e) => {
    setRoomID(parseInt(e.target.value))
  }

  
  const displayYear = range_date.map((value) => (
    <option key={ value } >{ value }</option>
  ))

  const displayMonth = monthText.map((value) => (
    <option key={ value } >{ value }</option>
  ))


  // console.log('range_date', range_date)
  return (
    <div>
      Room Component
      <h3>Year</h3>
      <select onChange={ handleSelectYear }>
        { displayYear }
      </select>

      <h3>Month</h3>
      <select onChange={ handleSelectMonth }>
        { displayMonth }
      </select>

      <h3>Room</h3>
      <select onChange={ handleSelectRoomID }>
        <option value="----">----</option>
        <option value="1">1</option>
        <option value="2">2</option>

      </select>


      <input onChange={ handleSetAmount } value={ amount } type="number" placeholder="Enter room payment"/>
      <button onClick={ handlePostRentRoom } >Submit</button>
    </div>
  )
}

export default Room