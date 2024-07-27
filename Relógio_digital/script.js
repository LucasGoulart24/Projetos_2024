function updateTime() {
    const timeElement = document.getElementById("time");
    const now = new Date;
    const Hours = now.getHours().toString().padStart(2, '0');
    const Minutes = now.getMinutes().toString().padStart(2, '0');
    const Seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = `${Hours}:${Minutes}:${Seconds}`;
    timeElement.textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime();