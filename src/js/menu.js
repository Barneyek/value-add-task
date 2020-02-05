const handleMenu = (button, menu) => {
    button.addEventListener('click', () => {
            button.classList.toggle('change');
            menu.classList.toggle('show');
            document.body.classList.toggle('lock'); 
    })
};

document.addEventListener('DOMContentLoaded', () => {
    const buttonMenu = document.querySelector('.handle-menu'),
        menu = document.querySelector('.menu');
    handleMenu(buttonMenu, menu);
});