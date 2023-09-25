const menuLinks = document.querySelectorAll('.navigation-list li');
const menuLinksArray = Array.from(menuLinks)

function findLink(item) {
    const parent = item.closest('li');
    return parent;
}

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const target = e.target.tagName === 'LI' ? e.target : findLink(e.target)
        const subMenu = target.querySelector('ul');
        const targetParent = e.target.closest('ul')
        const sameLevelLinks = targetParent.querySelectorAll(':scope > li')
        sameLevelLinks.forEach(link => {
            const subMenu = link.querySelector('ul');
            if (subMenu) {
                subMenu.style.display = 'none'
            }
        })
        if (subMenu) {
            subMenu.style.display = 'block'
        }
    })
})

document.addEventListener('click', (e) => {
    const target = e.target.tagName === 'LI' ? e.target : findLink(e.target)
    if (!menuLinksArray.includes(target)) {
        const allSubMenu = document.querySelectorAll('.navigation-list ul:not(:first-child)')
        allSubMenu.forEach(list => list.style.display = 'none')
        console.log(allSubMenu)
    }
    console.log(target)
})