import React from 'react'
import { Line } from 'react-chartjs-2'
import './displayGrapic.css'

function DisplayGas(props) {
  const displayPrice = props.gasData.map((value) => value.price)

  const displayPurchaseDate = props.gasData.map((value) => {
    let date = new Date(value.purchase_date)
    let month = date.getUTCMonth(value.purchase_date) + 1
    let day = date.getUTCDate(value.purchase_date)
    return [`${month}/${day}`]
  })

  const data = {
    labels: displayPurchaseDate,
    datasets: [
      {
        label: props.name,
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: displayPrice
      }
    ]
  }

  return (
    <div className="">
      <Line data={data} />
    </div>
  )
}

export default DisplayGas
