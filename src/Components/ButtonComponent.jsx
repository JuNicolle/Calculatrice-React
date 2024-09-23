const ButtonComponent=({text, functionToDo, classN})=>{
    return <>
        <button className={classN} onClick={functionToDo}>{text}</button>
    </>
}

export default ButtonComponent;