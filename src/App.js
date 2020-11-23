import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { HashRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UserContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReduser';
import { compose } from 'redux';
import Preloader from './components/Common/Preloader/Preloader';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const MyProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {
  catchAllUnhandledErrors = (reason, promise)=>{
    alert("some error occured")
    // console.log(promiseRejectionEvent);
  }
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors); 
      // handle error here, for example log   
  
  }
  componentWillUnmount(){
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors) 
  }
  render() {
    if (!this.props.initialized) {

      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Switch>
            <Route exact path='/' render={()=><Redirect to = {'/profile'} />} />
            <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
            <Route path='/profile/:userId?' render={withSuspense(MyProfileContainer)} />
            <Route path='/users' render={() => <UserContainer />} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
            <Route path='/login' component={LoginPage} />
            <Route path='*' render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
      </div>

    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

let MainApp = (props) => {
  return <HashRouter>
    <Provider Provider store={store} >
      <AppContainer />
    </Provider >
  </HashRouter >
}

export default MainApp;