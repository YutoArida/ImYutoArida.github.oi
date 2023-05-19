/*scroll section active link*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header ul a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 500;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header ul a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};


/*education*/

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('education-active')
        })
        target.classList.add('education-active') 

        tabs.forEach(tab =>{
            tab.classList.remove('education-active')
        })
        tab.classList.add('education-active')
    })
})


//Reference XML
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "references.xml", true);
xhttp.send();
function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    document.getElementById("name").innerHTML =
    xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    document.getElementById("occupation").innerHTML =
    xmlDoc.getElementsByTagName("occupation")[0].childNodes[0].nodeValue;
    document.getElementById("contactNo").innerHTML =
    xmlDoc.getElementsByTagName("contactNo")[0].childNodes[0].nodeValue;

    document.getElementById("name1").innerHTML =
    xmlDoc.getElementsByTagName("name")[1].childNodes[0].nodeValue;
    document.getElementById("occupation1").innerHTML =
    xmlDoc.getElementsByTagName("occupation")[1].childNodes[0].nodeValue;
    document.getElementById("contactNo1").innerHTML =
    xmlDoc.getElementsByTagName("contactNo")[1].childNodes[0].nodeValue;

    document.getElementById("name2").innerHTML =
    xmlDoc.getElementsByTagName("name")[2].childNodes[0].nodeValue;
    document.getElementById("occupation2").innerHTML =
    xmlDoc.getElementsByTagName("occupation")[2].childNodes[0].nodeValue;
    document.getElementById("contactNo2").innerHTML =
    xmlDoc.getElementsByTagName("contactNo")[2].childNodes[0].nodeValue;
}

//about 

const parentContainer = document.querySelector('.about-content');

parentContainer.addEventListener('click', event => {

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less" : "Read More"
})