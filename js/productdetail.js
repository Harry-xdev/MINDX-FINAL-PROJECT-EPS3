const main = document.querySelector('.main');
main.innerHTML += `
    <div id="header">
    <a id="logo__main" class="" 
        onclick="location.href='./index.html';"> <i>nYe</i></a>
        <a id="logo__main2" class="" 
        onclick="location.href='./index.html';" ><i> nYe</i></a>
        <a  class="native" href="#img1">PRODUCT DESCRIPTION</a>
        <a id="cata" class="native" href="#">PRODUCT DESCRIPTION</a>
        <span id="user__container" href="#"></span> </div>
    <a href="#"><button onclick="topFunction()" id="myBtn" title="Go to top">Back to top</button></a>
`
const dropCata = document.querySelector("#cata")
dropCata.innerHTML += ` <span class ="drop_content">
<button class="dropMenu" onclick="location.href='./Fashion.html';" >FASHION</button>
<button class="dropMenu" >WATCHES</button>
<button class="dropMenu" >SHOES</button>
<button class="dropMenu" >BAGS</button> </span> `
const userContainer = document.querySelector("#user__container")
userContainer.innerHTML += `
    <span id = "Ab" class="info"><i class="material-icons">supervisor_account</i> </span>
    <span id = "log" class="info" type="button" onclick="location.href='./login.html'"> Login</span>
    <a href="./cart.html" id="cart__icon"><span id = "register" class="info"><i class="material-icons">shopping_cart</i><span class="cart__number">0</span></span></a>
`
main.innerHTML += `
<div class="main__container">
    
</div>
`

// RENDER PRODUCT DETAIL

// FUNCTION KEEP STATUS OF CART
function keep_status_of_cart() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers) {
    document.querySelector('.cart__number').textContent = productNumbers;
}}
keep_status_of_cart();

// DISPLAY PRODUCT DETAIL AT LOCAL STORAGE
function display_product() {
    let items = localStorage.getItem("productClicked");
    items = JSON.parse(items);
    document.querySelector(".main__container").innerHTML += `
        <div class="product__container">
            <div class="product__image">
                <a><img id="product__img" src="` + items.image + `" alt=""
                onmouseover="this.src='`+ items.image2 +`'"
                onmouseout="this.src='`+ items.image+ `'"
                /></a>
            </div>
            <div class="product__name">
                <h4> `+ items.name +`</h4>
                <div class="product__price">Price: $
                `+ items.price + `
                </div>
                <div class="product__desc">
                    <h4>DESCRIPTION</h4> `+ items.desc +`
                </div>
            </div>
            <div><button class="btn_cart">ADD TO CART</button></div>
        </div>

    `

}
display_product();