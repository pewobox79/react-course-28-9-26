import { useEffect, useState } from "react"

type UserPropsFromApi = {
    username: string
    id: string
    phone: string
    email: string

}
export default function UsersAsync() {

    const [users, setUsers] = useState<UserPropsFromApi[]>([])
    const [fetchState, setFetchState] = useState({ success: false, error: false, loading: true })


    useEffect(() => {
        console.log("effect runs")

        async function getUsers() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                if (!response.ok) {
                    setFetchState({ ...fetchState, error: true, loading: false })
                    throw Error("failed to fetch")
                }

                const data = await response.json()
                setFetchState({ ...fetchState, success: true, loading: false })
                setUsers(data)

            } catch (err) {
                console.warn("err", err)
                setFetchState({ ...fetchState, error: true, loading: false })
            }
        }

        getUsers()
    }, [])

    console.log("users list aus api", users)

    const UserListToRender = users.map(user => {
        return <div key={user.id}>
            <h2>{user.username}</h2>
            <p>Tel: {user.phone}</p>
            <p>Email: {user.email}</p>
        </div>
    })

    console.log("fetchstate", fetchState)
    return <div>
        <h1>Userlist</h1>
        {fetchState.error && <h1>error in fetch</h1>}
        {fetchState.loading && <h1>data still loading....</h1>}
        {fetchState.success && UserListToRender}
    </div>
}