document.addEventListener("DOMContentLoaded", (event) => {
    let marquee = (selector_list, speed) => {
        const container = document.querySelector(selector_list);
        const list = container.querySelector('.marquee__list');
        const items = container.querySelectorAll('.marquee__item');

        const clone = list.cloneNode(true);
        container.appendChild(clone);

        let move = 0;
        let itemWidth = items[0].offsetWidth;

        setInterval(() => {
            move += speed;
            if (move >= itemWidth) {
                move -= itemWidth;
                container.scrollLeft += move;
            } else {
                container.scrollLeft += speed;
            }
        }, 30); // Intervalo de tiempo ajustado para una animación más suave
    }

    marquee(".marquee__container", 1.5); // Ajusta la velocidad según tu preferencia
});

