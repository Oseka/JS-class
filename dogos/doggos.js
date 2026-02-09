const select = document.querySelector(".breeds");
const spinner = document.querySelector(".spinner");



// populate breed list
const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
fetch(BREEDS_URL)
    .then(function(response) {  
        return response.json();
    }
)
    .then(function (data) {
    
        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject);
    
        
        for (let i = 0; i < breedsArray.length; i++) {
            const option = document.createElement("option");
          option.value = breedsArray[i];
            option.innerText = breedsArray[i];

            select.appendChild(option);
        
        }
    })
      



  // add event listener  
 select.addEventListener("change", function(event) 
 {
let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`

getDoggo(url);
 });



// first image
const img = document.querySelector('.dog-img');
    function getDoggo(url)
    {
        spinner.classList.add("show");
        img.classList.remove("show");
        fetch(url)
        .then(function(response) {
            return response.json(); 
        })
        .then(function(data) {
        console.log(data);
            img.src = data.message;
           
        });
        }  
    
        img.addEventListener("load", function() {
            spinner.classList.remove("show");
            img.classList.add("show");
        });