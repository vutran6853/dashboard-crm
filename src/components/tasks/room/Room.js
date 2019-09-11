import React, { useState } from 'react'
import axios from 'axios'
import handleCreateRangeOfYear from '../../../helper/rangeDate'
import handleRangeMonth from '../../../helper/rangeMonth'

function Room(props) {
  let [amount, setAmount] = useState('')
  let [year, setUserYear] = useState({
    range_date: handleCreateRangeOfYear(),
    userSelectYear: ''
   })
  let [month, setMonth] = useState({
    range_month: handleRangeMonth(),
    userSelectMonth: ''
  })
  let [roomID, setRoomID] = useState('')

  // console.log('month', month)


  const handlePostRentRoom = () => {
    if (roomID === '') {
      return null
    }

    if (!isNaN(roomID)) {
      console.log('inside')
      let newObj = {
        date: `${ year.userSelectYear }-${ month.userSelectMonth }`,
        amount,
        room_ID: roomID
      }
      console.log(newObj)

      axios.post('http://localhost:3020/api/room/payment', newObj)
      .then((response) => {
        console.log(response)
        if (response.data.length === 0) {
          alert('post complete')
          resetAllState()
        }
      })
      .catch(() => console.log('%c Unable post at handlePostRentRoom()', 'color: red; font-size: 1rem'))

    }
    return null
  }

  const resetAllState = () => {
    setAmount('')
    setUserYear({
      range_date: handleCreateRangeOfYear(),
      userSelectYear: ''
    })
    setMonth({
      range_month: handleRangeMonth(),
      userSelectMonth: ''
    })
    setRoomID('')
    
  }

  const handleSetAmount = (e) => {
    setAmount(e.target.value)
  }

  const handleSelectYear = (e) => {
    setUserYear({
      ...year,
      userSelectYear: e.target.value
    })
  }

  const handleSelectMonth = (e) => {
    setMonth({
      ...month,
      userSelectMonth: e.target.value
    })
  }

  const handleSelectRoomID = (e) => {
    setRoomID(parseInt(e.target.value))
  }

  const renderYears = year.range_date.map((value) => (
    <option key={ value } value={ value } >{ value }</option>
  ))

  const renderMonths = month.range_month.map((value, index) => (
    <option key={ index } value={ index }>{ value }</option>
  ))

  console.log(year)

  return (
    <div>
      Room Component
      <h3>Year</h3>
      <select onChange={ handleSelectYear }>
        { renderYears }
      </select>

      <h3>Month</h3>
      <select onChange={ handleSelectMonth }>
        { renderMonths }
      </select>

      <h3>Room</h3>
      <select onChange={ handleSelectRoomID }>
        <option value="----">----</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>

      <input onChange={ handleSetAmount } value={ amount } placeholder="Enter room payment"/>
      <button onClick={ handlePostRentRoom }>Submit</button>
    </div>
  )
}

export default Room