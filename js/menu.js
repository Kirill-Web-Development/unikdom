const menuLinks = document.querySelectorAll('.navigation-list li');
const menuLinksFirstLvl = document.querySelectorAll('.navigation-list > li')
const menuLinksArray = Array.from(menuLinks)
const menuLinksFirstLvlArray = Array.from(menuLinksFirstLvl)
const bottomMenu = document.querySelector('.bottom-menu')

function findLink(item) {
    const parent = item.closest('li') || item;
    return parent;
}


document.addEventListener('click', (e) => {
    const target = e.target.tagName === 'LI' ? e.target : findLink(e.target)
    if (!menuLinksArray.includes(target)) {
        const allSubMenu = document.querySelectorAll('.submenu-active')
        allSubMenu.forEach(list => list.classList.toggle('submenu-active'))
    }

    if(e.target.id === 'nav-icon3') {
        e.target.classList.toggle('open')
        bottomMenu.classList.toggle('active')
    }
    if (e.target.classList.contains('burger-line')) {
        const target = e.target.closest('#nav-icon3')
        target.classList.toggle('open')
        bottomMenu.classList.toggle('active')
    }
})

menuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.stopPropagation();
        const sub = link.querySelectorAll('.submenu-active ul li.submenu-active');
        if (sub.length) {
            sub.forEach(link => link.classList.toggle('submenu-active'))
        }
        const target = e.target.tagName === 'LI' ? e.target : findLink(e.target)
        target.classList.toggle('submenu-active')
    })
})
