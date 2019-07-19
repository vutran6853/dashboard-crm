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
import Login from './components/login/Login'

const route = (
  <Switch>
    <Route exact path="/dashboard" component={ Dashboard } />
    <Route path='/login' component={ Login } />
    <Route path='/tasks' component={ Tasks } />
    <Route path='/email' component={ Email } />
    <Route path='/tasks' component={ Tasks } />
    <Route path='/contacts' component={ Contacts } />
    <Route path='/chat' component={ Chat } />
    <Route path='/deals' component={ Deals } />
    <Route path='/settings' component={ Settings } />
  </Switch>
)

export default route