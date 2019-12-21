import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Line, Bar } from 'react-chartjs-2'

function HouseUtitlesAllGrapic(props) {
  // console.log('props', props.grapic.userUtitesAllData)
  const gasArray = [[], []]
  const waterArray = [[], []]
  const internetArray = [[], []]

  props.grapic.userUtitesAllData.filter((value, index) => {
    if (value.utilites_date.includes(props.grapic.userSelectYear)) {
      // console.log(`value[${index}] =`, value)
      gasArray[0].push(value.utilites_gas)
      gasArray[1].push(value.utilites_date)
      waterArray[0].push(value.utilites_water)
      waterArray[1].push(value.utilites_date)
      internetArray[0].push(value.utilites_internet)
      internetArray[1].push(value.utilites_date)
    }
  })

  console.log('gasArray', gasArray)

  const gasData = {
    labels: gasArray[1],
    datasets: [
      {
        label: 'GAS',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        pointRadius: 4,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: gasArray[0]
      }
    ]
  }

  const waterData = {
    labels: waterArray[1],
    datasets: [
      {
        label: 'WATER',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        pointRadius: 4,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: waterArray[0]
      }
    ]
  }

  const internetData = {
    labels: internetArray[1],
    datasets: [
      {
        label: 'INTERNET',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        pointRadius: 4,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: internetArray[0]
      }
    ]
  }

  return (
    <Fragment>
      {props.grapic.userSelectGrapicType === '---' || props.grapic.userSelectGrapicType === 'Line' ? (
        <div className="house_utites_graphic_all_container">
          <div className="house_utites_graphic_all_item">
            <Line data={gasData} width={50} height={35} />
          </div>

          <div className="house_utites_graphic_all_item">
            <Line data={waterData} width={50} height={35} />
          </div>

          <div className="house_utites_graphic_all_item">
            <Line data={internetData} width={50} height={35} />
          </div>
        </div>
      ) : (
        <div className="house_utites_graphic_all_container">
          <div className="house_utites_graphic_all_item">
            <Bar data={gasData} width={50} height={35} />
          </div>

          <div className="house_utites_graphic_all_item">
            <Bar data={waterData} width={50} height={35} />
          </div>

          <div className="house_utites_graphic_all_item">
            <Bar data={internetData} width={50} height={35} />
          </div>
        </div>
      )}
    </Fragment>
  )
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, {})(HouseUtitlesAllGrapic)
