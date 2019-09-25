import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFakeUserInfoAction } from '../../duck/grapicReducer'
import DisplayBook from '../tasks/graphic/DisplayBook'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grapicBool: false,
      grapicFakeBool: false
    }
  }


  componentWillMount() {
    if (this.props.auth.authBool) {
      console.log(true, 'authBool')
     }

    if (!this.props.auth.authBool) {
      this.props.fetchFakeUserInfoAction()
      .then(() => this.setState({ grapicFakeBool: true }))
      .catch(() => console.log('%c Unable to fetch fetchFakeUserInfoAction()', 'color: red; font-size: 1rem'))
    }
  }

  render() {
    console.log(this.props.grapic.book)
    const renderDisplayGraphicFake = this.state.grapicFakeBool === true ? (
      <DisplayBook bookData={ this.props.grapic.book } name="Book"/>
      // 'true'
    ) : 'false'

    return (
      <div>
        Dashboard components
        <p>{ renderDisplayGraphicFake }</p>
      </div>
    )
  }
}

const mapPropsToState = (state) => state

export default connect(mapPropsToState, { fetchFakeUserInfoAction })(Dashboard)