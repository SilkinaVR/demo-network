import React from 'react'
import DialogItems from '../../Dialogs/DialogItem/DialogItem'
import s from './Frends.module.css'
const Frends = (props) => {
    let dialogElements = props.state.dialogData.map(dialog =>
        <DialogItems name={dialog.name} id={dialog.id} />
    )
    return (
        <div className={s.myFrend}>
            <div className={s.myFrend__title}>
                Frends
                </div>
            <div className={s.myFrend__Items}>
                {dialogElements}
            </div>


        </div>

    )
}
export default Frends;