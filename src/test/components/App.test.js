import React from 'react'
import ReactDOM from 'react-dom'
import App from '../../App'
import { mount, shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

it('renders without crashing', function () {
  const wrapper = shallow(<App />)

  // console.log('WRAPPER = ', wrapper.html())
})
