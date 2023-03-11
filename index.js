const btn = document.getElementById("btn")
const zip = document.getElementById("zipDetails")
const city = document.getElementById("district")
const state = document.getElementById('state')
const latitude = document.getElementById("latitude")
const longitude = document.getElementById("longitude")

btn.addEventListener("click", async()=>{
    const zipcode = document.getElementById("zipcode").value
    try{   
        const options = {
        method: 'GET',
        url: `https://india-pincode-with-latitude-and-longitude.p.rapidapi.com/api/v1/pincode/${zipcode}`,
        headers: {
            'X-RapidAPI-Key': 'ae8bff0e22msh2405d49a228a8bdp1a3c83jsn5a5b088a9662',
            'X-RapidAPI-Host': 'india-pincode-with-latitude-and-longitude.p.rapidapi.com'
        }
        };

        await axios.request(options).then(function (response) {
            zip.innerHTML = zipcode
            city.innerHTML = response.data[0].district
            state.innerHTML = response.data[0].state
            latitude.innerHTML = response.data[0].lat
            longitude.innerHTML = response.data[0].lng
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
        
    }catch(err){
        console.log(err); 
    }
})