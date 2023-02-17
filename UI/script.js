// $(document).ready(function () {
//     $('#menu').click(function () {
//       $(this).toggleClass('fa-times');
//       $('header').toggleClass('toggle');
//     });
//     $(window).on('scroll load', function () {
//       $('#menu').removeClass('fa-times');
//       $('header').removeClass('toggle');
    
//     });
// });
// =========






function validate(){
  if (user.value == 0 || user.value.length < 6) {
    document.getElementById('error').innerHTML = 'Please fill out this form before login!';
    return false;
  } else if (pass.value == 0 || pass.value.length < 8){
    document.getElementById('error').innerHTML = 'Please fill out this form before login!';
    return false;
  } else {
  alert("Successfully logged in");    
   window.open("dashboard.html");
      }
    }


// let logins = [];
// const addLogin = (ev) => {
//   ev.preventDefault();
//   let login = {
//     username: document.getElementById('user').value,
//     password: document.getElementById('pass').value
//   }
//   logins.push(local);
//   // document.forms[0].reset();
//   document.querySelector('form').reset();
//   console.warn('added' , {logins} );
//   let pre = document.querySelector('#msg pre');
//   pre.textContent = '\n' + JSON.stringify(logins, '\t', 2);
// }
// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('btns').addEventListener('click', addLogin);
// })















    let local = localStorage;

    setData = () => {
      let data = {
        username: document.getElementById('user').value,
        password: document.getElementById('pass').value
      }
      
      local.setItem('user',   JSON.stringify(data));
       }




// let myObj = {
//   name: "Joseph",
//   age: 80
// };

// let myObj_serislized = JSON.stringify(myObj);
// console.log(myObj_serislized);

// localStorage.setItem("myObj", myObj_serislized);
// let myObj_deserislized = JSON.parse(localStorage.getItem("myObj"));
// console.log(myObj_deserislized);

















    // document.getElementById("signupForm").addEventListener("submit", (e) => {
    //   e.preventDefault();
    //   const username = document.getElementById("username").value;
    //   const email = document.getElementById("email").value;
    //   const password = document.getElementById("password").value;
    //   const cpassword = document.getElementById("cpassword").value;
    //   if (password !== cpassword) {
    //     alert("two different password");
    //     return false
    //   }
    // })




















    // -------
    // const username = document.getElementById("username");
    // const email = document.getElementById("email");
    // const password = document.getElementById("password");
    // const form = document.getElementById("signupForm");
    // const confpass = document.getElementById("cpassword");
    //  form.addEventListener('submit', (e) => {
    //   let messages = []
    //   if(username.value === "" || username == null) {
    //     messages.push('Username is required');
    //   }
    //  })
