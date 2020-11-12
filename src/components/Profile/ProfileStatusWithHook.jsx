import React, { useEffect, useState } from 'react'


const ProfileStatusWithHook = (props) => {

    let [editeMode, setEditeMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let activateEditeMode = () => {
        setEditeMode(true)
    }
    let deActivateEditeMode = () => {
        setEditeMode(false)
        props.updateStatus(status)
    }
    let onChangeStatus = (e) => {

        setStatus(e.currentTarget.value)
        // debugger

    }

    return <div>
        {!editeMode && <div>
            <span onDoubleClick={activateEditeMode}>{props.status || "++++++++"}</span>
        </div>}
        {editeMode &&
            <div>
                <input autoFocus={true} onChange={onChangeStatus}
                    onBlur={deActivateEditeMode} value={status} />
            </div>

        }
    </div>
}
export default ProfileStatusWithHook