import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserInfo } from '../../../duck/grapicReducer'
import DisplayBook from './DisplayBook'
import DisplayDrink from './DisplayDrink'
import DisplayFood from './DisplayFood'
import DisplayGas from './DisplayGas'
import './displayGrapic.css'

class Grapic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gasData: [],
      drinkData: [],
      bookData: [],
      foodData: [],
      allData: [],
      nameLabel: ['Gas', 'Drink', 'Book', 'Food'],
      monthName: ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    }
  }

  componentDidMount() {
    // console.log('enter componentDidMount')
    this.props.auth.authBool ?
    this.props.fetchUserInfo(this.props.auth.userID)
    .then((response) => {
      let gas = []
      let drink = []
      let book = []
      let food = []
      response.value.data.filter((value) => {
        // console.log(value.item, index)
        if (value.item === 'Gas') {
          gas.push(value)
        }
        if (value.item === 'Drink') {
          return drink.push(value)
        }
        if (value.item === 'Book') {
          return book.push(value)
        }
        if (value.item === 'Food') {
          return food.push(value)
        }
      })

      this.setState({ gasData: gas })
      this.setState({ drinkData: drink })
      this.setState({ bookData: book })
      this.setState({ foodData: food })
      return response
    })
    .then((response) => {
      // console.log(response.value.data)
      this.setState({ allData: response.value.data })
    })
    .catch((err) => console.error('unable to get user info at fetchUserInfo()', err))
    : this.displayFakeData()
  }

  componentWillUnmount() {
    console.log('exit componentWillUnmount')
  }

  handleSelectMonth = (e) => {
    const { allData } = this.state
    let gas = []
    let drink = []
    let book = []
    let food = []

    let me = allData.filter((value, index) => {
        console.log(value.purchase_date, index)
        if (value.purchase_date.includes(e.target.value) && value.item === 'Gas') {
          // console.log('purchase_date', value.purchase_date)
          return gas.push(value)
        }
        if (value.purchase_date.includes(e.target.value) && value.item === 'Drink') {
          // console.log('purchase_date', value.purchase_date)
          return drink.push(value)
        }
        if (value.purchase_date.includes(e.target.value) && value.item === 'Book') {
          // console.log('purchase_date', value.purchase_date)
          return book.push(value)
        }
        if (value.purchase_date.includes(e.target.value) && value.item === 'Food') {
          // console.log('purchase_date', value.purchase_date)
          return food.push(value)
        }
    })

    this.setState({ gasData: gas })
    this.setState({ drinkData: drink })
    this.setState({ bookData: book })
    this.setState({ foodData: food })
  }


  render() {
    // const fetchRealData = (payload) => {
    //   console.log('enter fetchRealData', payload)
    // }

    // const fetchUserDate = (id) => {
    //   console.log('enter fetchuser', id)
    //   this.props.fetchUserInfo(id)
    //   return (
    //     <div>
    //       Real data go here
    //     </div>
    //   )
    // }

    // const displayFakeData = (props) => {
    //   console.log('enter displayFakeData', props)
    //   return (
    //     <div>
    //        fake data exist here
    //     </div>
    //   )
    // }

    // const displayAuthMessage = this.props.authBool ? fetchUserDate(this.props.userID) : displayFakeData()
    const displayTypeName = this.state.nameLabel.map((value, index) => {
      let text = [...value, '--']
      return (
        <option value={ value } key={ index }>{ value }</option>
      )
    })

    return (
      <div>
        <select name="type" onChange={ (e) => this.handleSelectMonth(e) }>
          { displayTypeName }
        </select>
        <input type="month" name="month" onChange={ (e) => this.handleSelectMonth(e) } />
        {/* <input type="" value=""/> */}
        <div className="grapicContainer">
          <DisplayGas gasData={ this.state.gasData } name={ this.state.nameLabel[0] } />
          <DisplayDrink drinkData={ this.state.drinkData } name={ this.state.nameLabel[1] } />
          <DisplayBook bookData={ this.state.bookData } name={ this.state.nameLabel[2] } />
          <DisplayFood foodData={ this.state.foodData } name={ this.state.nameLabel[3] } />

        </div>
        {/* { displayAuthMessage } */}
        {/* {fetchUserDate} */}
        {/* { displayFakeData } */}
      </div>
    )
  }
}

// Map Props From Reducer To Component
const mapPropToState = (state) => {
  return {
    auth: state.auth,
    grapic: state.grapic
  }
}

export default connect(mapPropToState, { fetchUserInfo })( Grapic)