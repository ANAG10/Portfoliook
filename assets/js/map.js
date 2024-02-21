document.addEventListener("DOMContentLoaded", (event) => {

        setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML =
             `<iframe class="contact__iframe" frameborder="0" scrolling="no" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.321976541187!2d-3.6771929240081724!3d40.4017174714421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422610ff1bb7d7%3A0x9e839b1a70ea2dcc!2zUGFjw61maWNv!5e0!3m2!1ses!2ses!4v1705070932573!5m2!1ses!2ses"  style="border:0;"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    ;
}, 1500);

});