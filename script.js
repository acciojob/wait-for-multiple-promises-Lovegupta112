//your JS code here. If required.
let tbody=document.getElementById('output');

let promisesList=[];

let minTime,maxTime;
function addPromise(name,start,end){
    if(!minTime){
        minTime=start;
    }
    maxTime=end;
    promisesList.push({name ,time:(end-start)/1000});
}

let prom1=new Promise((resolve,reject)=>{
    let start1=new Date().getTime();
    let randomTime=Math.floor(Math.random()*(3000-1000+1))+1000;
          setTimeout(()=>{
         resolve();
          let end1=new Date().getTime();
        //   addPromise('Promise 1',(end1-start1)/1000)
          addPromise('Promise 1',start1,end1);
          },randomTime);
})

let prom2=new Promise((resolve,reject)=>{
    let start2=new Date().getTime();
    let randomTime=Math.floor(Math.random()*(3000-1000+1))+1000;
          setTimeout(()=>{
         resolve();
         let end2=new Date().getTime();
        //  addPromise('Promise 2',(end2-start2)/1000)
         addPromise('Promise 2',start2,end2);
          },randomTime);
})

let prom3=new Promise((resolve,reject)=>{
    let start3=new Date().getTime();
    let randomTime=Math.floor(Math.random()*(3000-1000+1))+1000;
          setTimeout(()=>{
         resolve();

         let end3=new Date().getTime();
        //  addPromise('Promise 3',(end3-start3)/1000)
         addPromise('Promise 3',start3,end3);
          },randomTime);

})

let allResolved=Promise.all([prom1,prom2,prom3])

allResolved.then(()=>{
    addToUI(promisesList);
})

function addToUI(promisesList){
    tbody.innerHTML="";

    for(let promise of promisesList){
     let row=document.createElement('tr');
     row.innerHTML=`<td>${promise.name}</td>
                     <td>${promise.time}</td>`
    tbody.append(row);
    }
    let row=document.createElement('tr');
    row.innerHTML=`<td>Total</td><td>${(maxTime-minTime)/1000}</td>`
    tbody.append(row);
}