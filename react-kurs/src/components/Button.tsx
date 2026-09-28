type ButtonProps ={
    label: string
}

function Button ({label}:ButtonProps){

    function handleClick (){
        alert("btn clicked")
    }
    //(INLINE Schreibweise)
    //return <button onClick={()=>alert("btn clicked")}>{label}</button>

    return <button onClick={handleClick}>{label}</button>
}

export default Button