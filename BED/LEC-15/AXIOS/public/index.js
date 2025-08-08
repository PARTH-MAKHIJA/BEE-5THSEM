//function to get comment data
console.log(axios)
async function getComment(URL){
//HOW TO SEND GET REQUEST USING AXIOS
// axios.get(URL).then((data)=>{
//     console.log(data)
// })
// .catch(err=>console.log(err))
try{
    let response=await axios.get(URL)
console.log(response.data);
}catch(error){
    console.log(error)
}
}
getComment("https://jsonplaceholder.typicode.com/comments")
addBlog("http://localhost:6655/blog","first blog","first blog des")
async function addBlog(URL,title,description){
    try{
    let newBlog={
        title:title,
        description:description
    }
    let response=await axios.post(URL,newBlog);
    console.log(response)
}
catch(error){
    console.log(error)
}
}