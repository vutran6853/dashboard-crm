import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { resetUserUtitesDataAction } from '../../../duck/grapicReducer'
import axios from 'axios'
import './house.scss'

class House extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
        year: '---',
        month: '---'
      },
      payment: '',
      monthText: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
    }
  }

  componentDidMount() {
    this.handleCreateRangeOfYear()
  }

  componentWillUnmount() {
    // console.log('component will unmount from House components', this)
    this.props.resetUserUtitesDataAction()
  }

  handleSetValueToItem = (e) => {
    let { utites } = this.state
    this.setState({
      utites: {
        ...utites,
        [e.target.name]: parseFloat(e.target.value)
      }
    })
  }

  handleSubmitUtites = () => {
    let { selected_date, utites } = this.state
    console.log('this', this.state)
    let newObj = {
      date: `${selected_date.year}-${selected_date.month}`,
      utites,
      houseID: 1
    }

    console.log('newObj', { newObj })
    console.table(newObj)
    this.handleResetState()
    // this.handleCreateRangeOfYear()
    // axios.post('http://localhost:3020/api/house', newObj)
    // .then((response) => {
    //   console.log('response', response)
    //   if (response.data.length === 0) {
    //     this.handleResetState()
    //     // this.handleCreateRangeOfYear()
    //   }
    // })
    // .catch((err) => console.log('%c Unable post at handleSubmitUtites()', 'color: red; font-size: 1rem', err))
  }

  handleCreateRangeOfYear = () => {
    let time = new Date()
    let year = time.getFullYear()
    let past = year - 1
    let future = year + 10
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
      payment: '',
      selected_date: {
        year: '---',
        month: '---'
      }
    })
  }

  handleSetPayment = (e) => {
    this.setState({ payment: e.target.value })
  }

  handleSubmitHousePayment = () => {
    let { payment, selected_date } = this.state
    let newObj = {
      date: `${selected_date.year}-${selected_date.month}`,
      payment,
      houseID: 1
    }

    // console.log('newObj', newObj);

    // axios.post('http://localhost:3020/api/house/payment', newObj)
    // .then((response) => {
    //   console.log('response', response)
    //   if (response.data.length === 0) {
    //     this.handleResetState()
    //     // this.handleCreateRangeOfYear()
    //   }
    // })
    // .catch(() => console.log('%c Unable post at handleSubmitHousePayment()', 'color: red; font-size: 1rem'))
  }

  handleRouteToHomeGraphic = () => {
    // console.log(this.props.history('/graphic'))
    // this.props.history.push('/graphic')
  }

  render() {
    let { utites, range_date, monthText } = this.state

    let displayYear = range_date.map((value, index) => (
      <option key={index} value={value}>
        {value}
      </option>
    ))

    let displayMonth = monthText.map((value, index) => (
      <option key={value} value={index + 1}>
        {value}
      </option>
    ))

    return (
      <div className="house_container">
        <div className="house_form_container">
          <div className="house_form_item">
            <div>
              <h3>Month</h3>
              <select onChange={(e) => this.handleSetMonth(e)}>
                <option value="---" defaultValue>
                  ---
                </option>
                {displayMonth}
              </select>
            </div>

            <div>
              <h3>Year</h3>
              <select onChange={(e) => this.handleSetYear(e)}>{displayYear}</select>
            </div>
          </div>

          {/* <h3>Utites Section</h3> */}

          <div className="house_utites_form_container">
            <div>
              <span>
                <p>Water</p>
                <input
                  name="water"
                  type="number"
                  value={utites.water}
                  onChange={this.handleSetValueToItem}
                  placeholder="Enter water amount..."
                />
              </span>
              <span>
                <p>Gas</p>
                <input
                  name="gas"
                  type="number"
                  value={utites.gas}
                  onChange={this.handleSetValueToItem}
                  placeholder="Enter gas amount..."
                />
              </span>
            </div>

            <div>
              <span>
                <p>Internet</p>
                <input
                  name="internet"
                  type="number"
                  value={utites.internet}
                  onChange={this.handleSetValueToItem}
                  placeholder="Enter internet amount..."
                />
              </span>
              <span>
                <p>Electri</p>
                <input
                  name="electric"
                  type="number"
                  value={utites.electric}
                  onChange={this.handleSetValueToItem}
                  placeholder="Enter electric amount..."
                />
              </span>
            </div>
          </div>
          <button className="submit" onClick={this.handleSubmitUtites}>
            Submit
          </button>

          {/* <div className="house_payment_container"> */}
          {/* <h3>house payment</h3> */}
          {/* <input type="number" name="payment"  placeholder="Enter payment" value={ this.state.payment }  onChange={ this.handleSetPayment }/> */}
          {/* <button onClick={ this.handleSubmitHousePayment } >Submit</button> */}
          {/* </div> */}
        </div>

        {/* <Link to="/house/graphic">View Home paymentGraphic</Link> */}
        <Link to="/house/graphic/utites">View Home Utites Graphic</Link>

        {/* <div>
          <p>utites section</p>
          <input name="water" type="number" value={ utites.water }  onChange={ this.handleSetValueToItem } placeholder="Enter water"/>
          <input name="gas" type="number" value={ utites.gas } onChange={ this.handleSetValueToItem } placeholder="Enter gas"/>
          <input name="internet" type="number" value={ utites.internet } onChange={ this.handleSetValueToItem } placeholder="Enter internet"/>
          <input name="electric" type="number" value={ utites.electric } onChange={ this.handleSetValueToItem } placeholder="Enter electric"/>
          <button onClick={ this.handleSubmitUtites } >Submit</button>
        </div> */}

        {/* <button onClick={ this.handleRouteToHomeGraphic }>View Home Graphic</button> */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { resetUserUtitesDataAction })(House)
