let coverImage
document.getElementById('fileInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        coverImage = reader.result;
    };
    
});


const submits = () =>{
    const articles = JSON.parse(localStorage.getItem("articles")) ?? []
    var title = document.getElementById('title').value;
    var body = document.getElementById('body').value;
    var tag = document.getElementById('tag').value;
     if (!title || !coverImage || !body || !tag ){
        return;
     }
     var newArticles = {
        id: articles.length,
        title: title,
        body: body,
        image: coverImage,
        tag: tag,
        Comment: []
     };

     articles.unshift(newArticles)
     localStorage.setItem('articles', JSON.stringify(articles));
     document.getElementById('title').value = '',
     document.getElementById('body').value = '',
     document.getElementById('tag').value = '',
     document.getElementById('fileInput').value = ''
     alert('dats has been well inserted')
    console.log(body);
     return false

     
    }
    removeData = () => {
        localStorage.splash('articles');
     };


//     let isOn=false;
// const showMenu=()=>{
//     const div=document.querySelectorAll(".mobile-menu");
// isOn?div[0].style.display="none": div[0].style.display="flex";
// isOn=!isOn;
// }
// document.getElementById("showMenu").addEventListener('click', showMenu);

// let isUserProfileOn=false;
// const showUserProfile=()=>{
//     const div=document.querySelectorAll(".user-profile");
//     isUserProfileOn?div[0].style.display="none": div[0].style.display="block";
// isUserProfileOn=!isUserProfileOn;
// }
// document.getElementById("userDiv").addEventListener('click', showUserProfile);

