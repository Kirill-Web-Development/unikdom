const triggerBtns = document.querySelectorAll('[data-modal]');
const overlay = document.getElementById('overlay');
const modalCloseBtn = document.querySelectorAll('[data-close-modal]')

function setModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    triggerBtns.forEach(button => {
        button.addEventListener('click', () => {
            overlay.classList.add('active')
            modal.classList.add('active')
        })
    })    
}
setModal('#modal-callback')


modalCloseBtn.forEach(closeButton => {
    closeButton.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal')
        modal.classList.remove('active')
        overlay.classList.remove('active')
    })
})