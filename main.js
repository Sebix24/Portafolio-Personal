const typeded = new Typed('.typeded', {
    strings: [
        '<i>SebastianDEV</i>'
    ],
    stringsElements: '#cadenas-texto',
    typeSpeed: 200,
    startDelay: 300,
    backSpeed: 75,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: "|",
    contentType: 'html'
})

//Animacion de titulo
//const typed = new Typed('.typed', {
//  strings: [
//      '<i>About Me</i>'
//  ],
//  stringsElements: '#cadenas-texto',
//  typeSpeed: 70,
//  startDelay: 300,
//  backSpeed: 75,
//  smartBackspace: true,
//  shuffle: false,
//  backDelay: 1000,
//  loop: true,
//  loopCount: false,
//  showCursor: true,
//  cursorChar: "|",
//  contentType: 'html'
//

//Nav responsive
let showMenu = false;

function showHiddenMenu(){
    if(showMenu){
        document.getElementById('nav').classList = '';
        showMenu = false;
    }
    else{
        document.getElementById('nav').classList = 'responsive';
        showMenu = true;
    }
};

//Hidden of menu
function selec(){
    document.getElementById('nav').classList = '';
    showMenu = false;
}

//Function animation
function efectPro(){
    var skills = document.getElementById('skills');
    var progressSkills = window.innerWidth - skills.getBoundingClientRect().top;

    if(progressSkills >= 500){
        let ability = document.getElementsByClassName('progress');
        ability[0].classList.add('html');
        ability[1].classList.add('css');
        ability[2].classList.add('javascript');
        ability[3].classList.add('java');
        ability[4].classList.add('python');
        ability[5].classList.add('sqlserver');
        ability[6].classList.add('teamwork');
        ability[7].classList.add('creativity');
        ability[8].classList.add('commitment');
        ability[9].classList.add('communication');
        ability[10].classList.add('dedication');
        ability[11].classList.add('adaptability');
        ability[12].classList.add('english');
        ability[13].classList.add('spanish');
    }
}

//Send Email
function sendEmail() {
    const name = document.getElementById('userName').value;
    const cell = document.getElementById('userCell').value;
    const email = document.getElementById('userEmail').value;
    const note = document.getElementById('userNote').value;
    const message = document.getElementById('userMessage').value;

    const templateParams = {
        from_name: name,
        cell_number: cell,
        reply_to: email,
        note: note,
        message: message,
    };

    emailjs.send("sebas", "template_8j3z1aa", templateParams)
        .then(function(response) {
            alert("Message sent successfully!");
            console.log("SUCCESS!", response.status, response.text);
        }, function(error) {
            alert("Failed to send the message. Please try again.");
            console.log("FAILED...", error);
        });
}

//Progress bar
window.onscroll = function(){
    efectPro();
}

//Animation page
window.sr = ScrollReveal();

sr.reveal('nav', {
    duration: 3000,
    origin: 'left',
    distance: '-500px'
});

sr.reveal('.scroll-1', {
    duration: 2000,
    origin: 'bottom',
    distance: '-100px'
})

sr.reveal('.scroll-2', {
    duration: 6000,
    origin: 'bottom',
    distance: '-400px'
})

sr.reveal('.scroll-3', {
    duration: 5000,
    origin: 'bottom',
    distance: '-400px'
})

sr.reveal('.scroll-4', {
    duration: 3000,
    origin: 'bottom',
    distance: '-400px'
})

//Animation about page
sr.reveal('.about-scroll-1', {
    duration: 3000,
    origin: 'bottom',
    distance: '-400px'
})

sr.reveal('.about-scroll-2', {
    duration: 2000,
    origin: 'bottom',
    distance: '-400px'
})

sr.reveal('.about-scroll-3', {
    duration: 3000,
    origin: 'right',
    distance: '-500px'
})

sr.reveal('.about-scroll-4', {
    duration: 2000,
    origin: 'right',
    distance: '-500px'
})

sr.reveal('.about-scroll-5', {
    duration: 3000,
    origin: 'left',
    distance: '-700px'
})

sr.reveal('.about-scroll-6', {
    duration: 2000,
    origin: 'left',
    distance: '-500px'
})

sr.reveal('.botton-scroll', {
    duration: 3000,
    origin: 'top',
    distance: '-300px'
})

//Animation skills page
sr.reveal('.skills-scroll', {
    duration: 2000,
    origin: 'left',
    distance: '-500px'
})

sr.reveal('.skills-scroll-2', {
    duration: 3000,
    origin: 'right',
    distance: '-800px'
})

//Animation gallery page
sr.reveal('.gallery-scroll', {
    duration: 3000,
    origin: 'bottom',
    distance: '-300px'
})

sr.reveal('.gallery-scroll-2', {
    duration: 2000,
    origin: 'bottom',
    distance: '-500px'
})

//animation curriculum
sr.reveal('.curriculum-scroll', {
    duration: 2000,
    origin: 'bottom',
    distance: '-500px'
})

sr.reveal('.curriculum-scroll-2', {
    duration: 3000,
    origin: 'right',
    distance: '-500px'
})

sr.reveal('.curriculum-scroll-3', {
    duration: 3000,
    origin: 'left',
    distance: '-500px'
})

//Animation contact
sr.reveal('.contact-scroll-1', {
    duration: 3000,
    origin: 'bottom',
    distance: '-400px'
})

sr.reveal('.contact-scroll-2', {
    duration: 3000,
    origin: 'right',
    distance: '-500px'
})

sr.reveal('.contact-scroll-3', {
    duration: 4000,
    origin: 'right',
    distance: '-500px'
})

sr.reveal('.contact-scroll-4', {
    duration: 5000,
    origin: 'right',
    distance: '-500px'
})

sr.reveal('.contact-scroll-5', {
    duration: 6000,
    origin: 'right',
    distance: '-500px'
})

sr.reveal('.contact-scroll-6', {
    duration: 7000,
    origin: 'right',
    distance: '-500px'
})

sr.reveal('.contact-scroll-7', {
    duration: 7000,
    origin: 'right',
    distance: '-800px'
})

sr.reveal('.contact-scroll-8', {
    duration: 6000,
    origin: 'left',
    distance: '-600px'
})

//Animation footer
sr.reveal('.footer-scroll', {
    duration: 2000,
    origin: 'top',
    distance: '-300px'
})

sr.reveal('.footer-scroll-2', {
    duration: 3000,
    origin: 'top',
    distance: '-300px'
})

sr.reveal('.footer-scroll-3', {
    duration: 4000,
    origin: 'top',
    distance: '-300px'
})

sr.reveal('.footer-scroll-4', {
    duration: 5000,
    origin: 'top',
    distance: '-300px'
})

sr.reveal('.footer-scroll-5', {
    duration: 6000,
    origin: 'top',
    distance: '-300px'
})

sr.reveal('.footer-scroll-6', {
    duration: 7000,
    origin: 'top',
    distance: '-200px'
})