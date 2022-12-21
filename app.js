"use strict";

exports.handler = async (event, context) => {
    return 'Hello World!';
}
//time stamp
    //addingTimeStamp
    let today = new Date();

    let month = today.getMonth() +1;
    let year = today.getFullYear()
    let day = today.getDate()

    let current_date = `${day}/${month}/${year}`;

    let hours = addZero(today.getHours());
    let minutes = addZero(today.getMinutes());
    let seconds = addZero(today.getSeconds());

    let current_time = `${hours}/:${minutes}/:${seconds}`;
    let full_timestamp = `test executed at ${current_date} at hours ${current_time}`;

function addZero(num) {
    return num < 10 ? `0${num}`:num;
}
    console.log(full_timestamp)   

    //urls have to be parameterized on cl on execution
const urls = ["https://www.google.com.ar", "https://www.ole.com", "https://www.instagram.com", "https://www.github.com"]

async function makeRequest(urls) {
    var res = []
    console.log("inicio de request")
    console.log(urls)
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    console.log(url)
    const response = await fetch(url).catch(e => console.error (e.message))
    if (response) 
    console.log("connection status: ", response.status)
    res.push({url,success:response && response.status<400?true:false})
}
console.log(res)
}
makeRequest(urls);
