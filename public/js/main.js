const cityName = document.getElementById("cityName")
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");

const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const day = document.getElementById("day")

let a;
        let date;
        let time;
        setInterval(() => {
        a = new Date();
        date = a.toLocaleDateString();
        time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
        document.getElementById('day').innerHTML = time + " on " + date +" as in India ";
        }, 1000);

    

const getInfo = async (event)=>{
    event.preventDefault();
    
    
    let cityVal = cityName.value
    if( cityVal === ""){
         city_name.innerText ="please write before search"
    }else{
        try{
            let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=bab281d79e5f1e9755a68d754cc313e7&units=metric`;
            const response= await fetch(api);
            const data = await response.json();
            const arrData = [data];
city_name.innerText = `${arrData[0].name },${arrData[0].sys.country}`
            temp.innerText = `Degree : ${arrData[0].main.temp}`;

            const tempMood = arrData[0].weather[0].main;
            //tempmood clouds sunny etc etc

            if(tempMood == "Clear"){
                temp_status.innerHTML = "Clear <i class ='fas fa-sun' style='color:#eccc68;'></i>" 
            }else if(tempMood == "Clouds"){
                temp_status.innerHTML = " Clouds <i class ='fas fa-cloud' style='color:#f1f2f6;'></i>" 
            }else if(tempMood == "Drizzle"){
                temp_status.innerHTML = " Rain <i class ='fas fa-cloud' style='color:#a4b0be;'></i>" 
            }else{
                
            temp_status.innerHTML = " Sunny <i class ='fas fa-sun' style='color:#eccc68;'></i>" 
            }


            console.log("Hello" , data);
        }catch{
            city_name.innerText ="please Enter cityname properly"
        }
        
    }
}
submitBtn.addEventListener("click", getInfo)






