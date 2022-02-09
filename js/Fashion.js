// RENDER HEADER
const mainPage = document.querySelector('#mainPage');
function render_header() {
    mainPage.innerHTML += `
    <div id="header"></div>
    `;

    // RENDER HEADER NATIVE BUTTON - USER LOGIN
    const headerNative = document.querySelector('#header');
    function render_header_native() {
        headerNative.innerHTML += `
        <a id="logo__main" class="" 
        onclick="location.href='./index.html';"
        >
        N.Y.E</a>
        <a id="logo__main2" class="" 
        onclick="location.href='./index.html';"
        >
        N.Y.E</a>
        <a id="menu1" class="native" href="#">Women's Fashion</a>
        <a id="menu0" class="native" href="#">FASHION Page</a>
        <a id="menu2" class="native" href="#">Men's Fashion</a>
       
        <a id="cata" class="native" href="#">CATALOG</a>
        <span id="user__container" href="#"> </span>

        `

    };
    render_header_native();

    const dropCata = document.querySelector("#cata")
    function drop() {
        dropCata.innerHTML += `
     <span class ="drop_content"> </span>
        `
    }
    drop()



    const dropContent = document.querySelector(".drop_content")

    function dropdown() {

        dropContent.innerHTML += `
                   
                   <button class="dropMenu" id="dropMenu1" href="#">Women's Fashion</button>
                  
                   <button class="dropMenu" id="dropMenu2" href="#">Men's Fashion</button>

                   <button class="dropMenu" id="dropMenu0" href="#">back to fashion page</button>
                  
                   `

    }
    dropdown()







    const userContainer = document.querySelector("#user__container")
    function user() {
        userContainer.innerHTML += `
        <span id = "Ab" class="info"> About Us <i class="material-icons">supervisor_account</i></span>
        <span id = "log" class="info" type="button" onclick="location.href='./login.html'"> Login</span>
        <span id = "register" class="info"> CART<i class="material-icons">shopping_cart</i></span>

        `;

    };
    user();

};
render_header();



//Render Fashion page
function main_page_fashion() {
    mainPage.innerHTML += `
    <div id="mainPageFashion"> </div>
    <a href="#"><button onclick="topFunction()" id="myBtn" title="Go to top">Top</button></a>
    `;

    // section Men's  Fashion, section Women's  Fashion
    const mainPageFashion = document.querySelector('#mainPageFashion');
    function fashion_header() {
        mainPageFashion.innerHTML += `
            <video  controls autoplay muted loop="" playsinline=""> <source
            src = "https://www.dior.com/couture/var/dior/storage/original/video/0fdbdfb57a18fb353efd235ba5df5de1.mp4"> 
            poster="https://www.dior.com/couture/var/dior/storage/images/30536758/25-eng-GB/fashion-show-banner2_1440_1200.jpg"</video>
            `
    };
    fashion_header()



    mainPageFashion.innerHTML += `<div id="fashionSelections"> </div>`
    const fashionSelections = document.querySelector('#fashionSelections');

    function fashion_selections() {
        fashionSelections.innerHTML += `
                <p class ="titF"><i> - READY TO WEAR - </i> </p>
            <div id="womenFashion"> <img id=imgWomenFashion
            src = "https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_1920/FSH-1639756228960-22pplpdrtw00header.jpg"
            />
            <a class="A" href="#">   WOMEN  <span></span>
            <span></span>
            <span></span>
            <span></span>
        </a>
            </div>


            <div id="FCon1" class="FCon" >
<div id ="WFcontainer"> 
<p class="titFC">Women's Fashion</p>

<div class="actionBar"> 
<span id="filter"> 
<i class="material-icons">menu</i> 
Filter 
<i class="material-icons">unfold_more</i>


</span>

<span id="sort"> 
Sort 
<i class="material-icons">unfold_more</i>
</span>
 </div>

 </div> 
 
 </div>


            <div id="menFashion">
            <a class="A"  href="#">     MEN   <span></span>
            <span></span>
            <span></span>
            <span></span>
        </a>
              <img id=imgMenFashion
            src ="
            https://www.dior.com/couture/var/dior/storage/images/horizon/mens-fashion/man/block-cover-sacai-cover/block-cover-item-cover/28730917-15-eng-GB/cover_1440_1200.jpg" />
            
            </div>

            <div id="FCon2" class="FCon" >
<div id ="MFcontainer" >
<p class="titFC">Men's Fashion</p> 

<div class="actionBar"> 
<span id="filter2"> <i class="material-icons">menu</i> 
Filter 
<i class="material-icons">unfold_more</i>
</span>
<span id="sort2"> 
Sort 
<i class="material-icons">unfold_more</i>
</span>
 </div>

 </div> 
 
 </div>
            `;
    };
    fashion_selections()

}


