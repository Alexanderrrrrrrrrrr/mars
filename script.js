document.addEventListener('DOMContentLoaded', function () {
    const buyTicketButton = document.querySelector('.button');
    const formSection = document.getElementById('formSection');
    const closeFormButton = document.getElementById('closeFormButton');
    const bookingForm = document.getElementById('bookingForm');
    
    buyTicketButton.addEventListener('click', function () {
        formSection.classList.add('visible');
        addAnimationClass(); // Добавляем класс с анимацией
    });

    closeFormButton.addEventListener('click', function () {
        formSection.classList.remove('visible');
        removeAnimationClass(); // Удаляем класс с анимацией
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            formSection.classList.remove('visible');
            removeAnimationClass(); // Удаляем класс с анимацией
        }
    });

    bookingForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const checkInDate = document.getElementById('chekIn').value;
        const exitDate = document.getElementById('exit').value;
        const numberOfPersons = document.getElementById('person').value;

        alert(`Хорошего полета! 
               Дата вылета: ${checkInDate} 
               Дата прибытия: ${exitDate} 
               Количество человек: ${numberOfPersons}`);
    });
    
    const text = document.querySelector('.main__text')
    const dot1 = document.getElementById('dot1');
    const line = document.getElementById('line');
    const dot2 = document.getElementById('dot2');
    const img = document.querySelector('.main__img')

    const initialTopDot1 = -313;
    const finalTopDot2 = 290;
    const lineHeight = finalTopDot2 - initialTopDot1;

    dot1.style.opacity = '1';
    setTimeout(() => {
        img.style.opacity = '1';
        addAnimationClass(); // Добавляем класс с анимацией
    }, 1500);
    setTimeout(() => {
        line.style.height = lineHeight + 'px';
        dot2.style.opacity = '1';
        text.style.opacity = '1';
    }, 1000);

    function addAnimationClass() {
        var body = document.body;
        body.classList.add('fog-animation');
    }

    function removeAnimationClass() {
        var body = document.body;
        body.classList.remove('fog-animation');
    }

    setInterval(function() {
        addAnimationClass();
        setTimeout(removeAnimationClass, 3000);
    }, 6000);
});