const btn = document.getElementById("btn");
let inputEl = document.getElementById("input-el");
let arr = [];

let ulEl = document.getElementById("ul-el");

let fromLocal = JSON.parse(localStorage.getItem("Leads"));
const deleteAll = document.getElementById("delete-all");
const saveTab = document.getElementById("save-tab");

if(fromLocal){
arr= fromLocal;
render(arr);
}


/*  Get the active browser tab

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {...})

This uses Chrome’s API to find the currently active tab in the current window.

It returns an array tabs, where tabs[0] is the active tab. */


saveTab.addEventListener("click",function(){

    chrome.tabs.query({active:true, currentWindow: true}, function(tabs){

        arr.push(tabs[0].url);
        localStorage.setItem("Leads", JSON.stringify(arr));
        render(arr);
    })
})




btn.addEventListener("click", function(){

    arr.push(inputEl.value);
    inputEl.value= "";

    localStorage.setItem("Leads", JSON.stringify(arr));

    console.log(arr);

    render(arr);


})


function render(arr){

    let li ="";
    for(let i =0; i<arr.length;i++){

        li += `<li> <a href="#"> ${arr[i]} </a> </li> `;


    }

   ulEl.innerHTML = li;

}


deleteAll.addEventListener("dblclick",function(){

    localStorage.clear();
    arr= [];
    render(arr);

})