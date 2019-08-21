import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserInfo, fetchFakeUserInfo } from '../../../duck/grapicReducer'
import DisplayBook from './DisplayBook'
import DisplayDrink from './DisplayDrink'
import DisplayFood from './DisplayFood'
import DisplayGas from './DisplayGas'
import './displayGrapic.css'

class Grapic extends Component {
    state = {
      gasData: [],
      drinkData: [],
      bookData: [],
      foodData: [],
      allData: [],
      nameLabel: ['Gas', 'Drink', 'Book', 'Food'],
      monthName: ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    }

  componentDidMount() {
    // console.log('enter componentDidMount')
    // console.log("%c Unable to get user info at handleGetUserInfo()!", "color: red; font-size:1rem;")

    this.props.auth.authBool ? this.handleGetUserInfo() : this.handleGetFakeUserInfo()
  }

  componentWillUnmount() {
    console.log('exit componentWillUnmount')
  }


  handleGetUserInfo = async () => {
    console.log('enter');
    let gas = []
    let drink = []
    let book = []
    let food = []
    try {
      let response = await this.props.fetchUserInfo(this.props.auth.userID)
    
      response.value.data.filter((value) => {
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
      this.setState({ allData: response.value.data })
    }
    catch {
      console.log("%c Unable to get user info at handleGetUserInfo()!", "color: red; font-size:1rem;")
    }
  }

  handleGetFakeUserInfo = async () => {
    console.log('enter handleGetFakeUserInfo')

    let gas = []
    let drink = []
    let book = []
    let food = []
    try {
      let response = await this.props.fetchFakeUserInfo()
    
      response.value.data.filter((value) => {
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
      this.setState({ allData: response.value.data })
    }
    catch {
      console.log("%c Unable to get user info at handleGetFakeUserInfo()!", "color: red; font-size:1rem;")
    }

  }

  handleSelectMonth = (e) => {
    let { allData } = this.state
    let gas = []
    let drink = []
    let book = []
    let food = []
console.log(e.target.value)
    allData.filter((value, index) => {
      // console.log(value.purchase_date, index)
      if (value.purchase_date.includes(e.target.value) && value.item === 'Gas') {
        return gas.push(value)
      }
      if (value.purchase_date.includes(e.target.value) && value.item === 'Drink') {
        return drink.push(value)
      }
      if (value.purchase_date.includes(e.target.value) && value.item === 'Book') {
        return book.push(value)
      }
      if (value.purchase_date.includes(e.target.value) && value.item === 'Food') {
        return food.push(value)
      }
    })

    this.setState({ gasData: gas })
    this.setState({ drinkData: drink })
    this.setState({ bookData: book })
    this.setState({ foodData: food })
  }

  setCurrentDate = () => {
    // console.log('enter')
    let currentDate = new Date()
    console.log(currentDate.getFullYear());
    console.log(`0${ currentDate.getMonth() + 1 }-${ currentDate.getFullYear() }`);
    return `${ currentDate.getMonth() + 1 }-${ currentDate.getFullYear() }`
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

    // const handleGetFakeUserInfo = (props) => {
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
        <input type="month" name="month" value={ `${ this.setCurrentDate() }` } onChange={ (e) => this.handleSelectMonth(e) } />
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

export default connect(mapPropToState, { fetchUserInfo, fetchFakeUserInfo })( Grapic)