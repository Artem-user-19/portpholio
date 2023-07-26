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