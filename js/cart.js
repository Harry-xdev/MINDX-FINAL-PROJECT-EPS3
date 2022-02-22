// RENDER HEADER
const mainPage = document.querySelector('#mainPage');
mainPage.innerHTML += `
    <div id="header">
    <a id="logo__main" class="" 
        onclick="location.href='./index.html';"> <i>nYe</i></a>
        <a id="logo__main2" class="" 
        onclick="location.href='./index.html';" ><i> nYe</i></a>
        <a  class="native">SHOPPING CART</a>
        
        <a id="cata" class="native" href="#">CATALOG</a>
        <span id="user__container" href="#"> </span> </div>
    <a href="#"><button onclick="topFunction()" id="myBtn" title="Go to top">Top</button></a>
`
const dropCata = document.querySelector("#cata")
dropCata.innerHTML += ` <span class ="drop_content">
<button class="dropMenu" >SHOPPING CART</button>
 </span> `
const userContainer = document.querySelector("#user__container")
userContainer.innerHTML += `
    <span id = "Ab" class="info"><i class="material-icons">supervisor_account</i> </span>
    <span id = "log" class="info" type="button" onclick="location.href='./login.html'"> Login</span>
    
`
// RENDER MAIN BODY OF CART
total = localStorage.getItem("totalCost");
mainPage.innerHTML += `
  <div id="main__container">
  
  <div class="modal-body">
  <div class="cart-row">
      <span class="cart-item cart-header cart-column">Product</span>
      <span class="cart-price-title cart-header cart-column">Price</span>
      <span class="cart-quantity cart-header cart-column">Quantity</span>
  </div>
  <div class="cart-items">

  </div>
  

  <div class="cart-total">
      <strong class="cart-total-title">Total Price:</strong>
      <span class="cart-total-price">$</span>
  </div>

  <div class="cartPay">
  <a href="./index.html"><button id="payBtn"> PAY </button></a>
  </div>

`
// DISPLAY CART
function display_cart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".cart-items");
  if(cartItems && productContainer) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML +=  ` <div class="cart-row cart-column"> <div class ="img-name">
      <img class="cart-item-image" src="`+ item.image +`" width="100" height="100">
      <span class="cart-item-title">`+ item.name +`</span>
  </div>
  <span class= "cart-price-title cart-column">$<span  class="cart-price">`+ item.price +`</span></span>
  <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="`+ item.inCart+`">
      <button class="btn btn-danger" type="button">Delete</button>
  </div> </div>`

 
  //      cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
   //       let button_remove = event.target
  //        button_remove.parentElement.parentElement.remove()
        updatecart()
   //     })


    })
  }

  
}
display_cart();
document.getElementById("payBtn").onclick = function(){
  localStorage.clear();
  
  alert('You have successfully paid');
  productContainer.innerHTML = '';
}
// RUN FUNCTIONS 
// ------------------------------------------------------------------

// nut Xoa items 
let remove_cart = document.getElementsByClassName("btn-danger");
for (let i = 0; i < remove_cart.length; i++) {
  let button = remove_cart[i]
  button.addEventListener("click", function () {
    let button_remove = event.target
    button_remove.parentElement.parentElement.remove()
    updatecart()
  }) 
}

// total price
function updatecart() {
  
    let productContainer = document.getElementsByClassName("cart-items")[0];
    let cart_rows = productContainer.getElementsByClassName("cart-row");
    let total = 0;
    for (let i = 0; i < cart_rows.length; i++) {
      let cart_row = cart_rows[i]
      let price_item = cart_row.getElementsByClassName("cart-price")[0]
      let quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0]
      let price = parseFloat(price_item.innerText)
      let quantity = quantity_item.value 
      total = total + (price * quantity)
    }
    document.getElementsByClassName("cart-total-price")[0].innerText = '$' + total
    
  }

  // thay doi so luong sp
  let quantity_input = document.getElementsByClassName("cart-quantity-input");
  for (let i = 0; i < quantity_input.length; i++) {
    let input = quantity_input[i];
    input.addEventListener("change", function (event) {
      let input = event.target
      if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
      }
      updatecart()
    })
  }

// thêm sp vào giỏ hàng ,,, lấy giá trị từ local xuống thay vào để render
  let add_cart = document.getElementsByClassName("btn-cart");
