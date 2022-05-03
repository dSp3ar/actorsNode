const container = document.querySelector('.container');
const inputs = document.querySelectorAll('input[type="text"]');
const button = document.querySelector('button');

container.classList.toggle('start_container');

container.addEventListener('mouseenter', () => {
    container.classList.remove('out_container');
    container.classList.toggle('in_container');
    container.classList.remove('start_container');
});

container.addEventListener('mouseleave', () => {
    container.classList.remove('in_container');
    container.classList.toggle('out_container');
});

for (let input of inputs) {
    input.addEventListener('focusin', () => {
        input.classList.toggle('clicked_input');
    });

    input.addEventListener('focusout', () => {
        input.classList.toggle('clicked_input');
    });
}