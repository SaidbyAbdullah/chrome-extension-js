var saveBtn = document.getElementById("saveBtn");
var delBtn = document.getElementById("delBtn");
var tabBtn = document.getElementById("tabBtn");
var inputEl = document.getElementById("input-el");
var ulEl = document.getElementById("ul-el");
let myLead = [];


myLeadfromLS = JSON.parse(localStorage.getItem("myLead"));
if(myLeadfromLS){
    myLead = myLeadfromLS;
    showOutput(myLeadfromLS);
}
// save btn
saveBtn.addEventListener('click', saveBtnClick);
function saveBtnClick(){

    let inputVal = inputEl.value;
    if(inputVal != ''){
        myLead.push(inputVal);
        showOutput1(inputVal);
    }
    localStorage.setItem("myLead",JSON.stringify(myLead));
    myLeadfromLS = JSON.parse(localStorage.getItem("myLead"));
    
    inputEl.value = ""; 
}
function showOutput(myLeadfromLS){
    for(let i=0;i<myLeadfromLS.length;i++){
            ulEl.innerHTML +=  `<li><a target='_blank' href='${myLeadfromLS[i]}'>${myLeadfromLS[i]}</a></li>`;
        }   
}
function showOutput1(inVal){
            ulEl.innerHTML +=  `<li><a target='_blank' href='${inVal}'>${inVal}</a></li>`;
}
// del btn
delBtn.addEventListener('click', delBtnClick);
function delBtnClick(){

    localStorage.clear();
    console.clear();
    myLead = [];
    ulEl.innerHTML = "";

}
// tab btn
tabBtn.addEventListener('click', tabBtnClick);
function tabBtnClick(){

    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true,
        currentWindow: true
    }, function(tabs) {
        myLead.push(cTab[0].url);
        localStorage.setItem("myLead",JSON.stringify(myLead));
        showOutput1(tabs[0].url);
   
    })
      
    
}
