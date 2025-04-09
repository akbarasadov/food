let buttons = document.querySelectorAll("button[data-modal]")
let modal = document.querySelector(".modal")
let close = document.querySelector(".modal__close")

buttons.forEach(btn => {
    btn.onclick = () => {
        modal.classList.add("show")
        modal.classList.add("fade")
    }
})

close.onclick = () => {
    modal.classList.remove("show")
}

let current = document.querySelector("#current")
let total = document.querySelector("#total")

let prev = document.querySelector(".offer__slider-prev")
let next = document.querySelector(".offer__slider-next")
let slides = document.querySelectorAll(".offer__slide")

let idx = 0

total.innerHTML = String(slides.length).padStart(2, 0)

slideShow()

next.onclick = () => {
    idx++
    slideShow()
}

prev.onclick = () => {
    idx--
    slideShow()
}

function slideShow() {
    if (idx > slides.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = slides.length - 1
    }
    slides.forEach(slide => slide.classList.add("hide", "fide"));
    slides[idx].classList.remove("hide")

    current.innerHTML = String(idx + 1).padStart(2, 0)
}

let image = document.querySelectorAll(".img")
let items = document.querySelectorAll(".tabheader__item")
let tab = document.querySelectorAll(".tabcontent")
let idx1 = 0;

tab.forEach(img => {
    img.classList.add("hide")
})

tab[0].classList.remove("hide")

items.forEach((item, index) => {
    item.onclick = () => {
        items.forEach(item => {
            item.classList.remove("tabheader__item_active")
        })
        item.classList.add("tabheader__item_active")

        tab.forEach(img => {
            img.classList.add("hide")
        })

        tab[index].classList.remove("hide")
    }
})

//Создаем новую переменную и подключаем к классам
let seconds = document.querySelector("#seconds")
let minutes = document.querySelector("#minutes")
let hours = document.querySelector("#hours")
let days = document.querySelector("#days")

//Дата завершения акции
let deadline = "2025-05-20 00:00"

//Обновляем каждую секунду
let time = setInterval(() => {

    //Здесь мы находим время до конца акции
    let t = Date.parse(deadline) - Date.parse(new Date())


    if (t > -1) {
        //Считаем сколько секунды,минуты,часов и дней осталось до конца акции
        seconds.textContent = String(Math.floor(t / 1000 % 60)).padStart(2, "0")
        minutes.textContent = String(Math.floor(t / 1000 / 60 % 60)).padStart(2, "0")
        hours.textContent = String(Math.floor(t / 1000 / 60 / 60 % 24)).padStart(2, "0")
        days.textContent = String(Math.floor(t / 1000 / 60 / 60 / 24)).padStart(2, "0")
    } else {
        //Остановим обновление
        clearInterval(time)

        const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti({
        emojis: ['🌈','💥', '✨', '💫','🍎','🥑','🍌','🍉','🍍','🍓'],
    }).then(() => jsConfetti.addConfetti())

    }
}, 1000)