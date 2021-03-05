import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";




let store = {
    _state: {



        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: 'It\'s my first post', likesCount: 11 }],

            newPostText: 'Umicode'

        },

        dialogsPage: {

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

        },

        sidebar: {
            
        }




    },

    _callSubscriber() {
        console.log('hello')
    },


    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },



    dispatch(action) {
       
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        
        this._callSubscriber(this._state);


    }



}








export default store;

window.store = store;