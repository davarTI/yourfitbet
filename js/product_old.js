const URL_P = 'http://fundamentos.academlo.com/api/v1/categories/e85c6306-92a8-4d9f-9cb7-3478e1450134/products'

fetch(URL_P)
    .then(response => {
        return response.json()
    })
    .then(products => {
        updateT(products)
        // console.log(products)
    })


var divs_featured = document.getElementById('divs-featured')
var title = document.getElementById('title')
var description = document.getElementById('description')
var urlProduct = document.getElementById('url-product')


function updateT(products){
    var urlFromHome = window.location.href
    var uid = urlFromHome.split('?')
    console.log(uid[1])
    var prods = products.products
    // console.log(prods)

    prods.forEach((element, id) => {
        if(uid [1] === element.uuid){
            title.textContent = element.name
            description.textContent = element.description
            urlProduct.href = element.url
        }
    });
}
