const posts = [
    { title: "first post", body: "first post body" },
    { title: "second post", body: "second post body" }
];

function getPosts() {
    setTimeout(() => {
        let output = ""
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}
function createPost(newPost){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        posts.push(newPost)

        const simulatedError = true
        if(!simulatedError){
            resolve()
        }else{
            reject("failed to resolve")
        }

    }, 2000)

    })
}
const newPost = { title: "dritter Post", body: "body 3ter Post" }
createPost(newPost).then(getPosts).catch(err => console.warn("error", err))