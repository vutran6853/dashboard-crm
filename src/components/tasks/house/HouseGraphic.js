import React, { Component } from 'react'
import axios from 'axios'
import HouseLineGraphic from './HouseLineGraphic'
import HousePie from './HousePie'

class HouseGraphic extends Component {
  state = {
    allDate: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3020/api/house/history/1`)
    .then((response) => {
      // console.log(response)
      this.setState({ allDate: response.data })
    })
    .catch(() => console.log('%c Unable get date at HouseGraphic()', 'color: red; font-size: 1rem'))
  }

  render() {
    return (
      <div>
        HouseGraphic Component
        <HouseLineGraphic data={ this.state.allDate } />
        <HousePie data={ this.state.allDate } />
      </div>
    )
  }
}

export default HouseGraphic