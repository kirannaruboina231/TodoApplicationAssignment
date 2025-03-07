let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let li=document.querySelectorAll("li");

btn.addEventListener("click",function(event){
    let item=document.createElement("li");
    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    item.appendChild(document.createTextNode(inp.value));
    ul.appendChild(item);
    inp.value="";

})

ul.addEventListener("click",function(event){  
    if(event.target.nodeName=="BUTTON"){
        let par=event.target.parentElement;                                            
        par.remove();
        console.log(par)
    }
})