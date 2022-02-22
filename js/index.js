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
    <a href="#"><button onclick="topFunction()" id="myBtn" title="Go to top">Back to top</button></a> `;
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
        <a href="./cart.html" id="cart__icon"><span id = "register" class="info"><i class="material-icons">shopping_cart</i><span class="cart__number">0</span></span></a> `;
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
        <section id="" class="section__1">
        <h1>FASHION</h1></section> `;
const section1 = document.querySelector(".section__1")
section1.innerHTML += `
      <img id ="img1" src = "https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_1280/FSH-1641215403491-slideshowdesktop3.jpg"/>
        <div><button class="button1" type="button"  onclick="location.href='./Fashion.html';"> Find out more  </button> </div> `
// SECTION 2: 
sections.innerHTML += `<section id="" class="section__2">
<div class="section2_cap"> WATCHES </div>
<div id= "section2__container"></div> </section> `;
const watchesProductList = [
    {   id: "WA01",
        inCart: 0,
        name: "Caliber 12.1, 38 mm WHT",
        url: "#",
        image: "./images/section 2/Caliber 12.1, 38 mm WHT.jpg",
        image2: "./images/section 2/Caliber 12.1, 38 mm WHT 2.jpg",
        price: 189,
        gender: "MALE",
        color: "White",
    },
    {   
        id: "WA02",
        inCart: 0,
        name: "Caliber 12.1, 38 mm BLK",
        url: "#",
        image: "./images/section 2/Caliber 12.1, 38 mm BLK.jpg",
        image2: "./images/section 2/Caliber 12.1, 38 mm BLK 2.jpg",
        price: 189,
        gender: "MALE",
        color: "Black",
    },
    {   
        id: "WA03",
        inCart: 0,
        name: "Paradoxe caliber 12.1, 38 mm",
        url: "#",
        image: "./images/section 2/Paradoxe caliber 12.1, 38 mm.jpg",
        image2: "./images/section 2/Paradoxe caliber 12.1, 38 mm 2.jpg",
        price: 245,
        gender: "MALE",
        color: "Black and White",
    },
    {   
        id: "WA04",
        inCart: 0,
        name: "Mademoiselle j12 acte ii, 33 mm",
        url: "#",
        image: "./images/section 2/Mademoiselle j12 acte ii, 33 mm.jpg",
        image2: "./images/section 2/Mademoiselle j12 acte ii, 33 mm 2.jpg",
        price: 686,
        gender: "MALE",
        color: "Black and White",
    }
]
function render_section2_product() {
    for (let product of watchesProductList) {
        document.getElementById("section2__container").innerHTML += `
                <div class="product__item">
                    <div class="product__image" onclick="open_product_detail()">
                        <a><img class="product__img" src="` + product.image + `" 
                        onmouseover="this.src='`+product.image2+`'"
                        onmouseout="this.src='`+product.image+`'"
                        alt=""/></a>
                    </div>
                    <div class="product__info">
                        <div >
                        <a class="product__name" href="#" onclick="open_product_detail()">`+ product.name + `</a>
                        </div>
                        <div class="product__color">` + product.color + `</div>
                        <div class="product__price">$` + product.price + `</div>
                       
                    </div>
                    <div><button class="btn_cart" id="btn__cart">ADD TO CART</button></div>
                </div>
            `
        }
}
render_section2_product();
// SECTION 3: 
sections.innerHTML += `<section id="" class="section__3">
<div class="section3_cap"> SHOES </div>
<div id= "section3__container"></div> 
<div id= "section3__container2"></div> </section> `;
const shoesProductList = [
    {   
        id: "shoe01W",
        inCart: 0,
        name: "Vibe Sneaker",
        url: "#",
        image: "./images/section 3/Vibe Sneaker.jpg",
        image2: "./images/section 3/Vibe Sneaker 2.jpg",
        price: 286,
        gender: "MALE",
        color: "White Mesh and Gold-Tone",
    },
    {   
        id: "shoe02W",
        inCart: 0,
        name: "D-Connect Sneaker 1",
        url: "#",
        image: "./images/section 3/D-Connect Sneaker 1.jpg",
        image2: "./images/section 3/D-Connect Sneaker 1 2.jpg",
        price: 286,
        gender: "MALE",
        color: "Red and Black Cupidon Print",
    },
    {   
        id: "shoe03W",
        inCart: 0,
        name: "D-Connect Sneaker 2",
        url: "#",
        image: "./images/section 3/D-Connect Sneaker 2.jpg",
        image2: "./images/section 3/D-Connect Sneaker 2 2.jpg",
        price: 286,
        gender: "MALE",
        color: "White and Butterfly Motif",
    },
    {   
        id: "shoe04W",
        inCart: 0,
        name: "D-Connect Sneaker 3",
        url: "#",
        image: "./images/section 3/D-Connect Sneaker 3.jpg",
        image2: "./images/section 3/D-Connect Sneaker 3 2.jpg",
        price: 286,
        gender: "MALE",
        color: "Blue and White Fabric",
    },
    
]
function render_section3_product() {
    for (let product of shoesProductList) {
        document.getElementById("section3__container").innerHTML += `
                <div class="product__item">
                    <div class="product__image" onclick="open_product_detail()">
                        <a><img class="product__img" src="` + product.image + `" 
                        onmouseover="this.src='`+product.image2+`'"
                        onmouseout="this.src='`+product.image+`'"
                        alt=""/></a>
                    </div>
                    <div class="product__info">
                        <div >
                        <a class="product__name" href="#" onclick="open_product_detail()">`+ product.name + `</a>
                        </div>
                        <div class="product__color">` + product.color + `</div>
                        <div class="product__price">$` + product.price + `</div>
                       
                    </div>
                    <div><button class="btn_cart" id="btn__cart">ADD TO CART</button></div>
                </div>
            `
        }
}
render_section3_product();
const shoesProductList2 = [
    {   
        id: "shoe05W",
        inCart: 0,
        name: "B24 Sneaker",
        url: "#",
        image: "./images/section 3/B24 Sneaker.jpg",
        image2: "./images/section 3/B24 Sneaker 2.jpg",
        price: 286,
        gender: "MALE",
        color: "White Oblique Canvas",
    },
    {   
        id: "shoe06W",
        inCart: 0,
        name: "B28 High-Top Sneaker 2",
        url: "#",
        image: "./images/section 3/B28 High-Top Sneaker 1.jpg",
        image2: "./images/section 3/B28 High-Top Sneaker 1 2.jpg",
        price: 300,
        gender: "MALE",
        color: "Jacquard and Black Rubber",
    },
    {   
        id: "shoe07W",
        inCart: 0,
        name: "B28 High-Top Sneaker",
        url: "#",
        image: "./images/section 3/B28 High-Top Sneaker 2.jpg",
        image2: "./images/section 3/B28 High-Top Sneaker 2 2.jpg",
        price: 300,
        gender: "MALE",
        color: "Jacquard and White Rubber",
    },
    {   
        id: "shoe08W",
        inCart: 0,
        name: "B28 Low-Top Sneaker",
        url: "#",
        image: "./images/section 3/B28 Low-Top Sneaker.jpg",
        image2: "./images/section 3/B28 Low-Top Sneaker 2.jpg",
        price: 286,
        gender: "MALE",
        color: "Black Jacquard and Rubber",
    },
]
function render_section3_product2() {
    for (let product of shoesProductList2) {
        document.getElementById("section3__container2").innerHTML += `
                <div class="product__item">
                    <div class="product__image" onclick="open_product_detail()">
                        <a class="product__a"><img class="product__img" src="` + product.image + `" 
                        onmouseover="this.src='`+product.image2+`'"
                        onmouseout="this.src='`+product.image+`'"
                        alt=""/></a>
                    </div>
                    <div class="product__info">
                        <div >
                            <a class="product__name" href="#" onclick="open_product_detail()">`+ product.name + `</a>
                        </div>
                        <div class="product__color">` + product.color + `</div>
                        <div class="product__price">$` + product.price + `</div>
                       
                    </div>
                    <div><button class="btn_cart" id="btn__cart">ADD TO CART</button></div>
                </div>
            `
        }
}
render_section3_product2();


// SECTION 4: TUẤN ANH
sections.innerHTML += ` <section id="" class="section__4"></section> `
// RENDER SECTION 4 ITEMS
const section4Item1 = document.querySelector('.section__4');
// SECTION 4 CAPTION
section4Item1.innerHTML += ` <div id="" class="section4__cap">MEN'S ACCESSORIES</div>`
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
        <div id="" class="section4__cap">WOMEN'S ACCESSORIES</div> `
