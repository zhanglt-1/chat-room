const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messages = document.getElementById('messages');

// 页面加载时从 localStorage 加载聊天记录
window.addEventListener('load', function () {
    const storedMessages = localStorage.getItem('chatMessages');
    if (storedMessages) {
        const parsedMessages = JSON.parse(storedMessages);
        parsedMessages.forEach(function (message) {
            const li = document.createElement('li');
            li.textContent = message;
            messages.appendChild(li);
        });
    }
});

messageForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const message = messageInput.value;
    if (message) {
        const li = document.createElement('li');
        li.textContent = message;
        messages.appendChild(li);
        messageInput.value = '';

        // 将新消息添加到 localStorage
        const storedMessages = localStorage.getItem('chatMessages');
        let messageArray = storedMessages ? JSON.parse(storedMessages) : [];
        messageArray.push(message);
        localStorage.setItem('chatMessages', JSON.stringify(messageArray));
    }
});
    
