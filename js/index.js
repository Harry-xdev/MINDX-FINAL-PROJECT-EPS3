// RENDER HEADER
const mainPage = document.querySelector('#mainPage');
mainPage.innerHTML += `
    <div id="header">
    <a id="logo__main" class="" 
        onclick="location.href='./index.html';"> N.Y.E</a>
        <a id="logo__main2" class="" 
        onclick="location.href='./index.html';" > N.Y.E</a>
        <a  class="native" href="#img1">FASHION</a>
        <a  class="native" href="#">WATCHES</a>
        <a  class="native" href="#">SHOES</a>
        <a  class="native" href="#section4__container1">BAGS</a>
        <a id="cata" class="native" href="#">CATALOG</a>
        <span id="user__container" href="#"> </span> </div>
    <a href="#"><button onclick="topFunction()" id="myBtn" title="Go to top">Top</button></a> `;
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
        <span id = "register" class="info" ><i class="material-icons">shopping_cart</i></span> `;
// RENDER MAIN SECTION
mainPage.innerHTML += `
   <div class= "img_header" > </div>
    <div id="section__container"></div>`;
const imgHeader = document.querySelector(".img_header")
imgHeader.innerHTML += ` <div> <div id="tit1"><i>HAUTE COUTURE</i></div>
<div id="tit2">SPRING-SUMMER 2022 SHOW</div>
  <img class="imgHead" src="https://images.unsplash.com/photo-1468818519844-64bc429824de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"/>
  </div>`
const mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
topFunction()
// RENDER SECTION ITEMS
const sections = document.querySelector('#section__container');
// SECTION 1: THỦY TIÊN
sections.innerHTML += `
        <section id="" class="section__1"></section>
        <div class ="space"> </div> `;
const section1 = document.querySelector(".section__1")
section1.innerHTML += `
      <img id ="img1" src = "https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_1280/FSH-1641215403491-slideshowdesktop3.jpg"/>
         <h1>COLLECTION</h1>
        <div><button class="button1" type="button"  onclick="location.href='./Fashion.html';"> Find out more  </button> </div> `
// SECTION 2: 
sections.innerHTML += `<section id="" class="section__2"> </section> `;
// SECTION 3: 
sections.innerHTML += `<section id="" class="section__3"> </section> `;
// SECTION 4: TUẤN ANH
sections.innerHTML += ` <section id="" class="section__4"></section> `
// RENDER SECTION 4 ITEMS
const section4Item1 = document.querySelector('.section__4');
// SECTION 4 CAPTION
section4Item1.innerHTML += ` <div id="" class="section4__cap">MEN's</div>`
// SECTION 4 CONTAINER 1
section4Item1.innerHTML += ` <div id="section4__container1" class="section4__container"></div>`
// SECTION 4 INTRODUCE
section4Item1.innerHTML += ` <div id="" class="section4__introduce"></div> `
const section4IntroItem = document.querySelector('.section4__introduce');
    section4IntroItem.innerHTML += `
        <div id="intro__container">
            <div id="" class="product__intro">
                <h2>WOMEN'S BAGS</h2>
                <p>The KENZO bags for women are practical and sophisticated creations which will be the perfect finishing touch to your outfits. Backpacks, handbags, clutches, bumbags … These KENZO accessories will elevate your urban looks as well as your evening outfits. Carry around your essentials without compromising style with our iconic ONDA and ARCTIK collections, and vary your looks while giving them a playful twist thanks to our various shoulder straps.</p>
                <p>View all our <a href="#">products.</a></p>
            </div>
            <div id="" class="product__intro2">
                <h2>MEN'S BAGS</h2>
                <p>The KENZO bags for women are practical and sophisticated creations which will be the perfect finishing touch to your outfits. Backpacks, handbags, clutches, bumbags … These KENZO accessories will elevate your urban looks as well as your evening outfits. Carry around your essentials without compromising style with our iconic ONDA and ARCTIK collections, and vary your looks while giving them a playful twist thanks to our various shoulder straps.</p>
                <p>View all our <a href="#">products.</a></p>
            </div>
        </div>`
    section4Item1.innerHTML += `
        <div id="" class="section4__cap">WOMEN's</div> `
