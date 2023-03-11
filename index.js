const btn = document.getElementById("btn")
const zip = document.getElementById("zipDetails")
const name = document.getElementById("name")
const block = document.getElementById("block")
const city = document.getElementById("district")
const state = document.getElementById('state')

btn.addEventListener("click", async()=>{
    const zipcode = document.getElementById("zipcode").value
    try{   
        await fetch(`https://api.postalpincode.in/pincode/${zipcode}`,{   
                        method: "GET"
            })
            .then((data)=>data.json())
            .then((response)=>{            
                console.log(response[0].PostOffice);
                zip.innerHTML = zipcode
                block.innerHTML = response[0].PostOffice[0].Block
                name.innerHTML = response[0].PostOffice[0].Name
                city.innerHTML = response[0].PostOffice[0].District
                state.innerHTML = response[0].PostOffice[0].State
            })     
            .catch(function (error) {
                console.error(error);
            });   
    }catch(err){
        console.log(err); 
    }
})