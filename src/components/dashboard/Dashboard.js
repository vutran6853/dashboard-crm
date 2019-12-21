import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFakeUserInfoAction } from '../../duck/grapicReducer'
import DisplayBook from '../tasks/graphic/DisplayBook'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import './dashboard.scss'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grapicBool: false,
      grapicFakeBool: false,
      calBool: false,
      events: [
        { title: 'event 1', date: '2019-10-14' },
        { title: 'event 2', date: '2019-10-15' }
      ],
      newTodo: {
        date: '',
        title: ''
      }
    }
    this.handleDateClick = this.handleDateClick.bind(this)
    this.handleSubmitNewItem = this.handleSubmitNewItem.bind(this)
    this.handleSetNewItem = this.handleSetNewItem.bind(this)
  }

  componentWillMount() {
    // if (this.props.auth.authBool) {
    //   console.log(true, 'authBool')
    //  }
    // if (!this.props.auth.authBool) {
    //   this.props.fetchFakeUserInfoAction()
    //   .then(() => this.setState({ grapicFakeBool: true }))
    //   .catch(() => console.log('%c Unable to fetch fetchFakeUserInfoAction()', 'color: red; font-size: 1rem'))
    // }
  }

  handleDateClick(e) {
    console.log(e)
    // alert('s')
    this.setState({ calBool: true })
  }

  handleSetNewItem(e) {
    // console.log('name', e.target.name, 'value', e.target.value)
    this.setState({
      newTodo: {
        ...this.state.newTodo,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmitNewItem() {
    let { events, newTodo } = this.state
    console.log({ newTodo })
    if (newTodo.title === '' || newTodo.date === '') {
      alert('Enter fill in correct infomation')
    } else {
      console.log('true all ')
    }
  }

  render() {
    // console.log(this.props.grapic.book)
    // const renderDisplayGraphicFake = this.state.grapicFakeBool === true ? (
    //   <DisplayBook bookData={ this.props.grapic.book } name="Book"/>
    //   // 'true'
    // ) : 'false'
    let renderInputField = this.state.calBool ? (
      <div>
        <input type="text" name="title" placeholder="Enter new Todo list..." onChange={this.handleSetNewItem} />
        <input type="date" name="date" placeholder="Enter date" onChange={this.handleSetNewItem} />
        <button onClick={this.handleSubmitNewItem}>Submit</button>
      </div>
    ) : (
      ''
    )

    return (
      <div>
        {/* <p>{ renderDisplayGraphicFake }</p> */}
        {/* <FullCalendar
          defaultView="timeGridWeek"
          plugins={[timeGridPlugin, interactionPlugin]}
          // weekends={false}
          events={this.state.events}
          dateClick={this.handleDateClick}
        /> */}
        {renderInputField}
      </div>
    )
  }
}

const mapPropsToState = (state) => state

export default connect(mapPropsToState, { fetchFakeUserInfoAction })(Dashboard)
