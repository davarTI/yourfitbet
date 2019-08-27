const URL = 'http://fundamentos.academlo.com/api/v1/directories'
const URL_C = 'http://fundamentos.academlo.com/api/v1/directories/5c82982e-b63e-4280-8287-4eba0e99716a/categories'

    fetch(URL)
    .then(response => {
        return response.json()
    })
    .then(directories => {
        // console.log(directories)
        // getDirectories(directories)
    })

    // .catch(error => {
    //     console.log(error)
    // })

    fetch(URL_C)
    .then(response => {
        return response.json()
    })
    .then(categories => {
        // console.log(categories)
        getCategories(categories)
    })


var divs = document.getElementById('divs')
var divs2 = document.getElementById('divs2')

function getDirectories(directories){
    directories.forEach((element, id) => {
        const data =
        `<img class="card-img-top" src="/img/categories${id+1}.jpg" alt="Card image">
         <div class="overlay"></div>
         <div class="card-img-overlay">
            <span class="glyphicon pt-2 pb-5 icon-size-card">&#xe012;</span>
            <h4 class="card-title display-5">${element.name}</h4>
            <p class="card-text">12 listings</p>
        </div>`;
        
        const card = document.createElement('div')
        card.setAttribute('class', 'card mb-4')
        // const h1 = document.createElement('h1')
        // h1.textContent = element.name
        card.style.minWidth = '20%'
        // if(id < 4){
            divs.appendChild(card)
            // card.appendChild(h1)
            card.innerHTML = data
        // }else{
            // card.style.minWidth = '25%'
        //     divs2.appendChild(card)
        //     card.innerHTML = data
        // }
    });

}

function getCategories(categories){

    var categ = categories.categories
    // console.log(categ)

    categ.forEach((element, id) => {
        const data =
        `<div class="overlay"></div>
        <a href="category.html?${element.uuid}" class="text-white"><img class="card-img-top" src="/img/categories${Math.floor(Math.random()*3)+1}.jpg" alt="Card image" onclick="window.location.href='/category.html?${element.uuid}'"/> 
         <div class="card-img-overlay pl-4" style="padding: 0;">
            <span class="glyphicon pt-5 icon-size-card">&#xe012;</span>
            <h3 class="card-title">${element.name}</h3>
            <p class="card-text">12 listings</p>
         </div></a>`;

        const card = document.createElement('div')
        card.setAttribute('class', 'card mb-4')
        // const h1 = document.createElement('h1')
        // h1.textContent = element.name
        card.style.minWidth = '30%'
        // if(id < 4){
            divs.appendChild(card)
            // card.appendChild(h1)
            card.innerHTML = data
        // }else if(id > 4 && id < 9){
            // card.style.minWidth = '25%'
            // divs2.appendChild(card)
            // card.innerHTML = data
        // }
    });
}
