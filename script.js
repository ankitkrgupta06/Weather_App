<<<<<<< HEAD
document.addEventListener("DOMContentLoaded",function(){
    const apiKey="0d3c4d8e82334fd6d8ae92144d5ef940";

    async function getDetails(){
        const cityName=document.getElementById("cityName").value.trim();

        if(!cityName){
            alert('Enter valid city name');
            return;
        }

        const url=`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&units=metric&appid=${apiKey}`;
        try{
            const response= await fetch(url);
            const data=await response.json();

            console.log("API: ",data);
            if(!response.ok){
                alert("Error fetching data");
                return;
            }

            document.getElementById("city").innerText = data.name;
            document.getElementById("temp").innerText = `Temperature: ${data.main.temp} °C`;
            document.getElementById("condition").innerText = `Condition: ${data.weather[0].description}`;
            document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
            document.getElementById("wind").innerText = `Wind Speed: ${data.wind.speed} m/s`;
        }
        catch(err){
            alert("Network Error");
        }

    }
    document.querySelector('.search').addEventListener('click',()=>{
        getDetails();
    })
=======
document.addEventListener("DOMContentLoaded",function(){
    const apiKey="0d3c4d8e82334fd6d8ae92144d5ef940";

    async function getDetails(){
        const cityName=document.getElementById("cityName").value.trim();

        if(!cityName){
            alert('Enter valid city name');
            return;
        }

        const url=`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&units=metric&appid=${apiKey}`;
        try{
            const response= await fetch(url);
            const data=await response.json();

            console.log("API: ",data);
            if(!response.ok){
                alert("Error fetching data");
                return;
            }

            document.getElementById("city").innerText = data.name;
            document.getElementById("temp").innerText = `Temperature: ${data.main.temp} °C`;
            document.getElementById("condition").innerText = `Condition: ${data.weather[0].description}`;
            document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
            document.getElementById("wind").innerText = `Wind Speed: ${data.wind.speed} m/s`;
        }
        catch(err){
            alert("Network Error");
        }

    }
    document.querySelector('.search').addEventListener('click',()=>{
        getDetails();
    })
>>>>>>> master
})