// CREATING MEN PRODUCT ARRAY OBJECTS
const handbagProductListM = [
    {
        id: "bag01M",
        inCart: 0,
        name: "KAMPUS TIGER BACKPACK",
        url: "#",
        image: "./images/section 4/KAMPUS TIGER BACKPACK.jpg",
        image2: "./images/section 4/KAMPUS TIGER BACKPACK 2.jpg",
        price: 265,
        gender: "MALE",
        color: "BLACK",
    },
    {   
        id: "bag02M",
        inCart: 0,
        name: "KENZO SPORT BELT BAG",
        url: "#",
        image: "./images/section 4/KENZO SPORT BELT BAG.jpg",
        image2: "./images/section 4/KENZO SPORT BELT BAG 2.jpg",
        price: 275,
        gender: "MALE",
        color: "BLACK",
    },
    {   
        id: "bag03M",
        inCart: 0,
        name: "KENZO Sport backpack W strap",
        url: "#",
        image: "./images/section 4/KENZO Sport backpack W strap.jpg",
        image2: "./images/section 4/KENZO Sport backpack W strap 2.jpg",
        price: 295,
        gender: "MALE",
        color: "WHITE",
    },
    {   
        id: "bag04M",
        inCart: 0,
        name: "KENZO Sport tote bag",
        url: "#",
        image: "./images/section 4/KENZO Sport tote bag.jpg",
        image2: "./images/section 4/KENZO Sport tote bag 2.jpg",
        price: 340,
        gender: "MALE",
        color: "BLACK",
    },
]


