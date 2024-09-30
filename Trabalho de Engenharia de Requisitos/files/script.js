let buttonXP = document.querySelector('#buttonXP')
let buttonFDD = document.querySelector('#buttonFDD')
let buttonKANBAN = document.querySelector('#buttonKANBAN')
let buttonCRYS = document.querySelector('#buttonCRYS')
let buttonMSF = document.querySelector('#buttonMSF')

let contentxp = document.getElementById('xp')
let contentkanban = document.getElementById('kanban')
let contentcrystal = document.getElementById('crystal')
let contentmsf = document.getElementById('msf')
let contentfdd = document.getElementById('fdd')

buttonXP.addEventListener('click', function(){
    contentxp.style.transform = 'translateX(0)'
    contentkanban.style.transform = 'translateX(100%)'
    contentcrystal.style.transform = 'translateX(100%)'
    contentmsf.style.transform = 'translateX(100%)'
    contentfdd.style.transform = 'translateX(100%)'
})
buttonFDD.addEventListener('click', function(){
    contentxp.style.transform = 'translateX(100%)'
    contentkanban.style.transform = 'translateX(100%)'
    contentcrystal.style.transform = 'translateX(100%)'
    contentmsf.style.transform = 'translateX(100%)'
    contentfdd.style.transform = 'translateX(0)'
})
buttonKANBAN.addEventListener('click', function(){
    contentxp.style.transform = 'translateX(100%)'
    contentkanban.style.transform = 'translateX(0)'
    contentcrystal.style.transform = 'translateX(100%)'
    contentmsf.style.transform = 'translateX(100%)'
    contentfdd.style.transform = 'translateX(100%)'
})
buttonCRYS.addEventListener('click', function(){
    contentxp.style.transform = 'translateX(100%)'
    contentkanban.style.transform = 'translateX(100%)'
    contentcrystal.style.transform = 'translateX(0%)'
    contentmsf.style.transform = 'translateX(100%)'
    contentfdd.style.transform = 'translateX(100%)'
})
buttonMSF.addEventListener('click', function(){
    contentxp.style.transform = 'translateX(100%)'
    contentkanban.style.transform = 'translateX(100%)'
    contentcrystal.style.transform = 'translateX(100%)'
    contentmsf.style.transform = 'translateX(0%)'
    contentfdd.style.transform = 'translateX(100%)'
})
