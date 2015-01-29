/**********************************
HEADING
***********************************/

var header = document.querySelector('body header');

// recreated <div class="header-cont">
// var headerCont = document.createElement('div');
// headerCont.classList.add('header-cont');
// header.appendChild(headerCont);

// recreated <header class="nav"> 
// var headerClass = document.createElement('nav');
// headerCont.appendChild(headerClass);

// recreated <div class="logo">
var headerLogo = document.createElement('div');
headerLogo.setAttribute('class', 'logo');

var headerLink = document.createElement('a');
headerLink.setAttribute('href', 'index.html');

var headerImage = document.createElement('img');
headerImage.setAttribute('src', 'img/kd_logo.png');
headerImage.setAttribute('alt', 'Kitsudar Design logo');

headerLink.appendChild(headerImage);
headerLogo.appendChild(headerLink);
header.appendChild(headerLogo);

// recreated <div class="myname">
var headerName = document.createElement('div');
headerName.setAttribute('class', 'myname');
var myName = document.createElement('p');
myName.innerHTML="kitsudar <br /> somchana <br /> design";
headerName.appendChild(myName);
header.appendChild(headerName);

// recreated <ul>
var ul = document.createElement('ul');
ul.setAttribute('class', 'nav');
header.appendChild(ul);

// recreated <li>
var li1 = document.createElement('li');
ul.appendChild(li1);
var liLink = document.createElement('a');
liLink.setAttribute('href', 'about.html');
if (page == 'about') {
	liLink.classList.add('selected');
}

liLink.textContent = "about me";
li1.appendChild(liLink);


var li2 = document.createElement('li');
ul.appendChild(li2);
var li2Link = document.createElement('a');
li2Link.setAttribute('href', 'portfolio.html');
if (page == 'portfolio') {
	li2Link.classList.add('selected');
}

li2Link.textContent = "my work";
li2.appendChild(li2Link);

var li3 = document.createElement('li');
ul.appendChild(li3);
var li3Link = document.createElement('a');
li3Link.setAttribute('href', 'resume.html');
if (page == 'resume') {
	li3Link.classList.add('selected');
}

li3Link.textContent = "resume";
li3.appendChild(li3Link);

var li4 = document.createElement('li');
ul.appendChild(li4);
var li4Link = document.createElement('a');
li4Link.setAttribute('href', 'contact.html');
if (page == 'contact') {
	li4Link.classList.add('selected');
}

li4Link.textContent = "contact me";
li4.appendChild(li4Link);

var li5 = document.createElement('li');
ul.appendChild(li5);
var li5Link = document.createElement('a');
li5Link.setAttribute('href', 'blog.html');
if (page == 'blog') {
	li5Link.classList.add('selected');
}

li5Link.textContent = "blog";
li5.appendChild(li5Link);


/**********************************
FOOTER
***********************************/

var footerClass = document.querySelector('footer');

// recreate <a>
var linkedIn = document.createElement('a');
linkedIn.setAttribute('href', 'https://www.linkedin.com/in/kitsudar');
footerClass.appendChild(linkedIn);

var linkedInImg = document.createElement('img');
linkedInImg.setAttribute('src', './img/linkedin.png');
linkedInImg.setAttribute('alt', 'LinkedIn');
linkedInImg.classList.add('social-icon');
linkedIn.appendChild(linkedInImg);


var faceBook = document.createElement('a');
faceBook.setAttribute('href', 'http://facebook.com/kitsudar');
footerClass.appendChild(faceBook);

var faceBookImg = document.createElement('img');
faceBookImg.setAttribute('src', './img/facebook.png');
faceBookImg.setAttribute('alt', 'Facebook');
faceBookImg.classList.add('social-icon');
faceBook.appendChild(faceBookImg);

var instagram = document.createElement('a');
instagram.setAttribute('href', 'http://instagram.com/kitsudar');
footerClass.appendChild(instagram);

var instagramImg = document.createElement('img');
instagramImg.setAttribute('src', './img/instagram.png');
instagramImg.setAttribute('alt', 'Instagram');
instagramImg.classList.add('social-icon');
instagram.appendChild(instagramImg);

var p = document.createElement('p');
p.textContent = '© 2015 Kitsudar Somchana Design. All rights reserved.';
footerClass.appendChild(p);