// CREATING WOMEN PRODUCT ARRAY OBJECT
const handbagProductListW = [
    {   
        id: "bag01W",
        inCart: 0,
        name: "Small KENZO Kamera travel bag",
        url: "#",
        image: "./images/section 4/woman/Small KENZO Kamera travel bag.jpg",
        image2: "./images/section 4/woman/Small KENZO Kamera travel bag 2.jpg",
        price: 200,
        gender: "FEMAL",
        color: "WHITE",
    },
    {   
        id: "bag02W",
        inCart: 0,
        name: "Kenzogram mini messenger bag",
        url: "#",
        image: "./images/section 4/woman/Kenzogram mini messenger bag.jpg",
        image2: "./images/section 4/woman/Kenzogram mini messenger bag 2.jpg",
        price: 235,
        gender: "FEMAL",
        color: "BLACK",
    },
    {   
        id: "bag03W",
        inCart: 0,
        name: "Kampus Tiger small bumbag",
        url: "#",
        image: "./images/section 4/woman/Kampus Tiger small bumbag.jpg",
        image2: "./images/section 4/woman/Kampus Tiger small bumbag 2.jpg",
        price: 245,
        gender: "FEMAL",
        color: "PINK",
    },
    {   
        id: "bag04W",
        inCart: 0,
        name: "Canvas Kampus Tiger backpack",
        url: "#",
        image: "./images/section 4/woman/Canvas Kampus Tiger backpack.jpg",
        image2: "./images/section 4/woman/Canvas Kampus Tiger backpack 2.jpg",
        price: 340,
        gender: "FEMAL",
        color: "BLACK",
    },
]

