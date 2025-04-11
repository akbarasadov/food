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

        }).then(() => jsConfetti.addConfetti())

    }
}, 1000)

let genderBtn = document.querySelectorAll("#gender .calculating__choose-item")
let inputs = document.querySelectorAll("#act input")
let active = document.querySelectorAll("#akb .calculating__choose-item")
let calc = document.querySelector(".calculating__result span")



let data = {
        gender: "woman"
    }

genderBtn.forEach(btn => {
    
    btn.onclick = () => {
        genderBtn.forEach(gender => gender.classList.remove("calculating__choose-item_active"))
        btn.classList.add("calculating__choose-item_active")
        data.gender = btn.getAttribute("data-gender")
        console.log(data.gender);

        inputs.forEach(input => {
            input.oninput = () => {
                data[input.id] = input.value

                if (data.gender === "woman") {
                    calc.textContent = Math.floor(655.1 + (9.563 * data.weight) + (1.85 * data.height) - (4.676 * data.age))
                } else if (data.gender === "man") {
                    calc.textContent = Math.floor(66.5 + (13.75 * data.weight) + (5.003 * data.height) - (6.775 * data.age))
                }
            }
        })
    }
})

active.forEach(act => {
    act.onclick = () => {
        active.forEach(activ => activ.classList.remove("calculating__choose-item_active"))
        act.classList.add("calculating__choose-item_active")
        data["activities"] = act.id


    }
})
