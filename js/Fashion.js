// RENDER HEADER
const mainPage = document.querySelector('#mainPage');
    mainPage.innerHTML += `
    <div id="header"></div> `;
    // RENDER HEADER NATIVE BUTTON - USER LOGIN
    const headerNative = document.querySelector('#header');
        headerNative.innerHTML += `
        <a id="logo__main" class="" 
        onclick="location.href='./index.html';"> <i>nYe</i></a>
        <a id="logo__main2" class="" 
        onclick="location.href='./index.html';"> <i>nYe</i></a>
        <a id="menu1" class="native" href="#">Women's Fashion</a>
        <a id="menu0" class="native" href="#">FASHION Page</a>
        <a id="menu2" class="native" href="#">Men's Fashion</a>
        <a id="cata" class="native" href="#">CATALOG</a>
        <span id="user__container" href="#"> </span> `
    const dropCata = document.querySelector("#cata")
        dropCata.innerHTML += ` <span class ="drop_content"> 
        <button class="dropMenu" id="dropMenu1" onclick="allW()" href="#">Women's Fashion</button>
        <button class="dropMenu" id="dropMenu2" href="#">Men's Fashion</button>
        <button class="dropMenu" id="dropMenu0" href="#">back to fashion page</button></span> `
    const userContainer = document.querySelector("#user__container")
        userContainer.innerHTML += `
        <span id = "Ab" class="info"> <i class="material-icons">supervisor_account</i></span>
        <span id = "log" class="info" type="button" onclick="location.href='./login.html'"> Login</span>
        <a href="./cart.html" id="cart__icon"><span id = "register" class="info"><i class="material-icons">shopping_cart</i><span class="cart__number">0</span></span></a> `;
//Render Fashion page
mainPage.innerHTML += `
    <div id="mainPageFashion"> </div>
    <a href="#"><button onclick="topFunction()" id="myBtn" title="Go to top">Back to top</button></a>`;
 // section Men's  Fashion, section Women's  Fashion
    const mainPageFashion = document.querySelector('#mainPageFashion');
        mainPageFashion.innerHTML += `
            <video  controls autoplay muted loop="" playsinline=""> <source
            src = "https://www.dior.com/couture/var/dior/storage/original/video/0fdbdfb57a18fb353efd235ba5df5de1.mp4"> 
            poster="https://www.dior.com/couture/var/dior/storage/images/30536758/25-eng-GB/fashion-show-banner2_1440_1200.jpg"</video>`
    mainPageFashion.innerHTML += `<div id="fashionSelections"> </div>`
    const fashionSelections = document.querySelector('#fashionSelections');
        fashionSelections.innerHTML += `
                <p class ="titF"><i> - READY TO WEAR - </i> </p>
            <div id="womenFashion">
             <img id=imgWomenFashion
            src = "https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_1920/FSH-1639756228960-22pplpdrtw00header.jpg"/>
            <a class="A" href="#">   WOMEN  <span></span>
            <span></span>
            <span></span>
            <span></span>
            </a> </div>
            <div id="FCon1" class="FCon" >
               <div id ="WFcontainer"> 
                  <p class="titFC">Women's Fashion</p>
                     <div class="actionBar"> 
                         <span id="filter"> 
                            <i class="material-icons">menu</i> Filter <i class="material-icons">unfold_more</i>
                         </span>
                          <span id="sort"> Sort <i class="material-icons">unfold_more</i>
                         </span>
                         </div>
                         <div id ="WFcontainer1"> </div> </div>  </div>
            <div id="menFashion">
            <a class="A"  href="#">     MEN   <span></span>
            <span></span>
            <span></span>
            <span></span>
            </a>
              <img id=imgMenFashion src ="https://www.dior.com/couture/var/dior/storage/images/horizon/mens-fashion/man/block-cover-sacai-cover/block-cover-item-cover/28730917-15-eng-GB/cover_1440_1200.jpg" />
            </div>
            <div id="FCon2" class="FCon" >
                 <div id ="MFcontainer" >
                    <p class="titFC">Men's Fashion</p> 
                       <div class="actionBar"> 
                          <span id="filter2"> <i class="material-icons">menu</i> Filter <i class="material-icons">unfold_more</i>
                           </span>
                           <span id="sort2"> Sort <i class="material-icons">unfold_more</i>
                           </span>
                           </div>
                           <div id ="MFcontainer1"> </div> </div>  </div> `;
