import React from 'react'
import ReactDOM from 'react-dom'
import Task from './Tasks'
import { mount, shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import store from '../../duck/store'

configure({ adapter: new Adapter() })

it('renders without crashing', function() {
  const wrapper = mount(
    <Provider store={store}>
      <Task />
    </Provider>
  )

  console.log('WRAPPER = ', wrapper.html())
})
