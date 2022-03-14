
const cityname = document.getElementById('cityname');
const submitbtn = document.getElementById('submitbtn');
 const day = document.getElementById('day');
const today_date = document.getElementById('today_date');

const city_name = document.getElementById('city_name');

const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide=document.querySelector('.middle_layer');

const getinfo = async(event) => {
    event.preventDefault();
    
    let cityval = cityname.value;


    if (cityval === "") {
        city_name.innerText = `please write the name before search`;
        datahide.classList.add('data_hide')

    }
    else {
        try {

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=700e7f2833f5750201136e56a8d9fc34`
            const response = await fetch(url);
            const data= await response.json();
            const arrdata=[data];

            city_name.innerText=`${arrdata[0].name}, ${arrdata[0].sys.country}`;
            temp_real_val.innerText= arrdata[0].main.temp;
            

        const tempmod=arrdata[0].weather[0].main;
            
            if(tempmod=="Sunny"){
                temp_status.innerHTML=
                '<i class="fas fa-sun" style="color: #eccc68;"></i>';
            }
            else if(tempmod=="clouds"){
                temp_status.innerHTML=
                '<i class="fas fa-cloud" style="color: #f1f2f6;"></i>';
            }
            else if(tempmod=="Rainy"){
                temp_status.innerHTML=
                '<i class="fas fa-cloud-rain" style="color: #a4b0be;"></i>';
            }
            else{
                temp_status.innerHTML=
                '<i class="fas fa-sun" style="color: #eccc68;"></i>';
            }
            datahide.classList.remove('data_hide')
    
        } catch {
            city_name.innerText = `please enter city name properly`;
            datahide.classList.add('data_hide')

        }
        
    }
}

submitbtn.addEventListener('click', getinfo);
const getcurrentday = () => {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currenttime = new Date();
     let day = weekday[currenttime.getDay()];
    return day;
    
}
const getcurrenttime = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let now = new Date();
    var month = months[now.getMonth()];
    var date = now.getDate();
    return `${date} ${month}`;
    


    

}
day.innerText= getcurrentday();
today_date.innerText= getcurrenttime();

