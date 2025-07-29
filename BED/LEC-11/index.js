// //accesing dom element
// //1:using id
// //2:using class
// //3:using tag
// //4:query selector / gueryselectorAll
// let el1=document.getElementById("heading");
// console.log(el1);
// let el2=document.getElementsByClassName("item");
// console.log(el2[0]);
// let el3=document.getElementsByTagName("p");
// console.log(el3[0]);
let el4=document.querySelector("p");
let el5=document.querySelector(".item");
let el6=document.querySelectorAll(".item");
let ul=document.querySelector('#container')
console.log(ul);
console.log(el4);
console.log(el5);
console.log(el6);
//properties
/*
innertext
innerHTML
TEXTCONTENT
*/
let data=el4.innerText;
console.log(data);
el4.innerText="changes by parth"
let data2=ul.innerHTML;
console.log(data2);
let data3=ul.innerText;
console.log(data3);
let data4=ul.textContent;
console.log(data4);
ul.innerHTML=`<li class="item">item4</li>
    <li class="item">item5</li>
    <li class="item">item6</li>
    <li class="item">item7</li>`
    //DIFF BETWEEN TEXT CONTENT ND INNERTEXT IS INNERTEXT GIVES HIDDEN CONTENT TOO
//getATTRIBUTES
//setAttributes
//ClassList
let el7=document.querySelector(".item")
console.log(el7)
console.dir(el7.getAttribute("id"))
console.log(el7.getAttribute("class"))
el7.setAttribute("id","js")
console.log(el7.getAttribute("id"))
el7.classList.add("item1")
console.log(el7.classList)



/*
Element.addEventListener("event name")*/
let signupbtn=document.querySelector(".Signup")
let form=document.querySelector("#signup");
signupbtn.addEventListener("click",function(){
    form.classList.toggle("hide")
})