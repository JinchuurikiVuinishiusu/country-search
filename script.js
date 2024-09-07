
/* fetchData();
async function fetchData(){
    try{
        const response = await fetch(JSON.parse(JSON.stringify('https://JinchuurikiVuinishiusu.github.io/country-search/countrylist.json')))
        if(!response.ok){
            throw new Error("Could not fetch");
        }
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
} */


fetch("https://JinchuurikiVuinishiusu.github.io/country-search/countrylist.json")
	.then(response => response.json())
	.then(jsonData => {
		data = jsonData;
		console.log(data)
	})
	.catch(error =>{
		console.error("Error fetching data", error);
	})

const searchBox = document.querySelector(".search-input");
const inputBox = document.querySelector("#mainInput");
const resultBox = document.querySelector(".result-box");
const countryResult = document.querySelector(".country-result");
const names = document.querySelector("#name");
const code = document.querySelector("#code");
const code2 = document.querySelector("#code2");
const timeZone = document.querySelector("#timezone");
const utc = document.querySelector("#utc");
const mobileCode = document.querySelector("#mobilecode");
let display = 0;



inputBox.onkeyup = (e) => {
       let userData = e.target.value;
       let emptyArray = [];
	   
       if (userData) {
           emptyArray = data.filter((data) => {
               return  data.name.toLowerCase().startsWith(userData.toLowerCase()) || 
               data.code.toLowerCase().startsWith(userData.toLowerCase()) ||
               data.mobileCode.startsWith(userData.toLowerCase());
            });

           // Create the list items and append them to the resultBox
           const listItems = emptyArray.map((data) => {
               const li = document.createElement("li");
               li.textContent = data.name;
               li.addEventListener('click', () => {
                display = 1;
				inputBox.value = data.name;
				resultBox.innerHTML = ""; 
                appear();
                
				   names.innerHTML = data.name;
				   code.innerHTML = data.code;
				   code2.innerHTML = data.code2;
				   timeZone.innerHTML = data.timezone;
				   utc.innerHTML = data.utc;
				   mobileCode.innerHTML = data.mobileCode;

                   console.log(data);
               });
               return li;
           });
           resultBox.innerHTML = ""; // Clear previous results
           listItems.forEach(item => resultBox.appendChild(item));
       } 
   }; 
   
function appear () {
    if(display == 1) {
        countryResult.style.display = 'block';
        display = 0;
    } 
}