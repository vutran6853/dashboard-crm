import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getContactsListAction } from '../../duck/crmReducer'
import PropTypes from 'prop-types'
import './contacts.css'

class Contacts extends Component {
  // state = {  }

  componentDidMount() {
    this.props.getContactsListAction()
  }
  render() {
    console.log('this.prpps', this.props)

    let displayContacts = this.props.contactsList.map((value, index) => {
      // console.log(`value[${index}] =`, value)
      return (
        <div className="contacts-item" key={ value.users_id }>
          <p>{ value.users_id }</p>
          <p>{ value.users_username }</p>
          <p>{ value.users_email ? value.users_email : 'no email exist' }</p>
        </div>
      )
    })

    return (
      <div className="contacts-container">
        { displayContacts }
      </div>
    )
  }
}

function mapPropToState(state) {
  return state.crm
}

Contacts.propTypes = {
  contactsList: PropTypes.array.isRequired
}

export default connect(mapPropToState, { getContactsListAction })(Contacts)