main_page_fashion();



// RENDER PRODUCTS LIST 


const FashionProductListW = [
    {
        name: "Marlène Jacket",
        image: "./images/section 1/women/jackets/6.jpg",
        price: "$300",
        color: "Navy Blue Bonded",
    },
    {
        name: "Marinière Marlène Jacket",
        image: "./images/section 1/women/jackets/5.jpg",
        price: "$300",
        gender: "FEMAL",
        color: "Navy Blue and Ecru",
    },
    {
        name: "Marlène Belted Jacket",
        image: "./images/section 1/women/jackets/4.jpg",
        price: "$300",
        gender: "FEMAL",
        color: "Blue and White Striped",
    },
    {
        name: "Marlène Belted Jacket",
        image: "./images/section 1/women/jackets/3.jpg",
        price: "$300",
        gender: "FEMAL",
        color: "White Wool and Silk",
    },
    {
        name: "Macrocannage Bar Jacket",
        image: "./images/section 1/women/jackets/2.jpg",
        price: "$350",
        gender: "FEMAL",
        color: "Black Quilted Technical Taffeta",
    },
    {
        name: "Macrocannage Bar Jacket",
        image: "./images/section 1/women/jackets/1.jpg",
        price: "$350",
        gender: "FEMAL",
        color: "Beige Quilted Technical Taffeta",
    },
    {
        name: "Mid-Length Dress",
        image: "./images/section 1/women/dresses/5.jpg",
        price: "$400",
        gender: "FEMAL",
        color: "Black Technical Taffeta",
    },
    {
        name: "Short Hooded Dress",
        image: "./images/section 1/women/dresses/4.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "Gold-Tone Technical Taffeta",
    },
    {
        name: "Short Hooded Dress",
        image: "./images/section 1/women/dresses/3.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "Navy Blue Technical Taffeta",
    },
    {
        name: "Mid-Length Dress",
        image: "./images/section 1/women/dresses/2.jpg",
        price: "$400",
        gender: "FEMAL",
        color: "White and Black Under The Sea",
    },
    {
        name: "Long Dress",
        image: "./images/section 1/women/dresses/1.jpg",
        price: "$350",
        gender: "FEMAL",
        color: "Navy Blue Cotton with Toile de",
    },
    {
        name: "Sleeveless Belted Coat",
        image: "./images/section 1/women/coats/6.jpg",
        price: "$300",
        gender: "FEMAL",
        color: "Navy Blue Double-Sided",
    },
    {
        name: "Cropped Coat with Hood and Belt",
        image: "./images/section 1/women/coats/5.jpg",
        price: "$300",
        gender: "FEMAL",
        color: "Navy Blue Double-Sided Wool",
    },
    {
        name: "Peacoat",
        image: "./images/section 1/women/coats/4.jpg",
        price: "$350",
        gender: "FEMAL",
        color: "White Double-Sided Cashmere",
    },
    {
        name: "Hooded Jacket Macrocannage Lining",
        image: "./images/section 1/women/coats/3.jpg",
        price: "$350",
        gender: "FEMAL",
        color: "Gray Technical Cotton Drill",
    },
    {
        name: "Macrocannage Peacot",
        image: "./images/section 1/women/coats/2.jpg",
        price: "$300",
        gender: "FEMAL",
        color: "Black Quilted Technical Taffeta",
    },
    {
        name: "Peacoat",
        image: "./images/section 1/women/coats/1.jpg",
        price: "$350",
        gender: "FEMAL",
        color: "Navy Blue Double-Sided Wool",
    },

]


