//Copy main content and append to nav blurr element
let  pageContent = document.getElementById("content");
pagecopy = pageContent.cloneNode(true);
blurryContent = document.getElementById("nav-blurr");

console.log(blurryContent)

blurryContent.appendChild(pagecopy);

//on scroll effect:
window.onscroll = function() { 
    blurryContent.scrollTop = window.pageYOffset;
}
