const ADD_MESSAGE = 'ADD-MESSAGE';
// const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let initialState = {
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
    ]
    // ,
    // newmessageData: 'messageData'
}

const dialogReduser = (state = initialState, action) => {

    switch (action.type) {
        // case UPDATE_MESSAGE:
        //     return{
        //         ...state,
        //         newmessageData: action.newmessageData
        //     };
       
        case ADD_MESSAGE:
     
            let newMessage = {
                id: 1,
                message: action.text
            }
            return {
                ...state,
                messageData: [...state.messageData, newMessage]
                // ,
                // newmessageData: ''
            };

        default:
            return state;
    }


}

export const addMessageActionCreator = (text) => ({ type: ADD_MESSAGE, text })
// export const onChangeMessageActionCreator = (newMessage) =>
//     ({ type: UPDATE_MESSAGE, newmessageData: newMessage })

export default dialogReduser;