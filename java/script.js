function updateDateTime() {
    const now = new Date();

    const dateString = now.toLocaleDateString(); // Formats date (e.g., 3/31/2025)
    const timeString = now.toLocaleTimeString(); // Formats time (e.g., 10:45:30 AM)

    document.getElementById("time").textContent = `${dateString} ${timeString}`;
}

// Update date & time every second
setInterval(updateDateTime, 1000);

// Call it once immediately
updateDateTime();
