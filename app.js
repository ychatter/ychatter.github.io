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
        }
    }

    // Event listener for setting the username
    setUsernameButton.addEventListener("click", setUsername);
    usernameInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            setUsername();
        }
    });

    // Function to open the file input dialog for uploading avatars
    function openAvatarInput() {
        avatarInput.click();
    }

    // Event listener for opening the avatar input dialog
    uploadAvatarButton.addEventListener("click", openAvatarInput);

    // Function to handle avatar image selection
    function handleAvatarSelection(event) {
        const file = event.target.files[0];
        if (file) {
            avatarURL = URL.createObjectURL(file);
            // You can display the selected avatar image if needed
        }
    }

    // Event listener for handling avatar image selection
    avatarInput.addEventListener("change", handleAvatarSelection);

    // Function to open the file input dialog for attaching images to messages
    function openFileInput() {
        fileInput.click();
    }

    // Event listener for opening the file input dialog
    attachImageButton.addEventListener("click", openFileInput);

    // Function to handle image selection and send messages
    function handleImageSelection(event) {
        const file = event.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            sendMessage(`<img src="${imageURL}" alt="Image" />`);
            fileInput.value = "";
        }
    }

    // Event listener for handling image selection and sending messages
    fileInput.addEventListener("change", handleImageSelection);

    // Function to send a message
    function sendMessage(messageText) {
        if (messageText) {
            chatMessages.innerHTML += `<div class="message sent"><img src="${avatarURL}" alt="Avatar" class="user-avatar">${username}: ${messageText}</div>`;
            messageInput.value = "";
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }

    // Event listener for sending messages
    sendButton.addEventListener("click", () => {
        const message = messageInput.value.trim();
        sendMessage(message);
    });

    // Event listener for pressing Enter key in the message input
    messageInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const message = messageInput.value.trim();
            sendMessage(message);
        }
    });

    // Function to request camera permission
    function requestCameraPermission() {
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
                console.log("Camera access granted");
                stream.getTracks().forEach((track) => track.stop());
            })
            .catch((error) => {
                console.error("Camera access denied or error:", error);
            });
    }

    // Event listener for requesting camera permission
    attachImageButton.addEventListener("click", requestCameraPermission);
});

