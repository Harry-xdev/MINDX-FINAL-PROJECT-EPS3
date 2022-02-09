// RENDER HEADER
const mainPage = document.querySelector('#mainPage');
function render_header() {
    mainPage.innerHTML += `
    <div id="header"></div>
    <a href="#"><button onclick="topFunction()" id="myBtn" title="Go to top">Top</button></a>
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
        <a id="menu" class="native" href="#img1">FASHION</a>
        <a id="menu" class="native" href="#">WATCHES</a>
        <a id="menu" class="native" href="#">SHOES</a>
        <a id="menu" class="native" href="#section4__container1">BAGS</a>
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
                   
                   <button id="dropMenu" onclick="location.href='./Fashion.html';" >FASHION</button>
                   <button id="dropMenu">WATCHES</button>
                   <button id="dropMenu" >SHOES</button>
                   <button id="dropMenu" >BAGS</button>
                   `
                  
                }
                dropdown()
               
                 
               
                   
              
          

        const userContainer = document.querySelector("#user__container")
        function user(){
        userContainer.innerHTML += `
        <span id = "Ab" class="info"> About Us </span>
        <span id = "log" class="info" type="button" onclick="location.href='./login.html'"> Login</span>
        <span id = "register" class="info" onclick="location.href='./login.html'"> Register </span>

        `;
       
        
    };
    user();
   
};
render_header();

// RENDER SIGNUP FORM

function render_signup_form () {
  mainPage.innerHTML += `
  <div class= "img_header" > </div>
  <div class="login__form">
    <form name="loginForm" action="index.html" method="#" id="signUp">
      <div class="caption">
        REGISTER
      </div>
    
      <div class="container">
        <label for="uname"><b>Username</b></label>
        <input id="user__name" type="text" placeholder="Enter Username" name="uname" required>
    
        <label for="psw"><b>Password</b></label>
        <input id="password" type="password" placeholder="Enter Password" name="psw" required>

        <label for="psw"><b>Confirm Password</b></label>
        <input id="password" type="password" placeholder="Enter Password" name="psw" required>
    
        <button type="submit" onclick="return validate1()">Submit</button>
        <label>
          <input type="checkbox" checked="checked" name="remember"> Remember me
        </label>
        <p><div><i>Already have your account?
        <a> <u>Log in</u>.</a>
        </i></div></p>
      </div>
    
      <div class="container">
      <a href = "./index.html"> 
      <button type="button" class="cancelbtn">Cancel</button> 
      </a>
        <span class="psw"><i>  <a href="#"></a></i></span>
      </div>
    </form>
  </div>
  `
}
render_signup_form();

// RENDER LOGIN FORM
function render_login_form () {
  mainPage.innerHTML += `
  <div class= "img_header" > </div>
  <div class="login__form">
    <form name="loginForm" action="index.html" method="#" id = "logIn" >
      <div class="caption">
        LOG IN
      </div>
    
      <div class="container">
        <label for="uname"><b>Username</b></label>
        <input id="user__name" type="text" placeholder="Enter Username" name="uname" required>
    
        <label for="psw"><b>Password</b></label>
        <input id="password" type="password" placeholder="Enter Password" name="psw" required>
    
        <button type="submit" onclick="return validate2()">Submit</button>
        <label>
          <input type="checkbox" checked="checked" name="remember"> Remember me
        </label>
        <p><div><i>Haven't got an account yet? 
        <a> <u>Sign Up</u>.</a>
        </i></div></p>
      </div>
    
      <div class="container">
        <a href = "./index.html"> 
        <button type="button" class="cancelbtn">Cancel</button> 
        </a>
        <span class="psw"><i> Forgot <a href="#">password?</a></i></span>
      </div>
    </form>
  </div>
  `
}
render_login_form();



// CHECK USER & PASSWORD FUNCTION

function validate1() {
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


function validate2() {
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





