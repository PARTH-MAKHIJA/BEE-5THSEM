//FETCH ND AXIOS BOTH ARE USED TO SET HTTP REQUEST BOTH ARE API nd fetch api is promise based 
//SYNTAX OF FETCH fetch("url",)
let userContainer=document.querySelector(".user-container")
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