for (let i = 0; i < add_cart.length; i++) {
  let add = add_cart[i];
  add.addEventListener("click", function (event) {

    let button = event.target;
    let product = button.parentElement.parentElement;
    let img = product.parentElement.getElementsByClassName("img-prd")[0].src
    let title = product.getElementsByClassName("content-product-h3")[0].innerText
    let price = product.getElementsByClassName("price")[0].innerText
    addItemToCart(title, price, img)
   
    modal.style.display = "block";
    
    updatecart()
  })
}

function addItemToCart() {
  let cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
 // let cartItems = document.getElementsByClassName('cart-items')[0]
  let cart_title = cartItems.getElementsByClassName('cart-item-title')
  
 for (let i = 0; i < cart_title.length; i++) {
   if (cart_title[i].innerText == title) {
      input.value + 1
  //for (let i = 0; i < localStorage.length; i++) {
   // console.log(localStorage.getItem(localStorage.key(i)));
  //list = JSON.parse(localStorage.getItem("productsInCart"))[i];
     
  


   //   return
   }
 }
//list = JSON.parse(localStorage.getItem("productsInCart"));

 // console.log(localStorage.getItem(localStorage.key(i)));
//list = localStorage.getItem('productsInCart')

    //  for (product of list){
    
    //  cartItems.innerHTML = `
 //    <div class="cart-item cart-column">
  //        <img class="cart-item-image" src="`+ product.image +`" width="100" height="100">
 //         <span class="cart-item-title">`+ product.name +`</span>
 //     </div>
  //    <span class="cart-price cart-column">$`+product.price +`</span>
  //    <div class="cart-quantity cart-column">
  //        <input class="cart-quantity-input" type="number" value="1">
  //        <button class="btn btn-danger" type="button">Xóa</button>
  //    </div>`
 //     cartRow.innerHTML = cartRowContents
//      cartItems.append(cartRow)
//      cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
 //       let button_remove = event.target
//        button_remove.parentElement.parentElement.remove()
//        updatecart()
 //     })
//      cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
//       let input = event.target
 //       if (isNaN(input.value) || input.value <= 0) {
 //         input.value = 1;
  //      }
//        updatecart()
 //     })
    
  //    }
  
}

 

//let productNumbers = localStorage.getItem('cartNumbers');
//document.querySelector('.cart__number').textContent = productNumbers;

// ------------------------------------------------------------------


// RENDER FOOTER
const mainFooter = document.querySelector('#mainFooter');
mainFooter.innerHTML += ` <div id="footer"><div class="contact__container">
<div class="footerCon">
        <span id="CorpInfo"> <p class="CorpInfo1"> Corporate Info </p> </span>
        <span id="help"> <p class="help1"> Help </p> </span>
         </div>
</div>
<div id="copyrightInfo"><p><i id="logo__main3"> nYe </i></p>
<div class="footText"> "nYe’s business concept is to offer fashion and quality at the best price in
 a sustainable way. nYe has since it was founded in 19xx grown into one of the world’s
  leading fashion companies. The content of this site is copyright-protected and is the 
  property of XXX".</div>
  <div class="iconFooter"><i class="fa fa-facebook-square" style="font-size:24px"></i> 
  <i class="fa fa-twitter" style="font-size:24px"></i>
  <i class="fa fa-instagram" style="font-size:24px"></i>
  <i class="fa fa-youtube-play" style="font-size:24px"></i>
  </div>
</div>`;
const corpInfo = document.querySelector('#CorpInfo');
const help = document.getElementById("help")
const FooterList1 = [
    {
        tag: "Career at nYe",
    },
    {
        tag: "About nYe group",
    },
    {
        tag: "Sustainability",
    },
    {
        tag: "Press",
    },
    {
        tag: "Investor Relations",
    },
    {
        tag: "Corporate Governance",
    },
]
function renderFooter1() {
    for (let CoList of FooterList1) {
    corpInfo.innerHTML += `
            <div class ="coList1">`+ CoList.tag +`</div>`    
    }
}
renderFooter1()      
const FooterList2 = [
    {
        tag: "Customer Service"
    },
    {
        tag: "Privacy Notice"
    },
    {
        tag: "Enable high contrast mode"
    },
]
function renderFooter2() {
    for (let CoList of FooterList2) {
    help.innerHTML += `
              <div class="coList2">`+ CoList.tag +`</div>`    
    }
}
renderFooter2()



