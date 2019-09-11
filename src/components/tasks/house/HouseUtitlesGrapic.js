import React from 'react'
import { connect } from 'react-redux'
import { Line, Bar } from 'react-chartjs-2'

function HouseUtitlesGrapic(props) {
  // console.log('props', props.grapic.userUtitesFilterData)
  const utitesTotalArray = props.grapic.userUtitesFilterData.map((value) => value.total)
  const utitesPaymentDate = props.grapic.userUtitesFilterData.map((value) => value.date)

  const data =  {
    labels: utitesPaymentDate,
    datasets: [
      {
        label: 'Overall',
        backgroundColor: '#53CAFF',
        borderColor: '#4767FF',
        borderWidth: 2,
        pointRadius: 4,
        hoverBackgroundColor: '#82EEFF',
        hoverBorderColor: '#41E2E8',
        data: utitesTotalArray
      }
    ]
  }

  return (
    <div className="house_utites_graphic_item">
      <p>Overall included (Gas, Water, internet, electric)</p>
      { props.grapic.userSelectGrapicType === '---' ||
        props.grapic.userSelectGrapicType === 'Line' ? (
          <Line data={ data }
                width={ 100 }
                height={ 40 }
          />
        ) : (
          <Bar data={ data }
          width={ 100 }
          height={ 40 }
          />
        )
      }
    </div>
  )
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, {  })(HouseUtitlesGrapic)