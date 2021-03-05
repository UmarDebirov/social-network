import React from 'react';
import { connect } from 'react-redux';
import { sendMessagetCreator, updateNewMessageBodyCreator } from '../redux/dialogs-reducer';
import Dialogs from './Dialogs';




let mapStateToProps = (state) => {
    
    return {
        dialogsPage: state.dialogsPage
    }
} 


let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessagetCreator())
            
        },

        sendMessage: (body) => {
            dispatch(updateNewMessageBodyCreator(body)) 
        }

    }
} 


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;