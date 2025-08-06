//FETCH ND AXIOS BOTH ARE USED TO SET HTTP REQUEST BOTH ARE API nd fetch api is promise based 
//SYNTAX OF FETCH fetch("url",)
let userContainer=document.querySelector(".user-container")
let registerform=document.querySelector(".register");
let nameInput=document.querySelector(".name");
let userNameInput=document.querySelector(".username")
function getUsersData(URL){
    fetch(URL)
    .then((res)=>{
        console.log(res)
        return res.json()
    })//fetch mai 2 baar .then lgta h one for response nd other to pass data
    .then((data)=>{
        console.log(data)
        data.forEach(user=>{
            displayUser(user);

        })
    })
    .catch((err)=>{
        console.log(err)
    })
}
function displayUser(user){
    let li=document.createElement("li");
    li.setAttribute("class","user-item")
    li.innerHTML=`<div class="user-info">
                <h1>${user.name}</h1>
                <p>${user.username}</p>
            </div>
            <div CLASS="USER-BTN">
                <button class="USER-DELETE">❌</button>
                <button class="USER-Edit">pp</button>

            </div>`
            userContainer.appendChild(li);
}
// getUsersData('https://jsonplaceholder.typicode.com/users')
getUsersData('http://localhost:9666/users')
function addUser(name,username,URL){
    let data={
        name:name,
        username:username
    }
    fetch(URL,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{"content-type":"application/json"}
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })
}
registerform.addEventListener("submit",function(e){
    e.preventDefault();
    let name=nameInput.value ;
    let username=userNameInput.value;
    addUser(name,username,"http://localhost:9666/adduser")
})