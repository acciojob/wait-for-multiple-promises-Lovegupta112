//your JS code here. If required.
let tbody=document.getElementById('output');

let prom1=new Promise((resolve,reject)=>{
          setTimeout(()=>{
         resolve();
          },1500);
})
let prom2=new Promise((resolve,reject)=>{
          setTimeout(()=>{
         resolve();
          },2000);
})
let prom3=new Promise((resolve,reject)=>{
          setTimeout(()=>{
         resolve();
          },2500);
})

let allResolved=Promise.all([prom1,prom2,prom3])

allResolved.then(()=>{
    let td1=document.createElement('td');
    td1.innerText="Promise 1";
    let td2=document.createElement('td');
    td2.innerText="1500s";
    let td2=document.createElement('td');
    td1.innerText="Promise 2";
    let td3=document.createElement('td');
    td2.innerText="2000s";
    let td4=document.createElement('td');
    td1.innerText="Promise 3";
    let td5=document.createElement('td');
    td2.innerText="1500s";
	tbody.children[0].innerHTML="";
    tbody.children[0].append(td1);
    tbody.children[0].append(td2);
    tbody.children[0].append(td2);
    tbody.children[0].append(td3);
    tbody.children[0].append(td4);
    tbody.children[0].append(td5);
})

