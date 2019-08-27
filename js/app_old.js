const URL = 'http://fundamentos.academlo.com/api/v1/directories'
const URL_C = 'http://fundamentos.academlo.com/api/v1/directories/5c82982e-b63e-4280-8287-4eba0e99716a/categories'
const URL_P = 'http://fundamentos.academlo.com/api/v1/categories/e85c6306-92a8-4d9f-9cb7-3478e1450134/products'

fetch(URL)
    .then(response => {
        return response.json()
    })
    .then(directories => {
        // console.log(directories)
        getDirectories(directories)
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
        // getCategories(categories)
    })

fetch(URL_P)
    .then(response => {
        return response.json()
    })
    .then(products => {
        // console.log(products)
        getProducts(products)

    })


// function getCategories(){
//     const categoriesURL = `${URL}/5c82982e-b63e-4280-8287-4eba0e99716a/categories`
//     fetch(categoriesURL)
//     .then(response => {
//         return response.json()
//     })
//     .then(categories => {
//         console.log(categories)
//         // return categories.json()
//     })
//     // .then(products =>{
//     //     console.log(products)
//     // })
// }

// getCategories();

var divs = document.getElementById('divs')
var divs2 = document.getElementById('divs2')

function getDirectories(directories){
    directories.forEach((element, id) => {
        const data =
        `<img class="card-img-top" src="/img/categories${id+1}.jpg" alt="Card image">
         <div class="overlay"></div>
         <div class="card-img-overlay pl-1" style="padding: 0;">
            <span class="glyphicon pt-2 icon-size-card">&#xe012;</span>
            <h4 id="specialh4" class="card-title" style="margin-bottom: 0">${element.name}</h4>
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

var divs_featured = document.getElementById('divs-featured')

function getCategories(categories){

    var categ = categories.categories
    // console.log(categ)

    categ.forEach((element, id) => {
        const template =
        `<img src="/img/categories2.jpg" class="card-img-top mx-auto" style="width:95% " alt="...">
         <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <br>
            <p class="card-text">The shared inbox for teams.</p>
        </div>
        <div>
            <input type="button" value="Visit site" onclick="window.location.href='https://frontapp.com/'"/ class="btn btn-outline-dark btn-block border" ht>
        </div>
        <br>`;

        const card = document.createElement('div')
        card.setAttribute('class', 'card contenedor_card mb-4')
        card.style.minWidth = '30%'
        // if(id < 3)
        divs_featured.appendChild(card)
        card.innerHTML = template
    });
}

function getProducts(products){
    var prods = products.products
    // console.log(prods)
    // https://i.ibb.co/5BMjzPJ/img2.png
    prods.forEach((element, id) => {
        const template =
        `<div class="overflow-auto contenedor_card" style="height:150px;">
          <a href="/product.html?${element.uuid}"><img src="/img/product${id+1}.png" class="card-img-top mx-auto d-block" 
          style="width:95% ; " alt="..."></a>
         </div>

        <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <br>
            <p class="card-text">${element.description}</p>
        </div>

        <div class="p-4" >
            <a href="${element.url}" target="_blank" rel="noopener noreferrer">
                <input type="button" value="Visit site" class="btn btn-block border-dark pure-button pure-button-active bg-white">
            </a>
        </div>
        <br>`;

        const card = document.createElement('div')
        card.setAttribute('class', 'card')
        divs_featured.appendChild(card)
        card.innerHTML = template
    });
}
