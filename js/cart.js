// RENDER HEADER
const mainPage = document.querySelector('#mainPage');
mainPage.innerHTML += `
    <div id="header">
    <a id="logo__main" class="" 
        onclick="location.href='./index.html';"> <i>nYe</i></a>
        <a id="logo__main2" class="" 
        onclick="location.href='./index.html';" ><i> nYe</i></a>
        <a  class="native" href="#img1">FASHION</a>
        <a  class="native" href="#section2__container">WATCHES</a>
        <a  class="native" href="#section3__container">SHOES</a>
        <a  class="native" href="#section4__container1">BAGS</a>
        <a id="cata" class="native" href="#">CATALOG</a>
        <span id="user__container" href="#"> </span> </div>
    <a href="#"><button onclick="topFunction()" id="myBtn" title="Go to top">Top</button></a>
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
// RENDER MAIN BODY OF CART
mainPage.innerHTML += `
    <div id="main__container">
    MAIN
    </div>
`


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

// FUNCTION SHOW HOW CART NUMBERS AT LOCAL STORAGE
function keep_status_of_cart() {
    let productNumbers = localStorage.getItem('cartNumbers');
    document.querySelector('.cart__number').textContent = productNumbers;
}
keep_status_of_cart();

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