function render_section4_product() {
    for (let product of handbagProductListM) {
        document.getElementById("section4__container1").innerHTML += `
                <div class="product__item">
                    <div class="product__image" onclick="open_product_detail()">
                        <a ><img id="product__img" src="` + product.image + `" alt=""
                        onmouseover="this.src='`+product.image2+`'"
                        onmouseout="this.src='`+product.image+`'"
                        /></a>
                    </div>
                    <div class="product__info">
                        <div class="product__name">
                            <a href="#" onclick="open_product_detail()">`+ product.name + `</a>
                        </div>
                        <div class="product__color">` + product.color + `</div>
                        <div class="product__price">$` + product.price + `</div>
                        
                    </div>
                    <div><button class="btn_cart" id="btn__cart">ADD TO CART</button></div>
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
                    <div class="product__image" onclick="open_product_detail()">
                        <a ><img src="` + product2.image + `" alt=""
                        onmouseover="this.src='`+product2.image2+`'"
                        onmouseout="this.src='`+product2.image+`'"
                        /></a>
                    </div>
                    <div class="product__info">
                        <div class="product__name">
                            <a class="product__name" href="#" onclick="open_product_detail()">` + product2.name + `</a>
                        </div>
                        <div class="product__color">` + product2.color + `</div>
                        <div class="product__price">$` + product2.price + `</div>
                       
                    </div>
                    <div><button class="btn_cart" id="btn__cart">ADD TO CART</button></div>
                </div>
            `
        
            
    }
}
render_section4_product_2();

