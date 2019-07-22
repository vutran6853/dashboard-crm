import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getContactsList } from '../../duck/crmReducer'

class Contacts extends Component {
  state = {  }

  componentDidMount() {
    this.props.getContactsList()
  }
  render() {
    console.log('this.prpps', this.props)
    return ( 
      <div>
        Contacts components
      </div>
    )
  }
}

function mapPropToState(state) {
  console.log(state)
  return state
}

export default connect(mapPropToState, { getContactsList })(Contacts)