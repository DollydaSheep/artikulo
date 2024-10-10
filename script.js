const nav = document.querySelector('.nav');
const article = document.querySelectorAll('.article');
const artText = document.querySelectorAll('.article-text');
const artImg = document.querySelectorAll('.article-img');

window.addEventListener('scroll',function(){
    if(window.scrollY==0){
        nav.style.marginTop = "0.5em";
    }else{
        nav.style.marginTop = "-2.5em";
    }  
});

article.forEach((art, index) => {
    art.addEventListener('mouseenter',function(){
        artText[index].style.textDecoration = "underline";
        art.style.cursor = "pointer";
        artImg[index].style.transform = "scale(1.2)";
    })
});

article.forEach((art, index) => {
    art.addEventListener('mouseleave',function(){
        artText[index].style.textDecoration = "none";
        artImg[index].style.transform = "scale(1)";
    })
});