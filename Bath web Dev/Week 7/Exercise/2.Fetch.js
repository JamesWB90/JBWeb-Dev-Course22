
//first fectching will be done by local json/textfile

console.log("Hello James")

// function getData(){

// url="testing.txt";
// fetch(url)
// .then((response)=>{
//     console.log("Promise done")
// return response.text();})
// .then((data)=>{
// console.log("After getting Data")
// console.log(data);
// })
// }
// console.log("Before Fetching data")
// getData();

// function getData(){

// function getData(){
// url="https://api.github.com/users";
// fetch(url)
// .then((response)=>{
//     console.log("Promise done")
// return response.json();})
// .then((data)=>{
// console.log("After getting Data")
// console.log(data);
// })
// }
// console.log("Before Fetching data")
// getData();

const fetch_btn=document.getElementById('myBtn');
fetch_btn.addEventListener('click',getData);


function getData(){
url="text.json";
fetch(url)
.then((response)=>{
    console.log("Promise done")
return response.json()});
then((data)=>{
console.log("After getting Data")
console.log(data);
})
}
console.log("Before Fetching data")
getData()