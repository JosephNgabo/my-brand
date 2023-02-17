// function validate(e) {
//     event.preventDefault();
//         var fname = document.getElementById('user').value;
//         var pwd = document.getElementById('pass').value;
//         var result = document.getElementById('result')

//         let name = localStorage.getItem(fname);
//         var data = JSON.parse(name);
//         console.log(fname,pwd,result)
//         let admin = localStorage.getItem("admin");
//         console.log(fname,pwd,result)
//         if (name == null) {
//             result.innerHTML= "correct your username plz!!!";
//         }
//         // let user = {fname: fname}
//         if (admin != null) {
//             localStorage.setItem("loggedInUser", JSON.parse(fname))
//             window.location.href = "./dashboard.html";
//         }
        
//         else if  (fname == data.fname && pwd == data.pwd) {
//             localStorage.setItem("loggedInUser", JSON.stringify({fname: fname}))
//             window.location.href = "portfolio.html";
//         }
//         // else if (result.innerHTML = "correct your password plz!!!"){

        
//         else {
        
//             for (let i=0; i < name.length; i++){
//             if (user == "Admin" && pwd == "123"){
//                 location.href='./dashboard.html'
//             }
//             }

//         }
//     }

// ================================
function validate() {
    let users = JSON.parse(localStorage.getItem("users") || "[]")
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    console.log(user, pass)
    if (user == "admin" && pass =="pass") {
        window.location.href= "dashboard.html"
        const Admin={
            id: 000000,
            user: "Admin",
            pass:   "Pass"
        }
        console.log(Admin);
        window.localStorage.setItem("tempLog", JSON.stringify(Admin))
    }   else{
            if(user === "" || pass ===""){
                // popContact("please fill all fields");
                console.log("please fill out fields")
            }
            else{
                for (let i=0; i<users.length; i++){
                if(users[i].fname == user && users[i].pwd == pass){
                    window.localStorage.setItem("tempLog", JSON.stringify(users[i]))
                    let link = "./index.html"
                    window.location.href = link
                    console.log(users[i]);
                    break;
                }
                }
                }
            }
        }
    


        
    


