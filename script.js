const startDate = new Date("2019-02-03T00:00:00");
let showDetailed = false;

const titleEl = document.getElementById("title");
const outputEl = document.getElementById("output");
const btn = document.getElementById("toggleBtn");

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    if (showDetailed) {
        // Calculate Years, Months, Days
        let years = now.getFullYear() - startDate.getFullYear();
        let months = now.getMonth() - startDate.getMonth();
        let days = now.getDate() - startDate.getDate();

        if (days < 0) { 
            months--; 
            days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); 
        }
        if (months < 0) { 
            years--; 
            months += 12; 
        }
        
        titleEl.innerText = "Time Elapsed (Calendar)";
        outputEl.innerText = `${years} years, ${months} months, ${days} days`;
    } else {
        // Calculate Total Days, Hours, Minutes, Seconds
        const totalSeconds = Math.floor(diff / 1000);
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        titleEl.innerText = "Time Elapsed (Precise)";
        outputEl.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

btn.addEventListener("click", () => {
    showDetailed = !showDetailed;
    updateTimer();
});

setInterval(updateTimer, 1000);
updateTimer();
