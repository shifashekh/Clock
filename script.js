async function fetchTime() {
    try {
        const response = await fetch('http://worldtimeapi.org/api/timezone/Etc/UTC');
        const data = await response.json();
        const time = new Date(data.datetime).toLocaleTimeString();
        document.getElementById('time').innerText = time;
    } catch (error) {
        console.error("Error fetching time:", error);
        document.getElementById('time').innerText = "Error fetching time";
    }
}

setInterval(fetchTime, 1000);  