// ALL PRODUCT ARRAY
const allProducts = [
    {   id: "WA01",
        inCart: 0,
        name: "Caliber 12.1, 38 mm WHT",
        desc: "This practical, fashionable KENZO Kamera travel bag is embellished with leather finishes. Thanks to its streamlined, original design, it can be worn over the shoulder or across the body. The two compartments are perfect for keeping all your everyday essentials close at hand",
        url: "#",
        image: "./images/section 2/Caliber 12.1, 38 mm WHT.jpg",
        image2: "./images/section 2/Caliber 12.1, 38 mm WHT 2.jpg",
        price: 189,
        gender: "MALE",
        color: "White",
    },
    {   
        id: "WA02",
        inCart: 0,
        name: "Caliber 12.1, 38 mm BLK",
        desc: "This practical, fashionable KENZO Kamera travel bag is embellished with leather finishes. Thanks to its streamlined, original design, it can be worn over the shoulder or across the body. The two compartments are perfect for keeping all your everyday essentials close at hand",
        url: "#",
        image: "./images/section 2/Caliber 12.1, 38 mm BLK.jpg",
        image2: "./images/section 2/Caliber 12.1, 38 mm BLK 2.jpg",
        price: 189,
        gender: "MALE",
        color: "Black",
    },
    {   
        id: "WA03",
        inCart: 0,
        name: "Paradoxe caliber 12.1, 38 mm",
        desc: "This practical, fashionable KENZO Kamera travel bag is embellished with leather finishes. Thanks to its streamlined, original design, it can be worn over the shoulder or across the body. The two compartments are perfect for keeping all your everyday essentials close at hand",
        url: "#",
        image: "./images/section 2/Paradoxe caliber 12.1, 38 mm.jpg",
        image2: "./images/section 2/Paradoxe caliber 12.1, 38 mm 2.jpg",
        price: 245,
        gender: "MALE",
        color: "Black and White",
    },
    {   
        id: "WA04",
        inCart: 0,
        name: "Mademoiselle j12 acte ii, 33 mm",
        desc: "This practical, fashionable KENZO Kamera travel bag is embellished with leather finishes. Thanks to its streamlined, original design, it can be worn over the shoulder or across the body. The two compartments are perfect for keeping all your everyday essentials close at hand",
        url: "#",
        image: "./images/section 2/Mademoiselle j12 acte ii, 33 mm.jpg",
        image2: "./images/section 2/Mademoiselle j12 acte ii, 33 mm 2.jpg",
        price: 686,
        gender: "MALE",
        color: "Black and White",
    },
    {   
        id: "shoe01W",
        inCart: 0,
        name: "Vibe Sneaker",
        desc: "Flagship style of the fashion show, the Dior Vibe sneaker reimagines the classic running shoe with the couture spirit of the House. Combining white mesh, gold-tone technical fabric and transparent rubber inserts, it offers a modern play of contrasts. Punctuated with iconic accents like the 3D-effect details, star charm on the back and 'Christian Dior' signature on the tongue, the contemporary sneaker will add a modern touch to any casual or elegant look.",
        url: "#",
        image: "./images/section 3/Vibe Sneaker.jpg",
        image2: "./images/section 3/Vibe Sneaker 2.jpg",
        price: 286,
        gender: "MALE",
        color: "White Mesh and Gold-Tone",
    },
    {   
        id: "shoe02W",
        inCart: 0,
        name: "D-Connect Sneaker 1",
        desc: "This practical, fashionable KENZO Kamera travel bag is embellished with leather finishes. Thanks to its streamlined, original design, it can be worn over the shoulder or across the body. The two compartments are perfect for keeping all your everyday essentials close at hand",
        url: "#",
        image: "./images/section 3/D-Connect Sneaker 1.jpg",
        image2: "./images/section 3/D-Connect Sneaker 1 2.jpg",
        price: 286,
        gender: "MALE",
        color: "Red and Black Cupidon Print",
    },
    {   
        id: "shoe03W",
        inCart: 0,
        name: "D-Connect Sneaker 2",
        desc: "This practical, fashionable KENZO Kamera travel bag is embellished with leather finishes. Thanks to its streamlined, original design, it can be worn over the shoulder or across the body. The two compartments are perfect for keeping all your everyday essentials close at hand",
        url: "#",
        image: "./images/section 3/D-Connect Sneaker 2.jpg",
        image2: "./images/section 3/D-Connect Sneaker 2 2.jpg",
        price: 286,
        gender: "MALE",
        color: "White and Butterfly Motif",
    },
    {   
        id: "shoe04W",
        inCart: 0,
        name: "D-Connect Sneaker 3",
        desc: "This practical, fashionable KENZO Kamera travel bag is embellished with leather finishes. Thanks to its streamlined, original design, it can be worn over the shoulder or across the body. The two compartments are perfect for keeping all your everyday essentials close at hand",
        url: "#",
        image: "./images/section 3/D-Connect Sneaker 3.jpg",
        image2: "./images/section 3/D-Connect Sneaker 3 2.jpg",
        price: 286,
        gender: "MALE",
        color: "Blue and White Fabric",
    },
    {   
        id: "shoe05W",
        inCart: 0,
        name: "B24 Sneaker",
        desc: "This practical, fashionable KENZO Kamera travel bag is embellished with leather finishes. Thanks to its streamlined, original design, it can be worn over the shoulder or across the body. The two compartments are perfect for keeping all your everyday essentials close at hand",
        url: "#",
        image: "./images/section 3/B24 Sneaker.jpg",
        image2: "./images/section 3/B24 Sneaker 2.jpg",
        price: 286,
        gender: "MALE",
        color: "White Oblique Canvas",
    },
    {   
        id: "shoe06W",
        inCart: 0,
        name: "B28 High-Top Sneaker 2",
        desc: "This practical, fashionable KENZO Kamera travel bag is embellished with leather finishes. Thanks to its streamlined, original design, it can be worn over the shoulder or across the body. The two compartments are perfect for keeping all your everyday essentials close at hand",
        url: "#",
        image: "./images/section 3/B28 High-Top Sneaker 1.jpg",
        image2: "./images/section 3/B28 High-Top Sneaker 1 2.jpg",
        price: 300,
        gender: "MALE",
        color: "Jacquard and Black Rubber",
    },
    {   
        id: "shoe07W",
        inCart: 0,
        name: "B28 High-Top Sneaker",
        desc: "This practical, fashionable KENZO Kamera travel bag is embellished with leather finishes. Thanks to its streamlined, original design, it can be worn over the shoulder or across the body. The two compartments are perfect for keeping all your everyday essentials close at hand",
        url: "#",
        image: "./images/section 3/B28 High-Top Sneaker 2.jpg",
        image2: "./images/section 3/B28 High-Top Sneaker 2 2.jpg",
        price: 300,
        gender: "MALE",
        color: "Jacquard and White Rubber",
    },
    {   
        id: "shoe08W",
        inCart: 0,
        name: "B28 Low-Top Sneaker",
        desc: "This practical, fashionable KENZO Kamera travel bag is embellished with leather finishes. Thanks to its streamlined, original design, it can be worn over the shoulder or across the body. The two compartments are perfect for keeping all your everyday essentials close at hand",
        url: "#",
        image: "./images/section 3/B28 Low-Top Sneaker.jpg",
        image2: "./images/section 3/B28 Low-Top Sneaker 2.jpg",
        price: 286,
        gender: "MALE",
        color: "Black Jacquard and Rubber",
    },
    {
        id: "bag01M",
        inCart: 0,
        name: "KAMPUS TIGER BACKPACK",
        desc: "This practical, fashionable KENZO Kamera travel bag is embellished with leather finishes. Thanks to its streamlined, original design, it can be worn over the shoulder or across the body. The two compartments are perfect for keeping all your everyday essentials close at hand",
        url: "#",
        image: "./images/section 4/KAMPUS TIGER BACKPACK.jpg",
        image2: "./images/section 4/KAMPUS TIGER BACKPACK 2.jpg",
        price: 265,
        gender: "MALE",
        color: "BLACK",
    },
    {   
        id: "bag02M",
        inCart: 0,
        name: "KENZO SPORT BELT BAG",
        desc: "This practical, fashionable KENZO Kamera travel bag is embellished with leather finishes. Thanks to its streamlined, original design, it can be worn over the shoulder or across the body. The two compartments are perfect for keeping all your everyday essentials close at hand",
        url: "#",
        image: "./images/section 4/KENZO SPORT BELT BAG.jpg",
        image2: "./images/section 4/KENZO SPORT BELT BAG 2.jpg",
        price: 275,
        gender: "MALE",
        color: "BLACK",
    },
    {   
        id: "bag03M",
        inCart: 0,
        name: "KENZO Sport backpack W strap",
        desc: "This practical, fashionable KENZO Kamera travel bag is embellished with leather finishes. Thanks to its streamlined, original design, it can be worn over the shoulder or across the body. The two compartments are perfect for keeping all your everyday essentials close at hand",
        url: "#",
        image: "./images/section 4/KENZO Sport backpack W strap.jpg",
        image2: "./images/section 4/KENZO Sport backpack W strap 2.jpg",
        price: 295,
        gender: "MALE",
        color: "WHITE",
    },
    {   
        id: "bag04M",
        inCart: 0,
        name: "KENZO Sport tote bag",
        desc: "This practical, fashionable KENZO Kamera travel bag is embellished with leather finishes. Thanks to its streamlined, original design, it can be worn over the shoulder or across the body. The two compartments are perfect for keeping all your everyday essentials close at hand",
        url: "#",
        image: "./images/section 4/KENZO Sport tote bag.jpg",
        image2: "./images/section 4/KENZO Sport tote bag 2.jpg",
        price: 340,
        gender: "MALE",
        color: "BLACK",
    },
    {   
        id: "bag01W",
        inCart: 0,
        name: "Small KENZO Kamera travel bag",
        desc: "This practical, fashionable KENZO Kamera travel bag is embellished with leather finishes. Thanks to its streamlined, original design, it can be worn over the shoulder or across the body. The two compartments are perfect for keeping all your everyday essentials close at hand",
        url: "#",
        image: "./images/section 4/woman/Small KENZO Kamera travel bag.jpg",
        image2: "./images/section 4/woman/Small KENZO Kamera travel bag 2.jpg",
        price: 200,
        gender: "FEMAL",
        color: "WHITE",
    },
    {   
        id: "bag02W",
        inCart: 0,
        name: "Kenzogram mini messenger bag",
        desc: "This practical, fashionable KENZO Kamera travel bag is embellished with leather finishes. Thanks to its streamlined, original design, it can be worn over the shoulder or across the body. The two compartments are perfect for keeping all your everyday essentials close at hand",
        url: "#",
        image: "./images/section 4/woman/Kenzogram mini messenger bag.jpg",
        image2: "./images/section 4/woman/Kenzogram mini messenger bag 2.jpg",
        price: 235,
        gender: "FEMAL",
        color: "BLACK",
    },
    {   
        id: "bag03W",
        inCart: 0,
        name: "Kampus Tiger small bumbag",
        desc: "This practical, fashionable KENZO Kamera travel bag is embellished with leather finishes. Thanks to its streamlined, original design, it can be worn over the shoulder or across the body. The two compartments are perfect for keeping all your everyday essentials close at hand",
        url: "#",
        image: "./images/section 4/woman/Kampus Tiger small bumbag.jpg",
        image2: "./images/section 4/woman/Kampus Tiger small bumbag 2.jpg",
        price: 245,
        gender: "FEMAL",
        color: "PINK",
    },
    {   
        id: "bag04W",
        inCart: 0,
        name: "Canvas Kampus Tiger backpack",
        desc: "This practical, fashionable KENZO Kamera travel bag is embellished with leather finishes. Thanks to its streamlined, original design, it can be worn over the shoulder or across the body. The two compartments are perfect for keeping all your everyday essentials close at hand",
        url: "#",
        image: "./images/section 4/woman/Canvas Kampus Tiger backpack.jpg",
        image2: "./images/section 4/woman/Canvas Kampus Tiger backpack 2.jpg",
        price: 340,
        gender: "FEMAL",
        color: "BLACK",
    },
]

