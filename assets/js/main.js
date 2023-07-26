const bars = document.querySelector(".bars");
const nav = document.querySelector("nav");
let fabar = document.querySelector(".fa-bars")

bars.onclick = () => {
    nav.classList.toggle("active");
    if (fabar.classList.contains("fa-bars")) {
        fabar.classList.replace("fa-bars", "fa-xmark")
    } else {
        fabar.classList.replace("fa-xmark", "fa-bars")
    }
};

const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_x1s3j65';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Sent!');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });

let mybutton = document.getElementById("myBatn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const the_animation = document.querySelectorAll('.ani')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        } else {
            entry.target.classList.remove('scroll-animation')
        }

    })
}, {
    threshold: 0.5
});
for (let i = 0; i < the_animation.length; i++) {
    const elements = the_animation[i];

    observer.observe(elements);
}