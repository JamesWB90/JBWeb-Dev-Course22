
//First fetching will be done by local json file/text file
//console.log("Hello Amira")

// function getData(){
//     url="testing.txt";
//     fetch(url)
//         .then((response)=>{
//         console.log("Promise done");
//          return response.text();})
//         .then((data)=>{
//         console.log("After getting data")
//         console.log(data);
//         })
// }
// console.log("Before fetching data")
// getData();

// function getData(){
//     url="https://api.github.com/users";
//     fetch(url)
//         .then((response)=>{
//         console.log("Promise done");
//          return response.json();})
//         .then((data)=>{
//         console.log("After getting data")
//         console.log(data);
//         })
// }
// console.log("Before fetching data")
// getData();

// const fetch_btn=document.getElementById('myBtn');
// const fox_result=document.getElementById('result');
// fetch_btn.addEventListener('click',getData);


// function getData(){
//         url="exercise.json";
//         fetch(url)
//             .then((response)=>{
//             console.log("Promise done");
//              return response.json();})
//             .then((data)=>{
//             console.log("After getting data")
//             console.log(data);
//             })
//     }
//     console.log("Before fetching data")
//     getData();

const fetch_btn=document.getElementById('myBtn');
const fox_result=document.getElementById('result');
fetch_btn.addEventListener('click',getData);


function getData(){
        url="https://randomfox.ca/floof/";
        fetch(url)
            .then((response)=>{
            console.log("Promise done");
             return response.json();})
            .then((data)=>{
           fox_result.innerHTML=`<img src=${data.image} alt="fox"/>`
            });
    }

    getData();