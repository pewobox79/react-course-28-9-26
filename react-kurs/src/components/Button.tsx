type ButtonProps ={
    label: string
    action?: ()=>void
}

function Button ({label,action}:ButtonProps){

    function handleClick (){
        action()
    }
    //(INLINE Schreibweise)
    //return <button onClick={()=>alert("btn clicked")}>{label}</button>

    return <button onClick={handleClick}>{label}</button>
}

export default Button