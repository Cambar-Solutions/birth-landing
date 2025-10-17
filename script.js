// Fecha objetivo: 27 de diciembre de 2025
// Los meses en JavaScript van de 0 (Enero) a 11 (Diciembre). Diciembre es 11.
const eventDate = new Date("December 27, 2025 15:30:00").getTime();

// Obtener elementos del DOM
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function updateCountdown() {
    // Obtener la fecha y hora actual
    const now = new Date().getTime();

    // Calcular la distancia (tiempo restante)
    const distance = eventDate - now;

    // Lógica de cálculo de tiempo
    const oneSecond = 1000;
    const oneMinute = oneSecond * 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;

    // Calcular Días, Horas, Minutos y Segundos restantes
    const days = Math.floor(distance / oneDay);
    const hours = Math.floor((distance % oneDay) / oneHour);
    const minutes = Math.floor((distance % oneHour) / oneMinute);
    const seconds = Math.floor((distance % oneMinute) / oneSecond);

    // Formatear la salida para que siempre tenga dos dígitos (00)
    const formatTime = (time) => String(time).padStart(2, '0');

    // Mostrar el resultado en los elementos
    daysElement.innerHTML = formatTime(days);
    hoursElement.innerHTML = formatTime(hours);
    minutesElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML = formatTime(seconds);

    // Cuando la cuenta regresiva termina (opcional: mensaje de '¡Es hoy!')
    if (distance < 0) {
        clearInterval(countdownInterval);
        daysElement.innerHTML = "00";
        hoursElement.innerHTML = "00";
        minutesElement.innerHTML = "00";
        secondsElement.innerHTML = "00";
        // Aquí podrías agregar un mensaje de "¡Es la fiesta!"
        document.getElementById('countdown').innerHTML = "<h2>¡Hoy es el gran día! 🎉</h2>";
    }
}

// Ejecutar la función inmediatamente para evitar un parpadeo y luego cada segundo
updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);   