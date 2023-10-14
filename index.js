const apiAccessKey = "tT2f_3q9aEaNzzHqKNkrjeEyCQFrcOFTDhjP1VFfE2s";


const formElement = document.querySelector("form");
const inputElement = document.getElementById("search-image-input")
const searchDisplay = document.querySelector(".search-images-container");
const displayMore = document.getElementById("show-btn");

let inputData = "";
let pageNumber = 1;


async function imageSearch() {
    inputData = inputElement.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiAccessKey}`
    
    const response = await fetch(url)
    const data = await response.json()

    const results = data.results;
}