// RENDER PRODUCTS LIST 
var FashionProductListW = [
    {
        class: "jacket",
        name: "Marlène Jacket",
        image: "./images/section 1/women/jackets/6.jpg",
        price: "300",
        color: "Navy Blue Bonded",
    },
    {
        class: "jacket",
        name: "Marinière Marlène Jacket",
        image: "./images/section 1/women/jackets/5.jpg",
        price: "300",
        gender: "FEMAL",
        color: "Navy Blue and Ecru",
    },
    {
        class: "jacket",
        name: "Marlène Belted Jacket",
        image: "./images/section 1/women/jackets/4.jpg",
        price: "300",
        gender: "FEMAL",
        color: "Blue and White Striped",
    },
    {
        class: "jacket",
        name: "Marlène Belted Jacket",
        image: "./images/section 1/women/jackets/3.jpg",
        price: "300",
        gender: "FEMAL",
        color: "White Wool and Silk",
    },
    {
        class: "jacket",
        name: "Macrocannage Bar Jacket",
        image: "./images/section 1/women/jackets/2.jpg",
        price: "350",
        gender: "FEMAL",
        color: "Black Quilted Technical Taffeta",
    },
    {
        class: "jacket",
        name: "Macrocannage Bar Jacket",
        image: "./images/section 1/women/jackets/1.jpg",
        price: "350",
        gender: "FEMAL",
        color: "Beige Quilted Technical Taffeta",
    },
    {
        class: "dress",
        name: "Mid-Length Dress",
        image: "./images/section 1/women/dresses/5.jpg",
        price: "400",
        gender: "FEMAL",
        color: "Black Technical Taffeta",
    },
    {
        class: "dress",
        name: "Short Hooded Dress",
        image: "./images/section 1/women/dresses/4.jpg",
        price: "200",
        gender: "FEMAL",
        color: "Gold-Tone Technical Taffeta",
    },
    {
        class: "dress",
        name: "Short Hooded Dress",
        image: "./images/section 1/women/dresses/3.jpg",
        price: "200",
        gender: "FEMAL",
        color: "Navy Blue Technical Taffeta",
    },
    {
        class: "dress",
        name: "Mid-Length Dress",
        image: "./images/section 1/women/dresses/2.jpg",
        price: "400",
        gender: "FEMAL",
        color: "White and Black Under The Sea",
    },
    {
        class: "dress",
        name: "Long Dress",
        image: "./images/section 1/women/dresses/1.jpg",
        price: "350",
        gender: "FEMAL",
        color: "Navy Blue Cotton with Toile de",
    },
    {
        class: "coat",
        name: "Sleeveless Belted Coat",
        image: "./images/section 1/women/coats/6.jpg",
        price: "300",
        gender: "FEMAL",
        color: "Navy Blue Double-Sided",
    },
    {
        class: "coat",
        name: "Cropped Coat with Hood and Belt",
        image: "./images/section 1/women/coats/5.jpg",
        price: "300",
        gender: "FEMAL",
        color: "Navy Blue Double-Sided Wool",
    },
    {
        class: "coat",
        name: "Peacoat",
        image: "./images/section 1/women/coats/4.jpg",
        price: "350",
        gender: "FEMAL",
        color: "White Double-Sided Cashmere",
    },
    {
        class: "coat",
        name: "Hooded Jacket Macrocannage Lining",
        image: "./images/section 1/women/coats/3.jpg",
        price: "350",
        gender: "FEMAL",
        color: "Gray Technical Cotton Drill",
    },
    {
        class: "coat",
        name: "Macrocannage Peacot",
        image: "./images/section 1/women/coats/2.jpg",
        price: "300",
        gender: "FEMAL",
        color: "Black Quilted Technical Taffeta",
    },
    {
        class: "coat",
        name: "Peacoat",
        image: "./images/section 1/women/coats/1.jpg",
        price: "350",
        gender: "FEMAL",
        color: "Navy Blue Double-Sided Wool",
    },

]
let FashionProductListM = [
    {
        class: "outerwear",
        name: "Selvedge MKII Blouson",
        image: "./images/section 1/men/outerwear/1.jpg",
        price: "250",
        gender: "FEMAL",
        color: "Blue Raw Cotton Denim",
    },
    {
        class: "outerwear",
        name: "Double-Breasted Coat",
        image: "./images/section 1/men/outerwear/2.jpg",
        price: "550",
        gender: "FEMAL",
        color: "Multicolor Cotton Jacquard",
    },
    {
        class: "outerwear",
        name: "Blouson with Removable Collar",
        image: "./images/section 1/men/outerwear/3.jpg",
        price: "390",
        gender: "FEMAL",
        color: "Black Cashmere Cloth",
    },
    {
        class: "outerwear",
        name: "Fabric Overlay Coat",
        image: "./images/section 1/men/outerwear/4.jpg",
        price: "450",
        gender: "FEMAL",
        color: "Blue Wool and Mohair Canvas",
    },
    {
        class: "outerwear",
        name: "Hybrid Bomber Jacket",
        image: "./images/section 1/men/outerwear/5.jpg",
        price: "300",
        gender: "FEMAL",
        color: "Black Technical Twill",
    },
    {
        class: "outerwear",
        name: "Reversible Blouson",
        image: "./images/section 1/men/outerwear/6.jpg",
        price: "390",
        gender: "FEMAL",
        color: "Gray Technical Wool Jacquard",
    },
    {
        class: "outerwear",
        name: "Bomber Jacket with Sheepskin Collar",
        image: "./images/section 1/men/outerwear/7.jpg",
        price: "300",
        gender: "FEMAL",
        color: "Gray Suede Lambskin",
    },
    {
        class: "outerwear",
        name: "Knit Hybrid Jacket",
        image: "./images/section 1/men/outerwear/8.jpg",
        price: "350",
        gender: "FEMAL",
        color: "Cream Technical Wool",
    },
    {
        class: "outerwear",
        name: "Classic Coat",
        image: "./images/section 1/men/outerwear/9.jpg",
        price: "500",
        gender: "FEMAL",
        color: "Black Cashmere Cloth",
    },
    {
        class: "outerwear",
        name: "Peacoat",
        image: "./images/section 1/men/outerwear/10.jpg",
        price: "400",
        gender: "FEMAL",
        color: "Navy Blue Cashmere Cloth",
    },
    {
        class: "jacket",
        name: "Oblique Jacket",
        image: "./images/section 1/men/jackets/1.jpg",
        price: "300",
        gender: "FEMAL",
        color: "Black Wool Drill",
    },
    {
        class: "jacket",
        name: "Double-Breasted Jacket",
        image: "./images/section 1/men/jackets/2.jpg",
        price: "500",
        gender: "FEMAL",
        color: "Deep Blue Wool Ottoman",
    },
    {
        class: "jacket",
        name: "Officer Collar Jacket",
        image: "./images/section 1/men/jackets/3.jpg",
        price: "300",
        gender: "FEMAL",
        color: "Ecru Vintage Wool Twill",
    },
    {
        class: "jacket",
        name: "Sleeveless Jacket",
        image: "./images/section 1/men/jackets/4.jpg",
        price: "200",
        gender: "FEMAL",
        color: "Navy Blue Vintage Wool Twill",
    },
]
// ALL PRODUCT ARRAY
const allProductsF = [
    {   
        id: "JA01W",
        inCart: 0,
        class: "jacket",
        name: "Marlène Jacket",
        image: "./images/section 1/women/jackets/6.jpg",
        price: "300",
        color: "Navy Blue Bonded",
    },
    {   
        id: "JA02W",
        inCart: 0,
        class: "jacket",
        name: "Marinière Marlène Jacket",
        image: "./images/section 1/women/jackets/5.jpg",
        price: "300",
        gender: "FEMAL",
        color: "Navy Blue and Ecru",
    },
    {   
        id: "JA03W",
        inCart: 0,
        class: "jacket",
        name: "Marlène Belted Jacket",
        image: "./images/section 1/women/jackets/4.jpg",
        price: "300",
        gender: "FEMAL",
        color: "Blue and White Striped",
    },
    {   
        id: "JA04W",
        inCart: 0,
        class: "jacket",
        name: "Marlène Belted Jacket",
        image: "./images/section 1/women/jackets/3.jpg",
        price: "300",
        gender: "FEMAL",
        color: "White Wool and Silk",
    },
    {   
        id: "JA05W",
        inCart: 0,
        class: "jacket",
        name: "Macrocannage Bar Jacket",
        image: "./images/section 1/women/jackets/2.jpg",
        price: "350",
        gender: "FEMAL",
        color: "Black Quilted Technical Taffeta",
    },
    {   
        id: "JA06W",
        inCart: 0,
        class: "jacket",
        name: "Macrocannage Bar Jacket",
        image: "./images/section 1/women/jackets/1.jpg",
        price: "350",
        gender: "FEMAL",
        color: "Beige Quilted Technical Taffeta",
    },
    {   
        id: "DR07W",
        inCart: 0,
        class: "dress",
        name: "Mid-Length Dress",
        image: "./images/section 1/women/dresses/5.jpg",
        price: "400",
        gender: "FEMAL",
        color: "Black Technical Taffeta",
    },
    {   
        id: "DR08W",
        inCart: 0,
        class: "dress",
        name: "Short Hooded Dress",
        image: "./images/section 1/women/dresses/4.jpg",
        price: "200",
        gender: "FEMAL",
        color: "Gold-Tone Technical Taffeta",
    },
    {   
        id: "DR09W",
        inCart: 0,
        class: "dress",
        name: "Short Hooded Dress",
        image: "./images/section 1/women/dresses/3.jpg",
        price: "200",
        gender: "FEMAL",
        color: "Navy Blue Technical Taffeta",
    },
    {   
        id: "DR10W",
        inCart: 0,
        class: "dress",
        name: "Mid-Length Dress",
        image: "./images/section 1/women/dresses/2.jpg",
        price: "400",
        gender: "FEMAL",
        color: "White and Black Under The Sea",
    },
    {   
        id: "DR11W",
        inCart: 0,
        class: "dress",
        name: "Long Dress",
        image: "./images/section 1/women/dresses/1.jpg",
        price: "350",
        gender: "FEMAL",
        color: "Navy Blue Cotton with Toile de",
    },
    {   
        id: "CO12W",
        inCart: 0,
        class: "coat",
        name: "Sleeveless Belted Coat",
        image: "./images/section 1/women/coats/6.jpg",
        price: "300",
        gender: "FEMAL",
        color: "Navy Blue Double-Sided",
    },
    {   
        id: "CO13W",
        inCart: 0,
        class: "coat",
        name: "Cropped Coat with Hood and Belt",
        image: "./images/section 1/women/coats/5.jpg",
        price: "300",
        gender: "FEMAL",
        color: "Navy Blue Double-Sided Wool",
    },
    {   
        id: "CO14W",
        inCart: 0,
        class: "coat",
        name: "Peacoat",
        image: "./images/section 1/women/coats/4.jpg",
        price: "350",
        gender: "FEMAL",
        color: "White Double-Sided Cashmere",
    },
    {   
        id: "CO15W",
        inCart: 0,
        class: "coat",
        name: "Hooded Jacket Macrocannage Lining",
        image: "./images/section 1/women/coats/3.jpg",
        price: "350",
        gender: "FEMAL",
        color: "Gray Technical Cotton Drill",
    },
    {   
        id: "CO16W",
        inCart: 0,
        class: "coat",
        name: "Macrocannage Peacot",
        image: "./images/section 1/women/coats/2.jpg",
        price: "300",
        gender: "FEMAL",
        color: "Black Quilted Technical Taffeta",
    },
    {   
        id: "CO17W",
        inCart: 0,
        class: "coat",
        name: "Peacoat",
        image: "./images/section 1/women/coats/1.jpg",
        price: "350",
        gender: "FEMAL",
        color: "Navy Blue Double-Sided Wool",
    },
    {   
        id: "OU18W",
        inCart: 0,
        class: "outerwear",
        name: "Selvedge MKII Blouson",
        image: "./images/section 1/men/outerwear/1.jpg",
        price: "250",
        gender: "FEMAL",
        color: "Blue Raw Cotton Denim",
    },
    {   
        id: "OU19W",
        inCart: 0,
        class: "outerwear",
        name: "Double-Breasted Coat",
        image: "./images/section 1/men/outerwear/2.jpg",
        price: "550",
        gender: "FEMAL",
        color: "Multicolor Cotton Jacquard",
    },
    {   
        id: "OU20W",
        inCart: 0,
        class: "outerwear",
        name: "Blouson with Removable Collar",
        image: "./images/section 1/men/outerwear/3.jpg",
        price: "390",
        gender: "FEMAL",
        color: "Black Cashmere Cloth",
    },
    {   
        id: "OU21W",
        inCart: 0,
        class: "outerwear",
        name: "Fabric Overlay Coat",
        image: "./images/section 1/men/outerwear/4.jpg",
        price: "450",
        gender: "FEMAL",
        color: "Blue Wool and Mohair Canvas",
    },
    {   
        id: "OU22W",
        inCart: 0,
        class: "outerwear",
        name: "Hybrid Bomber Jacket",
        image: "./images/section 1/men/outerwear/5.jpg",
        price: "300",
        gender: "FEMAL",
        color: "Black Technical Twill",
    },
    {   
        id: "OU23W",
        inCart: 0,
        class: "outerwear",
        name: "Reversible Blouson",
        image: "./images/section 1/men/outerwear/6.jpg",
        price: "390",
        gender: "FEMAL",
        color: "Gray Technical Wool Jacquard",
    },
    {   
        id: "OU24W",
        inCart: 0,
        class: "outerwear",
        name: "Bomber Jacket with Sheepskin Collar",
        image: "./images/section 1/men/outerwear/7.jpg",
        price: "300",
        gender: "FEMAL",
        color: "Gray Suede Lambskin",
    },
    {   
        id: "OU24W",
        inCart: 0,
        class: "outerwear",
        name: "Knit Hybrid Jacket",
        image: "./images/section 1/men/outerwear/8.jpg",
        price: "350",
        gender: "FEMAL",
        color: "Cream Technical Wool",
    },
    {   
        id: "OU25W",
        inCart: 0,
        class: "outerwear",
        name: "Classic Coat",
        image: "./images/section 1/men/outerwear/9.jpg",
        price: "500",
        gender: "FEMAL",
        color: "Black Cashmere Cloth",
    },
    {   
        id: "OU26W",
        inCart: 0,
        class: "outerwear",
        name: "Peacoat",
        image: "./images/section 1/men/outerwear/10.jpg",
        price: "400",
        gender: "FEMAL",
        color: "Navy Blue Cashmere Cloth",
    },
    {   
        id: "JA27W",
        inCart: 0,
        class: "jacket",
        name: "Oblique Jacket",
        image: "./images/section 1/men/jackets/1.jpg",
        price: "300",
        gender: "FEMAL",
        color: "Black Wool Drill",
    },
    {   
        id: "JA28W",
        inCart: 0,
        class: "jacket",
        name: "Double-Breasted Jacket",
        image: "./images/section 1/men/jackets/2.jpg",
        price: "500",
        gender: "FEMAL",
        color: "Deep Blue Wool Ottoman",
    },
    {   
        id: "JA29W",
        inCart: 0,
        class: "jacket",
        name: "Officer Collar Jacket",
        image: "./images/section 1/men/jackets/3.jpg",
        price: "300",
        gender: "FEMAL",
        color: "Ecru Vintage Wool Twill",
    },
    {   
        id: "JA30W",
        inCart: 0,
        class: "jacket",
        name: "Sleeveless Jacket",
        image: "./images/section 1/men/jackets/4.jpg",
        price: "200",
        gender: "FEMAL",
        color: "Navy Blue Vintage Wool Twill",
    },
]

 function render_section1_Wproduct() {
    for (let product of FashionProductListW) {
        document.getElementById("WFcontainer1").innerHTML += `
            <div class="product__item">
                <div class="product__image">
                    <a><img src="` + product.image + `" alt=""></a>
                </div>
                <div class="product__info">
                    <div class="product__name">
                        <a>`+ product.name + `</a>
                    </div>
                    <div class="product__color">` + product.color + `</div>
                    <div class="product__price">$` + product.price + `</div>
                </div>
                <div class ="btnC"><button class="btn_cart" id="btn__cart">ADD TO CART</button></div>
            </div> ` }}
