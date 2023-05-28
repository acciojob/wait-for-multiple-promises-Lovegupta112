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

prom1.then(()=>{
    let td1=document.createElement('td');
    td1.innerText="Promise 1";
    let td2=document.createElement('td');
    td2.innerText="1500s";
	tbody.children[0].innerHTML="";
    tbody.children[0].append(td1);
    tbody.children[0].append(td2);
})
prom2.then(()=>{
    let td1=document.createElement('td');
    td1.innerText="Promise 2";
    let td2=document.createElement('td');
    td2.innerText="2000s";
	tbody.children[0].innerHTML="";
    tbody.children[0].append(td1);
    tbody.children[0].append(td2);
})
prom3.then(()=>{
    let td1=document.createElement('td');
    td1.innerText="Promise 3";
    let td2=document.createElement('td');
    td2.innerText="3000s";
	tbody.children[0].innerHTML="";
    tbody.children[0].append(td1);
    tbody.children[0].append(td2);
})

Promise.all([prom1,prom2,prom3])
