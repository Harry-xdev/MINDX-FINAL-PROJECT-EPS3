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
                   
                   <button id="dropMenu" href="#">Women's Fashion</button>
                  
                   <button id="dropMenu" href="#">Men's Fashion</button>
                  
                   `
                  
                }
                dropdown()
               
                 
               
                   
              
          

        const userContainer = document.querySelector("#user__container")
        function user(){
        userContainer.innerHTML += `
        <span id = "Ab" class="info"> About Us </span>
        <span id = "log" class="info" type="button" onclick="location.href='./login.html'"> Login</span>
        <span id = "register" class="info"> Register </span>

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
            <video  controls autoplay loop="" playsinline=""> <source
            src = "https://www.dior.com/couture/var/dior/storage/original/video/0fdbdfb57a18fb353efd235ba5df5de1.mp4"> 
            poster="https://www.dior.com/couture/var/dior/storage/images/30536758/25-eng-GB/fashion-show-banner2_1440_1200.jpg"</video>
            `
        };
        fashion_header() 
            

            
            mainPageFashion.innerHTML += `<div id="fashionSelections"> </div>`
            const fashionSelections = document.querySelector('#fashionSelections');

            function fashion_selections() {
                fashionSelections.innerHTML +=`
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
 </div> </div>


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
 </div> </div>
            `;
            };
            fashion_selections()
       
}


main_page_fashion();


const FashionProductListW = [
    {
        name: "123",
        image: "./images/section 1/women/jackets/6.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
    {
        name: "123",
        image: "./images/section 1/women/jackets/5.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
    {
        name: "123",
        image: "./images/section 1/women/jackets/4.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
     {
        name: "123",
        image: "./images/section 1/women/jackets/3.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
     {
        name: "123",
        image: "./images/section 1/women/jackets/2.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
     {
        name: "123",
        image: "./images/section 1/women/jackets/1.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
    {
        name: "123",
        image: "./images/section 1/women/dresses/5.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
    {
        name: "123",
        image: "./images/section 1/women/dresses/4.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
    {
        name: "123",
        image: "./images/section 1/women/dresses/3.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
    {
        name: "123",
        image: "./images/section 1/women/dresses/2.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
    {
        name: "123",
        image: "./images/section 1/women/dresses/1.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
    {
        name: "123",
        image: "./images/section 1/women/coats/6.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
    {
        name: "123",
        image: "./images/section 1/women/coats/5.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
    {
        name: "123",
        image: "./images/section 1/women/coats/4.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
    {
        name: "123",
        image: "./images/section 1/women/coats/3.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
    {
        name: "123",
        image: "./images/section 1/women/coats/2.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
    {
        name: "123",
        image: "./images/section 1/women/coats/1.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },

]


const FashionProductListM = [
    {
        name: "123",
        image: "./images/section 1/men/outerwear/1.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
    {
        name: "123",
        image: "./images/section 1/men/outerwear/2.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
    {
        name: "123",
        image: "./images/section 1/men/outerwear/3.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
    {
        name: "123",
        image: "./images/section 1/men/outerwear/4.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
    {
        name: "123",
        image: "./images/section 1/men/outerwear/5.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
    {
        name: "123",
        image: "./images/section 1/men/outerwear/6.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
    {
        name: "123",
        image: "./images/section 1/men/outerwear/7.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
    {
        name: "123",
        image: "./images/section 1/men/outerwear/8.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
    {
        name: "123",
        image: "./images/section 1/men/outerwear/9.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
    {
        name: "123",
        image: "./images/section 1/men/outerwear/10.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
    {
        name: "123",
        image: "./images/section 1/men/jackets/1.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
    {
        name: "123",
        image: "./images/section 1/men/jackets/2.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
    {
        name: "123",
        image: "./images/section 1/men/jackets/3.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },
    {
        name: "123",
        image: "./images/section 1/men/jackets/4.jpg",
        price: "$200",
        gender: "FEMAL",
        color: "WHITE",
    },

]



function render_section1_Wproduct () {
    for (let product of FashionProductListW) {
        document.getElementById("WFcontainer").innerHTML += `
            <div class="product__item">
                <div class="product__image">
                    <a><img src="` + product.image + `" alt=""></a>
                </div>
                <div class="product__info">
                    <div class="product__name">
                        <a href="#">`+ product.name +`</a>
                    </div>
                    <div class="product__price">` + product.price + `</div>
                    <div class="product__color">` + product.color + `</div>
                </div>
                <div class ="btnC"><button id="btn__cart" onclick="add_to_cart()">ADD TO CART</button></div>
            </div>
        `
    }
}
render_section1_Wproduct ()

function render_section1_Mproduct () {
    for (let product of FashionProductListM) {
        document.getElementById("MFcontainer").innerHTML += `
            <div class="product__item">
                <div class="product__image">
                    <a><img src="` + product.image + `" alt=""></a>
                </div>
                <div class="product__info">
                    <div class="product__name">
                        <a href="#">`+ product.name +`</a>
                    </div>
                    <div class="product__price">` + product.price + `</div>
                    <div class="product__color">` + product.color + `</div>
                </div>
                <div class ="btnC"><button id="btn__cart" onclick="add_to_cart()">ADD TO CART</button></div>
            </div>
        `
    }
}
render_section1_Mproduct ()


 // RUN ONCLICK FUNCTIONS 
 document.getElementById("Ab").onclick = function() {
    alert("We are group 6 at C4EJS126 of MindX.");
    
}

const mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
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

document.getElementById("menu0").onclick = function() {
    document.getElementById("womenFashion").style.display = "flex";
    document.getElementById("menFashion").style.display = "flex";
    document.getElementById("FCon1").style.display = "none";
    document.getElementById("FCon2").style.display = "none";
}

document.getElementById("menu1").onclick = function() {
    document.getElementById("womenFashion").style.display = "none";
    document.getElementById("menFashion").style.display = "none";
    document.getElementById("FCon1").style.display = "flex";
    document.getElementById("FCon2").style.display = "none";
}

document.getElementById("menu2").onclick = function() {
    document.getElementById("womenFashion").style.display = "none";
    document.getElementById("menFashion").style.display = "none";
    document.getElementById("FCon1").style.display = "none";
    document.getElementById("FCon2").style.display = "flex";
}

document.getElementById("womenFashion").onclick = function() {
    document.getElementById("womenFashion").style.display = "none";
    document.getElementById("menFashion").style.display = "none";
    document.getElementById("FCon1").style.display = "flex";
    document.getElementById("FCon2").style.display = "none";
}

document.getElementById("menFashion").onclick = function() {
    document.getElementById("womenFashion").style.display = "none";
    document.getElementById("menFashion").style.display = "none";
    document.getElementById("FCon1").style.display = "none";
    document.getElementById("FCon2").style.display = "flex";
}



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