render_section1_Wproduct()

function render_section1_Mproduct() {
    for (let product of FashionProductListM) {
        document.getElementById("MFcontainer1").innerHTML += `
            <div class="product__item">
                <div class="product__image">
                    <a><img src="` + product.image + `" alt=""></a>
                </div>
                <div class="product__info">
                    <div class="product__name">
                        <a>`+ product.name + `</a>
                    </div>
                    <div class="product__color">` + product.color + `</div>
                    <div class="product__price">$` + product.price + `</div>
                    
                </div>
                <div class ="btnC"><button class="btn_cart" id="btn__cart">ADD TO CART</button></div>
            </div>
            </div> `}}
render_section1_Mproduct()

// RUN FUNCTIONS 
const mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
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
document.getElementById("menu0").onclick = function () {
    document.getElementById("womenFashion").style.display = "flex";
    document.getElementById("menFashion").style.display = "flex";
    document.getElementById("FCon1").style.display = "none";
    document.getElementById("FCon2").style.display = "none";
}
document.getElementById("menu1").onclick = function () {
    document.getElementById("womenFashion").style.display = "none";
    document.getElementById("menFashion").style.display = "none";
    document.getElementById("FCon1").style.display = "flex";
    document.getElementById("FCon2").style.display = "none";
    
        document.getElementById("WFcontainer1").innerHTML =""
        function render_section1_Wproduct1() {
            for (let product of FashionProductListW) {
                document.getElementById("WFcontainer1").innerHTML += `
                    <div class="product__item">
                        <div class="product__image">
                            <a><img src="` + product.image + `" alt=""></a>
                        </div>
                        <div class="product__info">
                            <div class="product__name">
                                <a>`+ product.name + `</a>
                            </div>
                            <div class="product__color">` + product.color + `</div>
                            <div class="product__price">$` + product.price + `</div>
                        </div>
                        <div class ="btnC"><button class="btn_cart" id="btn__cart" >ADD TO CART</button></div>
                    </div> `
      } }
        render_section1_Wproduct1()
        let carts = document.querySelectorAll(".btn_cart");
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cart_number(allProductsF[i]);
        total_cost(allProductsF[i]);
    })
}

}
document.getElementById("menu2").onclick = function () {
    document.getElementById("womenFashion").style.display = "none";
    document.getElementById("menFashion").style.display = "none";
    document.getElementById("FCon1").style.display = "none";
    document.getElementById("FCon2").style.display = "flex";
    
 
    document.getElementById("MFcontainer1").innerHTML =""
    function render_section1_Mproduct1() {
        for (let product of FashionProductListM) {
            document.getElementById("MFcontainer1").innerHTML += `
                <div class="product__item">
                    <div class="product__image">
                        <a><img src="` + product.image + `" alt=""></a>
                    </div>
                    <div class="product__info">
                        <div class="product__name">
                            <a>`+ product.name + `</a>
                        </div>
                        <div class="product__color">` + product.color + `</div>
                        <div class="product__price">$` + product.price + `</div>
                    </div>
                    <div class ="btnC"><button class="btn_cart" id="btn__cart">ADD TO CART</button></div>
                </div> `
        } }
    render_section1_Mproduct1()
    let carts = document.querySelectorAll(".btn_cart");
    for (let i=0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
            cart_number(allProductsF[i]);
            total_cost(allProductsF[i]);
        })
    }
    

}
document.getElementById("womenFashion").onclick = function () {
    document.getElementById("womenFashion").style.display = "none";
    document.getElementById("menFashion").style.display = "none";
    document.getElementById("FCon1").style.display = "flex";
    document.getElementById("FCon2").style.display = "none";
    document.getElementById("WFcontainer1").innerHTML =""
    function render_section1_Wproduct1() {
        for (let product of FashionProductListW) {
            document.getElementById("WFcontainer1").innerHTML += `
                <div class="product__item">
                    <div class="product__image">
                        <a><img src="` + product.image + `" alt=""></a>
                    </div>
                    <div class="product__info">
                        <div class="product__name">
                            <a>`+ product.name + `</a>
                        </div>
                        <div class="product__color">` + product.color + `</div>
                        <div class="product__price">$` + product.price + `</div>
                    </div>
                    <div class ="btnC"><button class="btn_cart" id="btn__cart">ADD TO CART</button></div>
                </div> `
  } }
    render_section1_Wproduct1()
    let carts = document.querySelectorAll(".btn_cart");
    for (let i=0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
            cart_number(allProductsF[i]);
            total_cost(allProductsF[i]);
        })
    }
    
}
document.getElementById("menFashion").onclick = function () {
    document.getElementById("womenFashion").style.display = "none";
    document.getElementById("menFashion").style.display = "none";
    document.getElementById("FCon1").style.display = "none";
    document.getElementById("FCon2").style.display = "flex";
    document.getElementById("MFcontainer1").innerHTML =""
    function render_section1_Mproduct1() {
        for (let product of FashionProductListM) {
            document.getElementById("MFcontainer1").innerHTML += `
                <div class="product__item">
                    <div class="product__image">
                        <a><img src="` + product.image + `" alt=""></a>
                    </div>
                    <div class="product__info">
                        <div class="product__name">
                            <a>`+ product.name + `</a>
                        </div>
                        <div class="product__color">` + product.color + `</div>
                        <div class="product__price">$` + product.price + `</div>
                    </div>
                    <div class ="btnC"><button class="btn_cart"  id="btn__cart">ADD TO CART</button></div>
                </div> `
        } }
    render_section1_Mproduct1()
    let carts = document.querySelectorAll(".btn_cart");
    for (let i=0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
            cart_number(allProductsF[i]);
            total_cost(allProductsF[i]);
        })
    }
    
}
document.getElementById("dropMenu1").onclick = function () {
    document.getElementById("womenFashion").style.display = "none";
    document.getElementById("menFashion").style.display = "none";
    document.getElementById("FCon1").style.display = "flex";
    document.getElementById("FCon2").style.display = "none";
}
document.getElementById("dropMenu2").onclick = function () {
    document.getElementById("womenFashion").style.display = "none";
    document.getElementById("menFashion").style.display = "none";
    document.getElementById("FCon1").style.display = "none";
    document.getElementById("FCon2").style.display = "flex";

}
document.getElementById("dropMenu0").onclick = function () {
    document.getElementById("womenFashion").style.display = "flex";
    document.getElementById("menFashion").style.display = "flex";
    document.getElementById("FCon1").style.display = "none";
    document.getElementById("FCon2").style.display = "none";
}
// DROP BAR HOVER CSS
const dropBar = document.getElementById("filter")
    dropBar.innerHTML += `
 <span class ="drop_content1">
 <button class="dropMenu1" id="WAll" onclick="allW()" href="#"> All </button>
 <button class="dropMenu1" id="WCoat" href="#"> Coats </button>
 <button class="dropMenu1" id="WDress" href="#"> Dresses </button>
 <button class="dropMenu1" id="WJacket" href="#"> Jackets </button> </span> `
