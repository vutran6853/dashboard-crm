import React from 'react'
import { Pie } from 'react-chartjs-2'

function HousePie(props) {
  console.log(props)
  const paymentArray = props.data.map((value) => parseFloat(value.house_payment_payment))
  const totalPayment = paymentArray.reduce((acc, curr) => acc + curr, 0)

  const data = {
    labels: [
      'Payment',
      'House'
    ],
    datasets: [{
      data: [totalPayment, parseFloat('383100').toFixed(2)],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
    }]
  }

  return (
    <div>
      HousePie
      <Pie data={ data } />
    </div>
  )
}

export default HousePie