const FashionProductListM = [
    {
        name: "Selvedge MKII Blouson",
        image: "./images/section 1/men/outerwear/1.jpg",
        price: "$250",
        gender: "FEMAL",
        color: "Blue Raw Cotton Denim",
    },
    {
        name: "Double-Breasted Coat",
        image: "./images/section 1/men/outerwear/2.jpg",
        price: "$550",
        gender: "FEMAL",
        color: "Multicolor Cotton Jacquard",
    },
    {
        name: "Blouson with Removable Collar",
        image: "./images/section 1/men/outerwear/3.jpg",
        price: "$390",
        gender: "FEMAL",
        color: "Black Cashmere Cloth",
    },
    {
        name: "Fabric Overlay Coat",
        image: "./images/section 1/men/outerwear/4.jpg",
        price: "$450",
        gender: "FEMAL",
        color: "Blue Wool and Mohair Canvas",
    },
    {
        name: "Hybrid Bomber Jacket",
        image: "./images/section 1/men/outerwear/5.jpg",
        price: "$300",
        gender: "FEMAL",
        color: "Black Technical Twill",
    },
    {
        name: "Reversible Blouson",
        image: "./images/section 1/men/outerwear/6.jpg",
        price: "$390",
        gender: "FEMAL",
        color: "Gray Technical Wool Jacquard",
    },
    {
        name: "Bomber Jacket with Sheepskin Collar",
        image: "./images/section 1/men/outerwear/7.jpg",
        price: "$300",
        gender: "FEMAL",
        color: "Gray Suede Lambskin",
    },
    {
        name: "Knit Hybrid Jacket",
        image: "./images/section 1/men/outerwear/8.jpg",
        price: "$350",
        gender: "FEMAL",
        color: "Cream Technical Wool",
    },
    {
        name: "Classic Coat",
        image: "./images/section 1/men/outerwear/9.jpg",
        price: "$500",
        gender: "FEMAL",
        color: "Black Cashmere Cloth",
    },
    {
        name: "Peacoat",
        image: "./images/section 1/men/outerwear/10.jpg",
        price: "$400",
        gender: "FEMAL",
        color: "Navy Blue Cashmere Cloth",
    },
    {
        name: "Oblique Jacket",
        image: "./images/section 1/men/jackets/1.jpg",
        price: "$300",
        gender: "FEMAL",
        color: "Black Wool Drill",
    },
    {
        name: "Double-Breasted Jacket with Button Placket",
        image: "./images/section 1/men/jackets/2.jpg",
        price: "$500",
        gender: "FEMAL",
        color: "Deep Blue Wool Ottoman",
    },
    {
        name: "Officer Collar Jacket",
        image: "./images/section 1/men/jackets/3.jpg",
        price: "$300",
        gender: "FEMAL",
        color: "Ecru Vintage Wool Twill",
    },
    {
        name: "Sleeveless Jacket",
        image: "./images/section 1/men/jackets/4.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "Navy Blue Vintage Wool Twill",
    },

]



function render_section1_Wproduct() {
    for (let product of FashionProductListW) {
        document.getElementById("WFcontainer").innerHTML += `
            <div class="product__item">
                <div class="product__image">
                    <a><img src="` + product.image + `" alt=""></a>
                </div>
                <div class="product__info">
                    <div class="product__name">
                        <a>`+ product.name + `</a>
                    </div>
                    <div class="product__color">` + product.color + `</div>
                    <div class="product__price">` + product.price + `</div>
                    
                </div>
                <div class ="btnC"><button id="btn__cart" onclick="add_to_cart()">ADD TO CART</button></div>
            </div>
        `
    }
}
render_section1_Wproduct()

