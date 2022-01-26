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
    render_section_2();

    // SECTION 3: ĐÔNG
    const section3 = document.querySelector('#section__container');
    function render_section_3() {
        section3.innerHTML += `
        <section id="" class="section__3">Section 3</section>
        `;
    };
    render_section_3();

    // SECTION 4: TUẤN ANH
    const section4 = document.querySelector('#section__container');
    function render_section_4() {
        section4.innerHTML += `
        <section id="" class="section__4"></section>
        `;
    };
    render_section_4();

    // RENDER SECTION 4 ITEMS
    const section4Item1 = document.querySelector('.section__4');
    function section4__container1() {
        section4Item1.innerHTML += `
        <div id="section4__container1" class="">Handbag</div>
        `;
    };
    section4__container1();

    const section41item = document.querySelector('#section4__container1');
    function section4__container1_item() {
        section41item.innerHTML += `
        <div id="" class="handbag__product">Products</div>
        `;
    };
    section4__container1_item();

    // CREATING PRODUCT ARRAY OBJECTS
    const handbagProductList = [
        {
            name: "KAMPUS TIGER BACKPACK",
            price: "$265",
            gender: "MALE",
            color: "BLACK",
        },
        {
            name: "KENZO SPORT BELT BAG",
            price: "$275",
            gender: "MALE",
            color: "BLACK",
        },
        {
            name: "KENZO Sport backpack with strap",
            price: "$295",
            gender: "MALE",
            color: "WHITE",
        },
        {
            name: "KENZO Sport tote bag",
            price: "$340",
            gender: "MALE",
            color: "BLACK",
        },
    ];


    
};
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


