import { useEffect, useState } from "react"

type UserPropsFromApi = {
    username: string
    id: string
    phone: string
    email: string

}
export default function Users() {

    const [state, setState] = useState(false)
    const [users, setUsers] = useState<UserPropsFromApi[]>([])

    function handleState() {
        setState(!state)
    }

    useEffect(() => {
        console.log("effect runs")
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }, [])

    console.log("users list aus api", users)

    const UserListToRender = users.map(user => {
        return <div key={user.id}>
            <h2>{user.username}</h2>
            <p>Tel: {user.phone}</p>
            <p>Email: {user.email}</p>
        </div>
    })

    return <div>
        <button onClick={handleState}>UsersButton</button>
        <h1>Userlist</h1>
        {UserListToRender}
    </div>
}