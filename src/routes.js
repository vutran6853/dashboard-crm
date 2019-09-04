import React from 'react'
import { Switch, Route } from "react-router-dom"
import Dashboard from './components/dashboard/Dashboard'
import Tasks from './components/tasks/Tasks'
import Email from './components/email/Email'
import Contacts from './components/contacts/Contacts'
import Chat from './components/chat/Chat'
import Deals from './components/deals/Deals'
import Settings from './components/settings/Settings'
// import Navbar from './components/navbar/Navbar'
import Login from './components/auth/Login'
import Signup from './components/auth/SignUp'
import Grapic from './components/tasks/graphic/Grapic'
import HowMuch from './components/tasks/howMuch/SalePrice'
import SpendingWhat from './components/tasks/SpendingWhat/SpendingWhat'
import House from './components/tasks/house/House'
import HouseGraphic from './components/tasks/house/HouseGraphic'
import HouseUtites from './components/tasks/house/HouseUtites'
import Room from './components/tasks/room/Room'

const route = (
  <Switch>
    <Route exact path="/dashboard" component={ Dashboard } />
    <Route path='/Login' component={ Login } />
    <Route path='/Signup' component={ Signup } />
    <Route path='/Email' component={ Email } />
    <Route exact path='/Tasks/' component={ Tasks } />
    <Route path='/Tasks/grapic' component={ Grapic } />
    <Route path='/Tasks/how_much' component={ HowMuch } />
    <Route path='/Tasks/spending_what' component={ SpendingWhat } />
    <Route path='/Tasks/house' component={ House } />
    <Route exact path='/house/graphic' component={ HouseGraphic } />
    <Route path='/house/graphic/utites' component={ HouseUtites } />
    <Route path='/Tasks/room' component={ Room } />
    <Route path='/Contacts' component={ Contacts } />
    <Route path='/Chat' component={ Chat } />
    <Route path='/Deals' component={ Deals } />
    <Route path='/Settings' component={ Settings } />
  </Switch>
)

export default route