// CREATING MEN PRODUCT ARRAY OBJECTS
const handbagProductListM = [
    {
        name: "KAMPUS TIGER BACKPACK",
        url: "#",
        image: "./images/section 4/KAMPUS TIGER BACKPACK.jpg",
        image2: "./images/section 4/KAMPUS TIGER BACKPACK 2.jpg",
        price: "$265",
        gender: "MALE",
        color: "BLACK",
    },
    {
        name: "KENZO SPORT BELT BAG",
        url: "#",
        image: "./images/section 4/KENZO SPORT BELT BAG.jpg",
        image2: "./images/section 4/KENZO SPORT BELT BAG 2.jpg",
        price: "$275",
        gender: "MALE",
        color: "BLACK",
    },
    {
        name: "KENZO Sport backpack W strap",
        url: "#",
        image: "./images/section 4/KENZO Sport backpack W strap.jpg",
        image2: "./images/section 4/KENZO Sport backpack W strap 2.jpg",
        price: "$295",
        gender: "MALE",
        color: "WHITE",
    },
    {
        name: "KENZO Sport tote bag",
        url: "#",
        image: "./images/section 4/KENZO Sport tote bag.jpg",
        image2: "./images/section 4/KENZO Sport tote bag 2.jpg",
        price: "$340",
        gender: "MALE",
        color: "BLACK",
    },
]

// CREATING WOMEN PRODUCT ARRAY OBJECT
const handbagProductListW = [
    {
        name: "Small KENZO Kamera travel bag",
        url: "#",
        image: "./images/section 4/woman/Small KENZO Kamera travel bag.jpg",
        image2: "./images/section 4/woman/Small KENZO Kamera travel bag 2.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
    {
        name: "Kenzogram mini messenger bag",
        url: "#",
        image: "./images/section 4/woman/Kenzogram mini messenger bag.jpg",
        image2: "./images/section 4/woman/Kenzogram mini messenger bag 2.jpg",
        price: "$235",
        gender: "FEMAL",
        color: "BLACK",
    },
    {
        name: "Kampus Tiger small bumbag",
        url: "#",
        image: "./images/section 4/woman/Kampus Tiger small bumbag.jpg",
        image2: "./images/section 4/woman/Kampus Tiger small bumbag 2.jpg",
        price: "$245",
        gender: "FEMAL",
        color: "PINK",
    },
    {
        name: "Canvas Kampus Tiger backpack",
        url: "#",
        image: "./images/section 4/woman/Canvas Kampus Tiger backpack.jpg",
        image2: "./images/section 4/woman/Canvas Kampus Tiger backpack 2.jpg",
        price: "$340",
        gender: "FEMAL",
        color: "BLACK",
    },
]

function render_section4_product() {
    for (let product of handbagProductListM) {
        document.getElementById("section4__container1").innerHTML += `
                <div class="product__item">
                    <div class="product__image">
                        <a href="#"><img id="product__img" src="` + product.image + `" alt=""</a>
                    </div>
                    <div class="product__info">
                        <div class="product__name">
                            <a href="#">`+ product.name + `</a>
                        </div>
                        <div class="product__price">` + product.price + `</div>
                        <div class="product__color">` + product.color + `</div>
                    </div>
                    <div><button id="btn__cart" onclick="add_to_cart()">ADD TO CART</button></div>
                </div>
            `
    }
}
render_section4_product();
// SECTION 4 CONTAINER 2    
section4Item1.innerHTML += ` <div id="section4__container2" class="section4__container"></div> `
function render_section4_product_2() {
    for (let product2 of handbagProductListW) {
        document.getElementById("section4__container2").innerHTML += `
                <div class="product__item">
                    <div class="product__image">
                        <a href="#"><img src="` + product2.image + `" alt=""></a>
                    </div>
                    <div class="product__info">
                        <div class="product__name">
                            <a href="#">`+ product2.name + `</a>
                        </div>
                        <div class="product__price">` + product2.price + `</div>
                        <div class="product__color">` + product2.color + `</div>
                    </div>
                    <div><button id="btn__cart" onclick="add_to_cart()">ADD TO CART</button></div>
                </div>
            `
    }
}
render_section4_product_2();
// RENDER FOOTER
const mainFooter = document.querySelector('#mainFooter');
mainFooter.innerHTML += ` <div id="footer"></div>`;
const contactContainer = document.querySelector('#footer');
contactContainer.innerHTML += `
        <div class="contact__container">CONTACT INFORMATION DIV</div>
        <div id="copyrightInfo">Copyright | MindX | C4EJS126</div>`;




