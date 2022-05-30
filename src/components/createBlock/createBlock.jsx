import React, {useId, useState} from 'react';
import classes from "./createBlock.module.css";


const CreateBlock = ({updatePosts}) => {

    const [value, setValue] = useState('')

    function createPost(){
        let date = new Date()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()

        updatePosts({
            id: hours+':'+minutes+':'+seconds,
            value:value,
        })
        setValue('')
    }


    return (
        <div className={classes.inputBlock}>
            <input placeholder={'Введите заметку'} onChange={(e)=> setValue(e.target.value)} value={value} className={classes.input} type="text"/>
            <button onClick={createPost} className={classes.btn}>Добавить заметку</button>
        </div>
    );
};

export default CreateBlock;