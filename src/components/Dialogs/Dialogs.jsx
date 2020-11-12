import React from 'react';
import s from './Dialogs.module.css'
import DialogItems from './DialogItem/DialogItem';
import MessageItems from './MessageItems/MessageItems';
import PostForm from '../Profile/MyPost/MyPostForm';


const Dialogs = (props) => {

    let dialogElements = props.dialogData.map(dialog => <DialogItems name={dialog.name} id={dialog.id} />)

    let messageElements = props.messageData.map(messages => <MessageItems message={messages.message} />)

    let addMessage = (text) => {
        return props.addMessage(text);
    }

    // let updateMessage = (e) => {
    //     let text = e.target.value;
    //     props.updateMessage(text);
    // }

    return (
        <div>
            <div className={s.title}>
                <div className={s.dialogs}>
                    <ul className={s.dialogs__items}>
                        {dialogElements}

                    </ul>
                </div>
                <ul className={s.messages}>

                    {messageElements}

                </ul>

            </div>
            <div className={s.sendMessage}>
                <PostForm addMessage={addMessage} namebutton={'Add message'} placeholder={'Введите ообщение'} />
                {/* <div >
                    <textarea onChange={updateMessage} value={props.newmessageData}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div> */}

            </div>

        </div>

    );

}

export default Dialogs;