function render_section1_Mproduct() {
    for (let product of FashionProductListM) {
        document.getElementById("MFcontainer").innerHTML += `
            <div class="product__item">
                <div class="product__image">
                    <a><img src="` + product.image + `" alt=""></a>
                </div>
                <div class="product__info">
                    <div class="product__name">
                        <a>`+ product.name + `</a>
                    </div>
                    <div class="product__color">` + product.color + `</div>
                    <div class="product__price">` + product.price + `</div>
                    
                </div>
                <div class ="btnC"><button id="btn__cart" onclick="add_to_cart()">ADD TO CART</button></div>
            </div>
        `
    }
}
render_section1_Mproduct()


// RUN ONCLICK FUNCTIONS 
document.getElementById("Ab").onclick = function () {
    alert("We are group 6 at C4EJS126 of MindX.");

}

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
}

document.getElementById("menu2").onclick = function () {
    document.getElementById("womenFashion").style.display = "none";
    document.getElementById("menFashion").style.display = "none";
    document.getElementById("FCon1").style.display = "none";
    document.getElementById("FCon2").style.display = "flex";
}

document.getElementById("womenFashion").onclick = function () {
    document.getElementById("womenFashion").style.display = "none";
    document.getElementById("menFashion").style.display = "none";
    document.getElementById("FCon1").style.display = "flex";
    document.getElementById("FCon2").style.display = "none";
}

document.getElementById("menFashion").onclick = function () {
    document.getElementById("womenFashion").style.display = "none";
    document.getElementById("menFashion").style.display = "none";
    document.getElementById("FCon1").style.display = "none";
    document.getElementById("FCon2").style.display = "flex";
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






// DROP BAR HOVER 
// co the viet truc tiep bang html
// ko can chay functions


const dropBar = document.getElementById("filter")
function drop1() {
    dropBar.innerHTML += `
 <span class ="drop_content1"> </span>
    `
}
drop1()



const dropContent1 = document.querySelector(".drop_content1")

function dropdown1() {

    dropContent1.innerHTML += `
               
               <button class="dropMenu1"  href="#"> Coats </button>
              
               <button class="dropMenu1"  href="#"> Dresses </button>

               <button class="dropMenu1"  href="#"> Jackets </button>
              
               `

}
dropdown1()



const dropBar2 = document.getElementById("filter2")
function drop2() {
    dropBar2.innerHTML += `
 <span class ="drop_content2"> </span>
    `
}
drop2()



const dropContent2 = document.querySelector(".drop_content2")

function dropdown2() {

    dropContent2.innerHTML += `
               
              
              
               <button class="dropMenu2"  href="#"> Outerwear </button>

               <button class="dropMenu2"  href="#"> Jackets </button>
              
               `

}
dropdown2()




const dropBar3 = document.getElementById("sort")
function drop3() {
    dropBar3.innerHTML += `
 <span class ="drop_content3"> </span>
    `
}
drop3()



const dropContent3 = document.querySelector(".drop_content3")

function dropdown3() {

    dropContent3.innerHTML += `
               
              
              
               <button class="dropMenu3"  href="#"> Highest Price </button>

               <button class="dropMenu3"  href="#"> Best Price </button>
              
               `

}
dropdown3()



const dropBar4 = document.getElementById("sort2")
function drop4() {
    dropBar4.innerHTML += `
 <span class ="drop_content4"> </span>
    `
}
drop4()



const dropContent4= document.querySelector(".drop_content4")

function dropdown4() {

    dropContent4.innerHTML += `
               
              
              
               <button class="dropMenu4"  href="#"> Highest Price </button>

               <button class="dropMenu4"  href="#"> Best Price </button>
              
               `

}
dropdown4()





// RENDER FOOTER
const mainFooter = document.querySelector('#mainFooter');
function render_footer() {
    mainFooter.innerHTML += `
    <div id="footer"></div>
    `;
    const contactContainer = document.querySelector('#footer');
    function render_contact_container() {
        contactContainer.innerHTML += `
        <div class="contact__container">CONTACT INFORMATION DIV</div>
        <div id="copyrightInfo">Copyright | MindX | C4EJS126</div>
        `;
    };
    render_contact_container();
};
render_footer();
