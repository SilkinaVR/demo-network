import React from 'react'

export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<div>Loading...</div>}>
                    <Component {...props} />
               </React.Suspense>

    }

}
























// import React from 'react'
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';


// let mapStateToProps =(state)=>({
//  isAuth: state.auth.isAuth
// })


// export const withAuthRedirect = (Component)=>{
//     class RedirectComponent extends React.Component{

//         render(){
//             if(!this.props.isAuth) return <Redirect to = '/login' />
//             return <Component  {...this.props}/>
//         }
//     }
//     let ConnectAuthRedirect = connect(mapStateToProps)(RedirectComponent);
// return ConnectAuthRedirect;
// }



