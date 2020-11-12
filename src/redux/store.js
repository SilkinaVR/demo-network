import profileReduser from "./profileReduser";
import dialogReduser from "./dialogReduser";

let store = {
  _state: {
    dialogPage: {
      dialogData: [
        { id: '1', name: 'Dima' },
        { id: '2', name: 'Andrey' },
        { id: '3', name: 'Valera' },
        { id: '4', name: 'Kristina' }
      ],
      messageData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'How are you' },
        { id: 4, message: 'How are it' }
      ],
      newmessageData: 'messageData'
    },
    profilePage: {
      postData: [
        { id: 1, message: 'Hi, how are you', count: 15 },
        { id: 2, message: 'its my post', count: 20 },
        { id: 3, message: 'its you post', count: 20 }
      ],
      newPostText: 'it-kama'
    }
  },
  _callSibscruber() {
    console.log('df');
  },
  getState() {
    return this._state;
  },
  sibscrub(observer) {
    this._callSibscruber = observer;

  },
  dispatch(action) {
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.dialogPage = dialogReduser(this._state.dialogPage, action);
    this._callSibscruber(this._state);
  }
}

export default store;

