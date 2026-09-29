const posts = [
    { title: "first post", body: "first post body" },
    { title: "second post", body: "second post body" }
];


function getPosts(){
    setTimeout(()=>{

        let output = ""
        posts.forEach((post)=>{
            output += `<li>${post.title}</li>`
            document.body.innerHTML = output
        })
    }, 1000)
}

function createPost(newPost){
    setTimeout(()=>{
        posts.push(newPost)
    }, 2000)
}
const newPost = { title: "dritter Post", body: "body 3ter Post" }
//createPost(newPost)
//createPost({ title: "dritter Post", body: "body 3ter Post" })
//getPosts()

// mit dem obigen Ablauf wird dritte post nicht angezeigt, da createPost länger dauert als getPosts()

//Lösung => CALLBACK

function createPostMitCallback(newPost, callback){

    setTimeout(() => {
        posts.push(newPost)
        callback()
    }, 2000)

}

createPostMitCallback(newPost, getPosts)