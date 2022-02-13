// RENDER HEADER
const mainPage = document.querySelector('#mainPage');
 mainPage.innerHTML += `
    <div id="header"></div>
    <a href="#"><button onclick="topFunction()" id="myBtn" title="Go to top">Top</button></a> `;
// RENDER HEADER NATIVE BUTTON - USER LOGIN
 const headerNative = document.querySelector('#header');
     headerNative.innerHTML += `
        <a id="logo__main" class="" 
        onclick="location.href='./index.html';"><i>nYe</i></a>
        <a id="logo__main2" class="" 
        onclick="location.href='./index.html';"><i>nYe</i></a>
        <a class="native" >FORM</a>
        <a id="cata" class="native" href="#">FORM</a>
        <span id="user__container" href="#"> 
        <span id = "log" class="info" type="button" onclick="location.href='./login.html'"> Login</span>
        <span id = "register" class="info" onclick="location.href='./login.html'"> Register </span></span> `
// RENDER SIGNUP FORM
  mainPage.innerHTML += `
  <div class= "img_header" > </div>
  <div class="signup__form" id="signUp">
    <form name="loginForm" action="login.html" method="#" onsubmit="sign_up()" >
      <div class="caption">
        REGISTER
      </div>
      <div class="container">
        <label for="uname"><b>Username</b></label>
        <input id="user__name2" type="text" placeholder="Enter Username" name="uname" required>
    
        <label for="psw"><b>Password</b></label>
        <input id="password2" type="password" placeholder="Enter Password" name="psw" required>

        <label for="psw"><b>Confirm Password</b></label>
        <input id="password3" type="password" placeholder="Enter Password" name="psw" required>
    
        <button type="submit" onclick="return validate2()">Submit</button>
        <div><i>Already have your account?
        <a id="goToLogIn" > <u>Log in</u>.</a>
        </i></div>
      </div>
    
      <div class="container">
      <a href = "./index.html"> 
      <button type="button" class="cancelbtn">Cancel</button> 
      </a>
        <span class="psw"><i>  <a href="#"></a></i></span>
      </div>
    </form>
  </div> `
// RENDER LOGIN FORM
  mainPage.innerHTML += `
  <div class= "img_header" > </div>
  <div class="login__form" id = "logIn">
    <form name="loginForm" action="index.html" method="#" onsubmit="">
      <div class="caption">
        LOG IN
      </div>
    
      <div class="container">
        <label for="uname"><b>Username</b></label>
        <input id="user__name" type="text" placeholder="Enter Username" name="uname" required>
    
        <label for="psw"><b>Password</b></label>
        <input id="password" type="password" placeholder="Enter Password" name="psw" required>
        <label>
          <input type="checkbox" checked="checked" name="remember"> Remember me
        </label>
        <button type="submit" onclick="return validate1()">Submit</button>
        <div><i>Haven't got an account yet? 
        <a id="goToSignUp"> <u>Register</u>.</a>
        </i></div>
      </div>
    
      <div class="container">
        <a href = "./index.html">
        <span class="psw"><i><a href="#">Forgot password?</a></i></span>
      </div>
    </form>
  </div>`
mainPage.innerHTML += ` <img src="./images/bg-login.jpg" id="bgLogin"/>`
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
  } else if (sign_in() == true) {
    alert(`Welcome to the fashion world!`)
    return true;
  } else {
    alert(`Unknown!`);
    return false;
  }
}

function validate2() {
  let userEmail2 = document.getElementById("user__name2").value;
  let userPass2 = document.getElementById("password2").value;
  let userPass3 = document.getElementById("password3").value;

  if (userEmail2 == "") {
      alert(`Email is empty!`);
      return false;
  }
  if (userPass2 =="") {
      alert(`Password is empty!`);
      return false;
  } else if (userPass2.length < 8) {
      alert(`Password must has aleast 8 characters!`);
      return false;
  } else if (userPass2 != userPass3) {
      alert(`Password are not match!`);
      return false;
  } else {
      alert(`You are registered!`);
      return true;
  }
}

// FUNCTION SIGNUP WITH LOCAL STORAGE
function sign_up() {
  let userEmail2 = document.getElementById("user__name2").value;
  let userPass2 = document.getElementById("password2").value;

  localStorage.setItem(userEmail2, userPass2);
}


function sign_in() {
  let userEmail2 = document.getElementById("user__name").value;
  let userPass2 = document.getElementById("password").value;

  if (localStorage.getItem(userEmail2) == userPass2) {
    alert(`Sign in successed!`);
    return true;
  } else {
    alert(`Your account have not registered!`)
    return false;
  }
}
// RUN ONCLICK FUNCTIONS

document.getElementById("log").onclick = function() {
  document.getElementById("logIn").style.display = "block";
  document.getElementById("signUp").style.display = "none";
}
document.getElementById("register").onclick = function() {
  document.getElementById("logIn").style.display = "none";
  document.getElementById("signUp").style.display = "block";
}

document.getElementById("goToSignUp").onclick = function() {
  document.getElementById("logIn").style.display = "none";
  document.getElementById("signUp").style.display = "block";
}
document.getElementById("goToLogIn").onclick = function() {
  document.getElementById("logIn").style.display = "block";
  document.getElementById("signUp").style.display = "none";
}
// RENDER FOOTER
const mainFooter = document.querySelector('#mainFooter');
    mainFooter.innerHTML += `
    <div id="footer"></div> `;
    const contactContainer = document.querySelector('#footer');
        contactContainer.innerHTML += `
        <div class="contact__container">CONTACT INFORMATION DIV</div>
        <div id="copyrightInfo">Copyright | MindX | C4EJS126</div> `;
  





