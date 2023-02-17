
    // function signupForm() {
    //     //alert("alert");
    //     var name = document.signup_form.name;
    //     var email = document.signup_form.email;
    //     var password = document.signup_form.password;
    //     if (name.value == "") {
    //       name.nextElementSibling.style.display = "block";
    //       name.style.border = "1px solid #f00";
    //       return false;
    //     } else {
    //       name.nextElementSibling.style.display = "none";
    //       name.style.border = "1px solid transparent";
    //     }
    //     if (
    //       !email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ||
    //       email.value == ""
    //     ) {
    //       email.nextElementSibling.style.display = "block";
    //       email.style.border = "1px solid #f00";
    //       return false;
    //     } else {
    //       email.nextElementSibling.style.display = "none";
    //       email.style.border = "1px solid transparent";
    //     }
    //     if (password.value == "") {
    //       password.nextElementSibling.style.display = "block";
    //       password.style.border = "1px solid #f00";
    //       return false;
    //     } else {
    //       message.nextElementSibling.style.display = "none";
    //       message.style.border = "1px solid transparent";
    //     } 
    //   }
    function signupForm (e){
      event.preventDefault();
      var fname = document.getElementById('fname').value;
      var email = document.getElementById('email').value;
      var password = document.getElementById('pwd').value;
      var users = JSON.parse(localStorage.getItem("users") || "[]");
  
      var formData = {
          fname: fname,
          email: email,
          pwd : password,
      };
      users.push(formData);
      localStorage.setItem("users", JSON.stringify(users));
      alert('well done');
  }