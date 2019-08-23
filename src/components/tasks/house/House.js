import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class House extends Component {
  state = {
    utites: {
      water: '',
      gas: '',
      internet: '',
      electric: ''
    },
    mortgage_insurance: '',
    hoa_fee: '',
    property_taxes: '',
    range_date: [],
    selected_date: {
      year: '',
      month: ''
    },
    payment: ''
  }

  componentDidMount() {
    this.handleCreateRangeOfYear()
  }


  handleSetValueToItem = (e) => {
    let { utites } = this.state
    this.setState({
      utites: {
        ...utites, 
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmitUtites = () => {
    console.log('hit handleSubmitUtites')
    let { selected_date, utites } = this.state
    console.log('this', this.state)
    let newObj = {
      date: `${ selected_date.year }-${ selected_date.month }`,
      utites,
      houseID: 1
    }

    axios.post('http://localhost:3020/api/house', newObj)
    .then((response) => {
      console.log('response', response)
      if (response.data.length === 0) {
        this.handleResetState()
        // this.handleCreateRangeOfYear()
      }
    })
    .catch(() => console.log('%c Unable post at handleSubmitUtites()', 'color: red; font-size: 1rem'))

    console.table(newObj)
  }

  handleCreateRangeOfYear = () => {
    let time = new Date()
    let year = time.getFullYear()
    let past = year - 5
    let future = year + 100
    let newArray = []

    for (let i = past; future > i; i++) {
      newArray.push(i)
    }

    this.setState({ range_date: ['---', ...newArray] })
  }

  handleSetMonth = (e) => {
    let { selected_date } = this.state
    this.setState({ 
      selected_date: {
        ...selected_date,
        month: e.target.value
      }
     })
  }

  handleSetYear = (e) => {
    let { selected_date } = this.state
    this.setState({ 
      selected_date: {
        ...selected_date,
        year: e.target.value
      }
     })
  }

  handleResetState = () => {
    this.setState({
      utites: {
        water: '',
        gas: '',
        internet: '',
        electric: ''
      },
      payment: ''
    })
  }

  handleSetPayment = (e) => {
    this.setState({ payment: e.target.value })
  }

  handleSubmitHousePayment = () => {
    let { payment, selected_date } = this.state
    let newObj = {
      date: `${ selected_date.year }-${ selected_date.month }`,
      payment,
      houseID: 1
    }

    axios.post('http://localhost:3020/api/house/payment', newObj)
    .then((response) => {
      console.log('response', response)
      if (response.data.length === 0) {
        this.handleResetState()
        // this.handleCreateRangeOfYear()
      }
    })
    .catch(() => console.log('%c Unable post at handleSubmitHousePayment()', 'color: red; font-size: 1rem'))

  }

  handleRouteToHomeGraphic = () => {
    // console.log(this.props.history('/graphic'))
    // this.props.history.push('/graphic')
  }


  render() {
    let { utites, range_date } = this.state

    let displayYear = range_date.map((value, index) => {
      return (
        <option key={ index } value={ value }>{ value }</option>
      )
    })


    return (
      <div>
        House
        <p>Month</p>
        <select onChange={ (e) => this.handleSetMonth(e) }>
          <option value="---">---</option>
          <option name="Jan" value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>

        <p>year</p>
        <select onChange={ (e) => this.handleSetYear(e) }>
          {/* { this.handleCreateRangeOfYear() } */}
          { displayYear }
        </select>

        <div>
          <p>utites section</p>
          <input name="water" type="number" value={ utites.water }  onChange={ this.handleSetValueToItem } placeholder="Enter water"/>
          <input name="gas" type="number" value={ utites.gas } onChange={ this.handleSetValueToItem } placeholder="Enter gas"/>
          <input name="internet" type="number" value={ utites.internet } onChange={ this.handleSetValueToItem } placeholder="Enter internet"/>
          <input name="electric" type="number" value={ utites.electric } onChange={ this.handleSetValueToItem } placeholder="Enter electric"/>
          <button onClick={ this.handleSubmitUtites } >Submit</button>
        </div>

        <div>
          <p>house payment</p>
          <input type="number" name="payment"  placeholder="Enter payment" value={ this.state.payment }  onChange={ this.handleSetPayment }/>
          <button onClick={ this.handleSubmitHousePayment } >Submit</button>

        </div>

        <Link to="/house/graphic">View Home Graphic</Link>
        {/* <button onClick={ this.handleRouteToHomeGraphic }>View Home Graphic</button> */}

      </div>
    )
  }
}

export default House