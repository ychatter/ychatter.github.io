document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username-input");
    const setUsernameButton = document.getElementById("set-username-button");
    const avatarInput = document.getElementById("avatar-input");
    const uploadAvatarButton = document.getElementById("upload-avatar-button");
    const fileInput = document.getElementById("file-input");
    const attachImageButton = document.getElementById("attach-image-button");
    const messageInput = document.getElementById("message-input");
    const chatMessages = document.getElementById("chat-messages");
    const sendButton = document.getElementById("send-button");
    const logoutButton = document.getElementById("logout-button");

    let username = ""; // Store the username
    let avatarURL = ""; // Store the avatar image URL

    // Function to set the username
    function setUsername() {
        const inputUsername = usernameInput.value.trim();
        if (inputUsername !== "") {
            username = inputUsername;
            usernameInput.disabled = true;
            setUsernameButton.disabled = true;
            messageInput.disabled = false;
            sendButton.disabled = false;
            attachImageButton.disabled = false;
            logoutButton.disabled = false; // Enable the logout button
            logIPAddress(); // Log the user's IP address when they set a username
        }
    }

    // Event listener for setting the username
    setUsernameButton.addEventListener("click", setUsername);
    usernameInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            setUsername();
        }
    });

    // ... (other code) ...

    // Function to log the user's IP address
    function logIPAddress() {
        fetch("log.php", {
            method: "POST", // You can use GET or POST depending on your server configuration
        })
        .then(response => {
            if (response.ok) {
                console.log("IP address logged successfully.");
            } else {
                console.error("Failed to log IP address.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }

    // Event listener for the logout button
    logoutButton.addEventListener("click", () => {
        logout();
    });

    // Function to handle the logout action
    function logout() {
        if (username !== "") {
            // Display a "has left the chat" message and clear the user's data
            const leaveMessage = `<div class="message info">${username} has left the chat</div>`;
            chatMessages.innerHTML += leaveMessage;

            // Clear the username and avatar data
            username = "";
            avatarURL = "";

            // Disable input and buttons
            usernameInput.disabled = false;
            setUsernameButton.disabled = false;
            messageInput.disabled = true;
            sendButton.disabled = true;
            attachImageButton.disabled = true;
            logoutButton.disabled = true; // Disable the logout button

            // Clear the message input
            messageInput.value = "";
        }
    }
});
