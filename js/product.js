var urlFromHome = window.location.href
var uid = urlFromHome.split('?')

const URL_P= `http://fundamentos.academlo.com/api/v1/products/${uid[1]}`

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
var img = document.getElementById('img')

function updateT(products){
    title.textContent = products.name
    description.textContent = products.description
    urlProduct.href = products.url
    img.src = products.image
}
