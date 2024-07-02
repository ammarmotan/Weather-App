async function getapi(){
    var x=document.getElementById("text").value;
    const api_url="https://api.openweathermap.org/data/2.5/weather?q="+x+"&appid=e08f87dccbf074aa9b7c6404c21e3f73&units=metric";
    
    const response=await fetch(api_url);
    var data = await response.json();

    document.getElementById("name").innerHTML =  data.name;
    document.getElementById("temp").innerHTML =  data.main.temp +'°C';
    document.getElementById("feel").innerHTML =  data.main.feels_like +'°C';
    document.getElementById("humidity").innerHTML =  data.main.humidity +'%';
    document.getElementById("pressure").innerHTML =  data.main.pressure +'hpa';
}

// async function getapi() {
//     var x = document.getElementById("text").value;
//     const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${x}&appid=e08f87dccbf074aa9b7c6404c21e3f73&units=metric`;

//     const response = await fetch(api_url);
//     const data = await response.json();


//     if (data.cod !== 200) {
//         alert(`Error: ${data.message}`);
//         return;
//     }


//     document.getElementById("name").innerHTML =  data.name;
//     document.getElementById("temp").innerHTML =  data.main.temp +'°C';
//     document.getElementById("feel").innerHTML =  data.main.feels_like +'°C';
//     document.getElementById("humidity").innerHTML =  data.main.humidity +'%';
//     document.getElementById("pressure").innerHTML =  data.main.pressure +'hpa';
// }
