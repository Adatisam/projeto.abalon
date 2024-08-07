const header = document.createElement('header')
const homeLink = document.createElement('a')
homeLink.href = 'home.html'
homeLink.setAttribute('type', 'home')

const abbr = document.createElement('abbr')
abbr.title = 'Clique aqui para voltar a página principal'

const logo1 = document.createElement('div')
logo1.classList.add('logo1')
const logo2 = document.createElement('div')
logo2.classList.add('logo2')

logo1.appendChild(logo2)
abbr.appendChild(logo1)
homeLink.appendChild(abbr)
header.appendChild(homeLink)

const nav = document.createElement('nav')
const menuToggle = document.createElement('div')
menuToggle.classList.add('menu-toggle')
menuToggle.id = 'menuToggle'

for (let i = 0; i < 3; i++) {
    const navIcon = document.createElement('span')
    navIcon.classList.add('nav-icon')
    menuToggle.appendChild(navIcon)
}

const menu = document.createElement('div')
menu.id = 'menu'
menu.classList.add('menu')

const links = [
    { href: 'home.html', text: 'HOME' },
    { href: 'historia.html', text: 'HISTÓRIA' },
    { href: 'materiais.html', text: 'MATERIAIS' },
    { href: 'universo.html', text: 'UNIVERSO PRIMORDIAL' },
    { href: '#', text: 'BLOG' },
    { href: '../login.abalon/login.html', text: 'LOGIN' }
]

links.forEach(linkInfo => {
    const link = document.createElement('a')
    link.href = linkInfo.href
    link.setAttribute('type', linkInfo.type)
    link.textContent = linkInfo.text
    menu.appendChild(link)
})

nav.appendChild(menuToggle)
nav.appendChild(menu)
header.appendChild(nav)
document.body.appendChild(header)