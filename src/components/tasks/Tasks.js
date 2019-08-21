import React, { Component } from 'react'
import './tasks.scss'

class Tasks extends Component {

  componentWillUnmount() {
    console.log('component will unmount from Task components')
  }

  handleRouteTo = (passValue) => {
    this.props.history.push(`/Tasks/${passValue}`)
  }

  render() {
    return (
      <div className="tasksContainer">
        <button onClick={ () => this.handleRouteTo('how_much') }>
          SalePrice
        </button>

        <button onClick={ () => this.handleRouteTo('spending_what') }>
          SpendWhat
        </button>

        <button onClick={ () => this.handleRouteTo('grapic') }>
          Grapic
        </button>
      </div>
    )
  }
}

export default Tasks