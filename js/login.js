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
        <span class="info"> Register </span>

        `;
       
    };
    user();
   
};
render_header();

// RENDER LOGIN FORM
function render_login_form () {
  mainPage.innerHTML += `
  <div class= "img_header" > </div>
  <div class="login__form">
    <form name="loginForm" action="index.html" method="#">
      <div class="caption">
        LOGIN
      </div>
    
      <div class="container">
        <label for="uname"><b>Username</b></label>
        <input id="user__name" type="text" placeholder="Enter Username" name="uname" required>
    
        <label for="psw"><b>Password</b></label>
        <input id="password" type="password" placeholder="Enter Password" name="psw" required>
    
        <button type="submit" onclick="return validate()">Submit</button>
        <label>
          <input type="checkbox" checked="checked" name="remember"> Remember me
        </label>
      </div>
    
      <div class="container">
        <button type="button" class="cancelbtn">Cancel</button>
        <span class="psw">Forgot <a href="#">password?</a></span>
      </div>
    </form>
  </div>
  `
}
render_login_form();

// CHECK USER & PASSWORD FUNCTION

function validate() {
  let userEmail = document.getElementById("user__name").value;
  let userPass = document.getElementById("password").value;

  if (userEmail == "") {
      alert(`Email is empty!`);
      return false;
  }
  if (userPass =="") {
      alert(`Password is empty!`);
      return false;
  } else if (userPass.length < 8) {
      alert(`Password must has aleast 8 characters!`);
      return false;        
  }
  if (userEmail == "anh@gmail.com" && userPass == "admin123") {
      alert(`Welcome!`);
      return true;
  } else {
      alert(`Unknown!`);
      return false;
  }
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





