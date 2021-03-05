const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
    dialogs: [
        { id: 1, name: 'Mangust' },
        { id: 2, name: 'Umar' },
        { id: 3, name: 'Adam' },
        { id: 4, name: 'BruceLee' },
        { id: 5, name: 'Panda' },
        { id: 6, name: 'Ball' }],

    messages: [
        { id: 1, message: 'Хьо мил ву?' },
        { id: 2, message: 'Нохчи ву!' },
        { id: 3, message: 'Дик яр хьун' },
        { id: 4, message: 'Дик яр хьун' },
        { id: 5, message: 'Дик яр хьун' }],


    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 6, message: body });
            return state;
        default:
            return state;
    }

}


export const sendMessagetCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })


export default dialogsReducer;