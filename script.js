const hour = document.getElementById('hour');
const minutes = document.getElementById("minutes");
const seconds = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');
const dateEl = document.getElementById("date")

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    //easy way to current date format
    //let d = new Date().toLocaleDateString("de-DE");

    let ampm = "AM";

    //This checks if the hour (h) is greater than 12, which means the time is in the afternoon (PM).
    //In a 24-hour clock system, the hours after 12 PM are represented as 13, 14, 15, and so on (e.g., 1 PM = 13, 2 PM = 14).
    if(h > 12){
        h = h - 12
        ampm = "PM"
    } else if(h === 0){
        h = 12; // Midnight is shown as 12 AM
    }

    //If any of these values are less than 10, it prefixes them with a "0" to ensure they are two digits long.
    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

     // Get the current date
     const now = new Date();
     const day = now.getDate(); // Day of the month (1-31)
     const month = now.getMonth() + 1; // Month (0-11, so add 1)
     const monthIndex = now.getMonth(); // Month (0-11)
     const year = now.getFullYear(); // Full year (e.g., 2024)

     // Arrays for day and month names
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    const dayNames = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

     //Get the day name
     const dayName = dayNames[now.getDay()] // Get the current day name

     // Format the date as desired (e.g., DD/MM/YYYY)
    // const formattedDate = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month: month}/${year}`

     // Format the date as desired (e.g., "Monday, January 01, 2024")
     const formattedDate = `${dayName}, ${monthNames[monthIndex]} ${day < 10 ? '0' + day: day}/${month < 10 ? '0' + month: month}, ${year}`

    hour.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    ampmEl.innerText = ampm;
    dateEl.innerText = formattedDate;
    setTimeout(()=>{
        updateClock()
    }, 1000)
}

updateClock();