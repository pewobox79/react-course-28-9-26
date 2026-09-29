import { useEffect, useState } from "react"
const AbortControllerExercise = () => {

    const [userId, setUserId] = useState(1)
    const [state, setState] = useState({ success: false, error: false, loading: true })
    const [selectedUser, setSelectedUser] = useState({ id: "", username: "" })

    console.log("userId", userId)
    useEffect(() => {
        console.log("effect runs....")
        const controller = new AbortController()
        const {signal} = controller
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`
        const config = {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            },
            signal // ist equivalent von signal:signal
        }
        fetch(url, config)
            .then(res => {
                console.log("res", res)
                if(!res.ok){
                    setState({...state, error: true})
                    throw Error("failed to fetch")
                }

                return res.json()
            })
            .then(data => {
                setSelectedUser(data)
                setState({ ...state,  success: true, loading: false })
            })

            //cleanup function
            return ()=>{
                console.log("cleanup runs....")
                controller.abort()
            }
    }, [userId])


    return <div>
        {state.error && <h1>failed to fetch</h1>}
        {state.loading ? <h2>daten werden geladen von user {userId}...</h2> : <div>
            <p>ID:{selectedUser.id}</p>
            <p>Name: {selectedUser.username}</p>
        </div>}
        <button onClick={() => setUserId(1)}>User 1</button>
        <button onClick={() => setUserId(2)}>User 2</button>
        <button onClick={() => setUserId(3)}>User 3</button>
        <button onClick={() => setUserId(4)}>User 4</button>
        <button onClick={() => setUserId(5)}>User 5</button>
    </div>
}


export default AbortControllerExercise