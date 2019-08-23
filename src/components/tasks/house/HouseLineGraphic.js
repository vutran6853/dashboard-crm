import React from 'react'
import { Line, Bar, Doughnut, HorizontalBar, Pie, Scatter } from 'react-chartjs-2'

function HouseLineGraphic(props) {
  console.log('props', props)
  let displayPayment = props.data.map((value) => value.house_payment_payment)
  let displayPaymentDate = props.data.map((value) => {
    // console.log(value.house_payment_date)
    return [value.house_payment_date]
  })

  console.log('displayPayment', displayPayment)
  console.log('displayPaymentDate', displayPaymentDate.flat())

  // let displayPurchaseDate = props.data.map((value) => {
  //   let date = new Date(value.purchase_date)
  //   let month = (date.getUTCMonth(value.purchase_date) + 1)
  //   let day = date.getUTCDate(value.purchase_date)
  //   return [`${month}/${day}`]
  // })

  let data =  {
    labels: displayPaymentDate,
    datasets: [
      {
        label: 'Hello world',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: displayPayment
      }
    ]
  }

  return (
    <div>
      HouseLineGraphic
      <Line data={ data } />
      <Bar data={ data } />
      {/* <Pie data={ data } /> */}
      {/* <Doughnut data={ data } /> */}
    </div>
  )
}

export default HouseLineGraphic