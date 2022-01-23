import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import gallery from "./Gallery"
import mygroup from "./Mygroup"
import birthday from './Birthday'
import mytask from './Mytask'
import publicgroup from './Publicgroup'
import notification from './Notification'
import announcement from './Announcement'
import achive from './Achive'
import activity from './Activity'
import feed from './Feed'
import event from './Event'
import update from './Update'
import profile from './Profile'
import speed from './Speeddial'
import Announcementdb from "./updatedb/Announcementdb"
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Container  >
      <div >
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
            <Switch>
              <Route  path="/dashboard"  component={Dashboard}></Route>
            </Switch>
            <Switch>
              <Route  path="/gallery" component={gallery}>

              </Route>
            </Switch>

            <Switch>
              <Route  path="/mygroup" component={mygroup}>

              </Route>
            </Switch>
          
            <Switch>
              <Route  path="/birthday" component={birthday}>

              </Route>
            </Switch>
            <Switch>
              <Route  path="/publicgroup" component={publicgroup}>

              </Route>
            </Switch>
            <Switch>
              <Route  path="/mytask" component={mytask}>

              </Route>
            </Switch>
            <Switch>
              <Route  path="/notification" component={notification}>

              </Route>
            </Switch>
            <Switch>
              <Route  path="/announcement" component={announcement}>

              </Route>
            </Switch>
          
            <Switch>
              <Route  path="/achive" component={achive}>

              </Route>
            </Switch>

            
            <Switch>
              <Route  path="/activity" component={activity}>

              </Route>
            </Switch>


            <Switch>
              <Route  path="/feed" component={feed}>

              </Route>
            </Switch>


            <Switch>
              <Route  path="/event" component={event}>

              </Route>
            </Switch>
            <Switch>
              <Route  path="/update" component={update}>

              </Route>
            </Switch>
            <Switch>
              <Route  path="/profile" component={profile}>

              </Route>
            </Switch>

            <Switch>
              <Route  path="/speed" component={speed}>

              </Route>
            </Switch>
           
        
            <Switch>
              <Route  path="/Announcementdb" component={Announcementdb}>

              </Route>
            </Switch>
           
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App