const dropBar2 = document.getElementById("filter2")
 dropBar2.innerHTML += `
 <span class ="drop_content2">
 <button class="dropMenu1" id="MAll" href="#"> All </button>
 <button class="dropMenu2" id="MOuterwear" href="#"> Outerwear </button>
 <button class="dropMenu2" id="MJacket" href="#"> Jackets </button>  </span>`
const dropBar3 = document.getElementById("sort")
    dropBar3.innerHTML += `
 <span class ="drop_content3"> 
 <button class="dropMenu3" id="highP1"  href="#"> Highest Price </button>
 <button class="dropMenu3" id="bestP1" href="#"> Best Price </button></span>`
const dropBar4 = document.getElementById("sort2")
    dropBar4.innerHTML += `
 <span class ="drop_content4">
 <button class="dropMenu4" id="highP2"  href="#"> Highest Price </button>
 <button class="dropMenu4" id="bestP2" href="#"> Best Price </button> </span>`

 //FUNCTION FILTER SORT
 document.getElementById("highP1").onclick = function() {
    document.getElementById("WFcontainer1").innerHTML =""
 function render_section1_Wproduct() {
     for (let product of FashionProductListW.sort((p1,p2) => p2.price - p1.price)) {
         document.getElementById("WFcontainer1").innerHTML += `
             <div class="product__item">
                 <div class="product__image">
                     <a><img src="` + product.image + `" alt=""></a>
                 </div>
                 <div class="product__info">
                     <div class="product__name">
                         <a>`+ product.name + `</a>
                     </div>
                     <div class="product__color">` + product.color + `</div>
                     <div class="product__price">$` + product.price + `</div>
                 </div>
                 <div class ="btnC"><button class="btn_cart"  id="btn__cart">ADD TO CART</button></div>
             </div> `
     }
 }
 render_section1_Wproduct()
 let carts = document.querySelectorAll(".btn_cart");
 for (let i=0; i < carts.length; i++) {
     carts[i].addEventListener('click', () => {
         cart_number(allProductsF[i]);
         total_cost(allProductsF[i]);
     })
 }
  }

 document.getElementById("highP2").onclick = function() {
    document.getElementById("MFcontainer1").innerHTML =""
 function render_section1_Mproduct() {
     for (let product of FashionProductListM.sort((p1,p2) => p2.price - p1.price)) {
         document.getElementById("MFcontainer1").innerHTML += `
             <div class="product__item">
                 <div class="product__image">
                     <a><img src="` + product.image + `" alt=""></a>
                 </div>
                 <div class="product__info">
                     <div class="product__name">
                         <a>`+ product.name + `</a>
                     </div>
                     <div class="product__color">` + product.color + `</div>
                     <div class="product__price">$` + product.price + `</div>
                 </div>
                 <div class ="btnC"><button class="btn_cart" id="btn__cart">ADD TO CART</button></div>
             </div> `
     } }
 render_section1_Mproduct()
 let carts = document.querySelectorAll(".btn_cart");
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cart_number(allProductsF[i]);
        total_cost(allProductsF[i]);
    })
}
}

