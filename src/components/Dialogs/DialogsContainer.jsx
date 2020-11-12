import React from 'react';
import { addMessageActionCreator } from '../../redux/dialogReduser';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthContainer';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        dialogData: state.dialogPage.dialogData,
        messageData: state.dialogPage.messageData,
        newmessageData: state.dialogPage.newmessageData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (text) => {
            dispatch(addMessageActionCreator(text));
        }
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

// let AuthRedirect = withAuthRedirect(Dialogs)
// const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirect);
//  export default DialogContainer;