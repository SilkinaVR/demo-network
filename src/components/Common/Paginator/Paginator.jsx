import React, { useState } from 'react'
import styles from './Paginator.module.css'

const Paginator = (props) => {
    let pages = Math.ceil(props.pageCount / props.pageSize);
    
    let pagesArry = [];
    for (let i = 1; i <= pages; i++) {
        pagesArry.push(i);
    }
    
    let portionCount = Math.ceil(pages / props.portionSize);
    let [ portionNumber, setPortionNumber] = useState(1);
    let leftItemPortion = (portionNumber - 1) * props.portionSize + 1;
    let rightItemPortion = portionNumber * props.portionSize;
    
    return (

        <div className={styles.paginator}>
            {portionNumber > 1 && 
            <button onClick = {()=> {setPortionNumber(portionNumber - 1)}} >Left</button> }
            {pagesArry.filter(p => p >= leftItemPortion && p <= rightItemPortion)
            .map((p)=>
            {
                return (
                    <span key={p} className={props.currentPage === p && styles.selectedPages}
                        onClick={() => { props.onpageChanged(p) }}>{p}</span>
                )
            })}
                 {portionCount > portionNumber && 
            <button onClick = {()=> {setPortionNumber(portionNumber + 1)}} >Right</button> }
            
        </div>
    )
}
export default Paginator;