document.getElementById("bestP1").onclick = function() {
    document.getElementById("WFcontainer1").innerHTML =""
 function render_section1_Wproduct() {
     for (let product of FashionProductListW.sort((p1,p2) => p1.price - p2.price)) {
         document.getElementById("WFcontainer1").innerHTML += `
             <div class="product__item">
                 <div class="product__image">
                     <a><img src="` + product.image + `" alt=""></a>
                 </div>
                 <div class="product__info">
                     <div class="product__name">
                         <a>`+ product.name + `</a>
                     </div>
                     <div class="product__color">` + product.color + `</div>
                     <div class="product__price">$` + product.price + `</div>
                 </div>
                 <div class ="btnC"><button class="btn_cart" id="btn__cart">ADD TO CART</button></div>
             </div> `
     } }
 render_section1_Wproduct()
 let carts = document.querySelectorAll(".btn_cart");
 for (let i=0; i < carts.length; i++) {
     carts[i].addEventListener('click', () => {
         cart_number(allProductsF[i]);
         total_cost(allProductsF[i]);
     })
 }
 }

 document.getElementById("bestP2").onclick = function() {
    document.getElementById("MFcontainer1").innerHTML =""
 function render_section1_Mproduct() {
     for (let product of FashionProductListM.sort((p1,p2) => p1.price - p2.price)) {
         document.getElementById("MFcontainer1").innerHTML += `
             <div class="product__item">
                 <div class="product__image">
                     <a><img src="` + product.image + `" alt=""></a>
                 </div>
                 <div class="product__info">
                     <div class="product__name">
                         <a>`+ product.name + `</a>
                     </div>
                     <div class="product__color">` + product.color + `</div>
                     <div class="product__price">$` + product.price + `</div>
                 </div>
                 <div class ="btnC"><button class="btn_cart" id="btn__cart">ADD TO CART</button></div>
             </div> `
     }}
 render_section1_Mproduct()
 let carts = document.querySelectorAll(".btn_cart");
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cart_number(allProductsF[i]);
        total_cost(allProductsF[i]);
    })
}
}

