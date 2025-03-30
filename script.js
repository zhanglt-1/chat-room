const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messages = document.getElementById('messages');

messageForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const message = messageInput.value;
    if (message) {
        const li = document.createElement('li');
        li.textContent = message;
        messages.appendChild(li);
        messageInput.value = '';
    }
});
    