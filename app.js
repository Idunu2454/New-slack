function updateUTCTime() {
    const currentTimeElement = document.getElementById('current-time');
    const currentTimeInMillis = new Date().getTime();
    currentTimeElement.textContent = `Current UTC Time (in milliseconds): ${currentTimeInMillis}`;
}

updateUTCTime();
setInterval(updateUTCTime, 1000);