document.getElementById("WCoat").onclick = function () {
    document.getElementById("WFcontainer1").innerHTML =""
    function render_section1_Wproduct1() {
        for (let product of FashionProductListW.filter(value => value.class === 'coat')) {
            document.getElementById("WFcontainer1").innerHTML += `
                <div class="product__item">
                    <div class="product__image">
                        <a><img src="` + product.image + `" alt=""></a>
                    </div>
                    <div class="product__info">
                        <div class="product__name">
                            <a>`+ product.name + `</a>
                        </div>
                        <div class="product__color">` + product.color + `</div>
                        <div class="product__price">$` + product.price + `</div>
                    </div>
                    <div class ="btnC"><button class="btn_cart" id="btn__cart">ADD TO CART</button></div>
                </div> `
        }}
    render_section1_Wproduct1()
    let carts = document.querySelectorAll(".btn_cart");
    for (let i=0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
            cart_number(allProductsF[i]);
            total_cost(allProductsF[i]);
        })
    }
     }

 document.getElementById("WDress").onclick = function () { 
    document.getElementById("WFcontainer1").innerHTML =""
    function render_section1_Wproduct1() {
        for (let product of FashionProductListW.filter(value => value.class === 'dress')) {
            document.getElementById("WFcontainer1").innerHTML += `
                <div class="product__item">
                    <div class="product__image">
                        <a><img src="` + product.image + `" alt=""></a>
                    </div>
                    <div class="product__info">
                        <div class="product__name">
                            <a>`+ product.name + `</a>
                        </div>
                        <div class="product__color">` + product.color + `</div>
                        <div class="product__price">$` + product.price + `</div>
                    </div>
                    <div class ="btnC"><button class="btn_cart" id="btn__cart">ADD TO CART</button></div>
                </div> `
        } }
    render_section1_Wproduct1()
    let carts = document.querySelectorAll(".btn_cart");
    for (let i=0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
            cart_number(allProductsF[i]);
            total_cost(allProductsF[i]);
        })
    }
     }

 document.getElementById("WJacket").onclick = function () { 
    document.getElementById("WFcontainer1").innerHTML =""
    function render_section1_Wproduct1() {
        for (let product of FashionProductListW.filter(value => value.class === 'jacket')) {
            document.getElementById("WFcontainer1").innerHTML += `
                <div class="product__item">
                    <div class="product__image">
                        <a><img src="` + product.image + `" alt=""></a>
                    </div>
                    <div class="product__info">
                        <div class="product__name">
                            <a>`+ product.name + `</a>
                        </div>
                        <div class="product__color">` + product.color + `</div>
                        <div class="product__price">$` + product.price + `</div>
                    </div>
                    <div class ="btnC"><button class="btn_cart" id="btn__cart">ADD TO CART</button></div>
                </div> `
        }  }
    render_section1_Wproduct1()
    let carts = document.querySelectorAll(".btn_cart");
    for (let i=0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
            cart_number(allProductsF[i]);
            total_cost(allProductsF[i]);
        })
    }
    }

 document.getElementById("WAll").onclick = function () { 
    document.getElementById("WFcontainer1").innerHTML =""
    function render_section1_Wproduct1() {
        for (let product of FashionProductListW) {
            document.getElementById("WFcontainer1").innerHTML += `
                <div class="product__item">
                    <div class="product__image">
                        <a><img src="` + product.image + `" alt=""></a>
                    </div>
                    <div class="product__info">
                        <div class="product__name">
                            <a>`+ product.name + `</a>
                        </div>
                        <div class="product__color">` + product.color + `</div>
                        <div class="product__price">$` + product.price + `</div>
                    </div>
                    <div class ="btnC"><button class="btn_cart" id="btn__cart">ADD TO CART</button></div>
                </div> `
  } }
    render_section1_Wproduct1()
    let carts = document.querySelectorAll(".btn_cart");
    for (let i=0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
            cart_number(allProductsF[i]);
            total_cost(allProductsF[i]);
        })
    }
    }

 document.getElementById("MJacket").onclick = function () {
    document.getElementById("MFcontainer1").innerHTML =""
    function render_section1_Mproduct1() {
        for (let product of FashionProductListM.filter(value => value.class === 'jacket')) {
            document.getElementById("MFcontainer1").innerHTML += `
                <div class="product__item">
                    <div class="product__image">
                        <a><img src="` + product.image + `" alt=""></a>
                    </div>
                    <div class="product__info">
                        <div class="product__name">
                            <a>`+ product.name + `</a>
                        </div>
                        <div class="product__color">` + product.color + `</div>
                        <div class="product__price">$` + product.price + `</div>
                    </div>
                    <div class ="btnC"><button class="btn_cart" id="btn__cart">ADD TO CART</button></div>
                </div> `
        }}
    render_section1_Mproduct1()
    let carts = document.querySelectorAll(".btn_cart");
    for (let i=0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
            cart_number(allProductsF[i]);
            total_cost(allProductsF[i]);
        })
    }
    }

 document.getElementById("MOuterwear").onclick = function () {
    document.getElementById("MFcontainer1").innerHTML =""
    function render_section1_Mproduct1() {
        for (let product of FashionProductListM.filter(value => value.class === 'outerwear')) {
            document.getElementById("MFcontainer1").innerHTML += `
                <div class="product__item">
                    <div class="product__image">
                        <a><img src="` + product.image + `" alt=""></a>
                    </div>
                    <div class="product__info">
                        <div class="product__name">
                            <a>`+ product.name + `</a>
                        </div>
                        <div class="product__color">` + product.color + `</div>
                        <div class="product__price">$` + product.price + `</div>
                    </div>
                    <div class ="btnC"><button class="btn_cart" id="btn__cart">ADD TO CART</button></div>
                </div> `
        } }
    render_section1_Mproduct1()
    let carts = document.querySelectorAll(".btn_cart");
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cart_number(allProductsF[i]);
        total_cost(allProductsF[i]);
    })
}
}

 document.getElementById("MAll").onclick = function () {
    document.getElementById("MFcontainer1").innerHTML =""
    function render_section1_Mproduct1() {
        for (let product of FashionProductListM) {
            document.getElementById("MFcontainer1").innerHTML += `
                <div class="product__item">
                    <div class="product__image">
                        <a><img src="` + product.image + `" alt=""></a>
                    </div>
                    <div class="product__info">
                        <div class="product__name">
                            <a>`+ product.name + `</a>
                        </div>
                        <div class="product__color">` + product.color + `</div>
                        <div class="product__price">$` + product.price + `</div>
                    </div>
                    <div class ="btnC"><button class="btn_cart" id="btn__cart">ADD TO CART</button></div>
                </div> `
        } }
    render_section1_Mproduct1()

    let carts = document.querySelectorAll(".btn_cart");
    for (let i=0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
            cart_number(allProductsF[i]);
            total_cost(allProductsF[i]);
        })
    }}


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

// FUNCTION ADD TO CART

let carts = document.querySelectorAll(".btn_cart");
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cart_number(allProductsF[i]);
        total_cost(allProductsF[i]);
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
        cartItems = {
            [product.id] : product
        }
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
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

keep_status_of_cart()