// FUNCTION ADD TO CART

let carts = document.querySelectorAll(".btn_cart");
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cart_number(allProducts[i]);
        total_cost(allProducts[i]);
    })
}

function keep_status_of_cart() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers) {
    document.querySelector('.cart__number').textContent = productNumbers;
}}

function cart_number(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart__number').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart__number').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    
    if(cartItems != null) {

        if (cartItems[product.id] == undefined) {
            cartItems = {
                ...cartItems,
                [product.id]: product
            }
        }
        cartItems[product.id].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {[product.id]: product}
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

// FUNCTION TOTAL PRICE
function total_cost(product) {
    let cartCost = localStorage.getItem('totalCost');

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
    

}

keep_status_of_cart();

// FUNCTION EVENT OPEN PRODUCT DETAIL PAGE
function open_product_detail() {
    location.assign("./productdetail.html");
}

// SET PRODUCT AFTER CLICKED ON LOCAL STORAGE

let itemclicked = document.querySelectorAll(".product__image");
for (let j=0; j < itemclicked.length; j++) {
    itemclicked[j].addEventListener('click', () => {
        ItemClicked(allProducts[j]);
    })
}
let itemclicked2 = document.querySelectorAll(".product__name");
for (let z=0; z < itemclicked2.length; z++) {
    itemclicked2[z].addEventListener('click', () => {
        ItemClicked(allProducts[z]);
    })
}

function ItemClicked(allProducts) {
    localStorage.setItem("productClicked", JSON.stringify(allProducts));
}

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


