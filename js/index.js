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
        TEAM 1 - GROUP 6</a>
        <a id="logo__main2" class="" 
        onclick="location.href='./index.html';"
        >
         GROUP 6</a>
        <a id="menu" class="native" href="#">FASHION</a>
        <a id="menu" class="native" href="#">WATCHES</a>
        <a id="menu" class="native" href="#">SHOES</a>
        <a id="menu" class="native" href="#">BAGS</a>
        <a id="cata" class="native" href="#">CATALOG</a>
        <span id="user__container" href="#"> </span>

        `
    };
    render_header_native();
        const userContainer = document.querySelector("#user__container")
        function user(){
        userContainer.innerHTML += `
        <span class="info"> About Us </span>
        <span id="log" class="info"> Login</span>
        <span class="info"> Register </span>

        `;
       
    };
    user();
   
};
render_header();

// RENDER MAIN SECTION
function render_main_section () {
    mainPage.innerHTML += `
   
    <div class= "img_header" > </div>
    
    <div id="section__container"></div>

    `;

  const imgHeader = document.querySelector (".img_header")
  function video1() {
  imgHeader.innerHTML += ` 
  <img class="imgHead" src="https://images.unsplash.com/photo-1468818519844-64bc429824de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"/>
  `
  };
  video1();

  

    // RENDER SECTION ITEMS

    // SECTION 1: THỦY TIÊN
    const sections = document.querySelector('#section__container');
    function render_section_1() {
        sections.innerHTML += `
        <section id="" class="section__1"></section>
        <div class ="space"> </div>
         `;
      const section1 = document.querySelector(".section__1")
      function sec1() {
      section1.innerHTML += `
     
      <img id ="img1" src = "https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_1280/FSH-1641215403491-slideshowdesktop3.jpg"/>
         <h1>Fashion</h1>
        <div>
        <button  type="button"  onclick="location.href='./Fashion.html';"> Find out more  </button>
        </div>
      `}; 
      sec1();
    };
    render_section_1();




    // SECTION 2: TRUNG
    const section2 = document.querySelector('#section__container');
    function render_section_2() {
        section2.innerHTML += `
        <section id="" class="section__2">Section 2</section>
        `;
    };
    // render_section_2();

    // SECTION 3: ĐÔNG
    const section3 = document.querySelector('#section__container');
    function render_section_3() {
        section3.innerHTML += `
        <section id="" class="section__3">Section 3</section>
        `;
    };
    // render_section_3();

    // SECTION 4: TUẤN ANH
    const section4 = document.querySelector('#section__container');
    function render_section_4() {
        section4.innerHTML += `
        <section id="" class="section__4"></section>
        `
    }
    render_section_4();

    // RENDER SECTION 4 ITEMS
    const section4Item1 = document.querySelector('.section__4');

    // SECTION 4 CAPTION
    function render_section4_cap1() {
        section4Item1.innerHTML += `
        <div id="" class="section4__cap">MEN'S BAGS</div>
        `
    }
    render_section4_cap1();

    // SECTION 4 CONTAINER 1
    function section4__container1() {
        section4Item1.innerHTML += `
        <div id="section4__container1" class="section4__container"></div>
        `
    }
    section4__container1();

    function render_section4_cap2() {
        section4Item1.innerHTML += `
        <div id="" class="section4__cap">WOMEN'S BAGS</div>
        `
    }
    render_section4_cap2();

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
            name: "KENZO Sport backpack with strap",
            url: "#",
            image: "./images/section 4/KENZO Sport backpack with strap.jpg",
            image2: "./images/section 4/KENZO Sport backpack with strap 2.jpg",
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

    function render_section4_product () {
        for (let product of handbagProductListM) {
            document.getElementById("section4__container1").innerHTML += `
                <div class="product__item">
                    <div class="product__image">
                        <a href="#"><img class="sub__images" onmouseover="on_mouse_over()" onmouseout="on_mouse_out()" src="` + product.image + `" alt=""></a>
                    </div>
                    <div class="product__info">
                        <div class="product__name">
                            <a href="#">`+ product.name +`</a>
                        </div>
                        <div class="product__price">` + product.price + `</div>
                        <div class="product__color">` + product.color + `</div>
                    </div>
                </div>
            `
        }
    }
    render_section4_product();

    // let product = 
    // function on_mouse_over() {
    //     document.querySelector(".sub__images").innerHTML +=`
    //         <div class="product__image">
    //             <a href="#"><img class="sub__images" onmouseover="on_mouse_over()" onmouseout="on_mouse_out()" src="` + product.image2 + `" alt=""></a>
    //         </div>
    //     `
    // }
    // on_mouse_over();



    // SECTION 4 CONTAINER 2    
    function section4__container2() {
        section4Item1.innerHTML += `
        <div id="section4__container2" class="section4__container"></div>
        `
    }
    section4__container2();

    function render_section4_product_2 () {
        for (let product2 of handbagProductListW) {
            document.getElementById("section4__container2").innerHTML += `
                <div class="product__item">
                    <div class="product__image">
                        <a href="#"><img src="` + product2.image + `" alt=""></a>
                    </div>
                    <div class="product__info">
                        <div class="product__name">
                            <a href="#">`+ product2.name +`</a>
                        </div>
                        <div class="product__price">` + product2.price + `</div>
                        <div class="product__color">` + product2.color + `</div>
                    </div>
                </div>
            `
        }
    }
    render_section4_product_2();

}
render_main_section();

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


