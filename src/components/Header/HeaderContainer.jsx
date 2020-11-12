import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData, getAuth, logout } from '../../redux/authReduser';

class HeaderContainer extends React.Component {
    render() {
        return (          
                <Header  {...this.props}/>
        )}
}
let mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { setAuthUserData, getAuth, logout 
     })(HeaderContainer);