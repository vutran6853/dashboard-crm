import React from 'react'
import { Line, Bar } from 'react-chartjs-2'

function DisplayBook(props) {
  const displayPrice = props.bookData.map((value) => value.price)

  const displayPurchaseDate = props.bookData.map((value) => {
    let date = new Date(value.purchase_date)
    let month = (date.getUTCMonth(value.purchase_date) + 1)
    let day = date.getUTCDate(value.purchase_date)
    return [`${month}/${day}`]
  })

  const data =  {
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
    <div>
      <Line data={ data } />
      {/* <Bar data={ data } /> */}
    </div>
  )
}

export default DisplayBook