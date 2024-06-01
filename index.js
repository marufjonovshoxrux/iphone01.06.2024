document.addEventListener('DOMContentLoaded', function () {
    const image = document.getElementById('image');
    const naturalButton = document.querySelector('.naturaltitanium');
    const blackButton = document.querySelector('.blacktitanium');
    const blueButton = document.querySelector('.bluetitanium');
    const whiteButton = document.querySelector('.whitetitanium');

    naturalButton.addEventListener('click', function () {
        image.src = './img/naturaltitanium.png';
    });

    blackButton.addEventListener('click', function () {
        image.src = './img/blacktitanium_1.png';
    });

    blueButton.addEventListener('click', function () {
        image.src = './img/bluetitanium_1.png';
    });

    whiteButton.addEventListener('click', function () {
        image.src = './img/whitetitanium_1.png';
    });
});



const btn_1 = document.querySelector('#btn_1')
const dialog_1 = document.querySelector('.dialog_1')
const closed = dialog_1.querySelector('#closed')


btn_1.onclick = () => {
    dialog_1.showModal()
}

closed.onclick = () => {
    dialog_1.close()
}


const btn_2 = document.querySelector('#btn_2')
const dialog_2 = document.querySelector('.dialog_2')
const closed_2 = dialog_2.querySelector('#closed_2')

btn_2.onclick = () => {
    dialog_2.showModal()
}


closed_2.onclick = () => {
    dialog_2.close()
}

const seeDeals = document.querySelector('#seeDeals')
const dialog_3 = document.querySelector('.dialog_3')
const closed_3 = document.querySelector('#closed_3')


seeDeals.onclick = () => {
    dialog_3.showModal()
}

closed_3.onclick = () => {
    dialog_3.close()
}


