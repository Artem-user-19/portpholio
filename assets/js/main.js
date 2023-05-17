emailjs.init('OTMtb4vbOxp7Wr4Ke')

let from_name = document.getElementById("from_name")
let from_email = document.getElementById("from_email")
let from_msg = document.getElementById("message")

const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_v53ze08';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                btn.value = "Sent";
            }, (err) => {
                btn.value = 'Sent';
                alert(JSON.stringify(err));
            });
    });

btn.addEventListener("click", () => {
    setTimeout(() => {
        from_name.value = ""
        from_email.value = ""
        from_msg.value = ""
    }, 1500)
})