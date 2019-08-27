// const URL_C = 'http://fundamentos.academlo.com/api/v1/directories/5c82982e-b63e-4280-8287-4eba0e99716a/categories'

const urlFromHome = window.location.href
const uid = urlFromHome.split('?')
const URL_C = `http://fundamentos.academlo.com/api/v1/categories/${uid[1]}/products`

fetch(URL_C)
    .then(response => {
        return response.json()
    })
    .then(products => {
        // console.log(categories)
        getCategorie(products)
    })

var divs_featured = document.getElementById('divs-featured')
var name_page = document.getElementById('namePage')

function getCategorie(products){

    name_page.textContent = products.name
    var categ = products.products
    // console.log(categ)
    categ.forEach((element, id) => {
        const template =
        `<div class="overflow-auto contenedor_card" style="height:150px;">
          <a href="/product.html?${element.uuid}"><img src="${element.image}" class="card-img-top mx-auto d-block" 
          style="width:95% ; " alt="..."></a>
         </div>

        <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <br>
            <p class="card-text">${element.description}</p>
        </div>

        <div class="p-5">
            <a href="${element.url}" target="_blank" rel="noopener noreferrer">
                <input type="button" value="Visit site" class="btn btn-block border btn-outline-secondary" target="_blank">
            </a>
        <br><br>`;

        const card = document.createElement('div')
        card.setAttribute('class', 'card contenedor_card mb-4')
        card.style.minWidth = '30%'
        if(uid [1] === element.uuid)
            card.style.minWidth = '30%'
            divs_featured.appendChild(card)
            card.innerHTML = template
    });
}