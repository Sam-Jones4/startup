const messageInput = document.getElementById('send-message');
const sendButton = document.querySelector('.send-message-bar svg');
const chatContainer = document.querySelector('.active-chat');

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    addSentMessageToChat(message);
    messageInput.value = '';
});

function addSentMessageToChat(message) {
    const sentMessageElement = document.createElement('div');
    sentMessageElement.className = 'sent-chat active-chat';
    sentMessageElement.textContent = message;
    chatContainer.appendChild(sentMessageElement);
}

function addReceivedMessageToChat(message) {
    const receivedMessageElement = document.createElement('div');
    receivedMessageElement.className = 'received-chat active-chat';
    receivedMessageElement.textContent = message;
    chatContainer.appendChild(receivedMessageElement);
}