const messageInput = document.getElementById('send-message');
const sendButton = document.querySelector('.send-message-bar svg');
const chatContainer = document.querySelector('.active-chat');
const userName = getUserName();
const allMessages = document.getElementById('msgs')

async function loadMessages() {
    let messages = [];
    try {
      // Get the latest high scores from the service
      const response = await fetch('/api/chat');
      messages = await response.json();
  
      // Save the scores in case we go offline in the future
      localStorage.setItem('messages', JSON.stringify(messages));
    } catch {
      // If there was an error then just use the last saved scores
      const messagesText = localStorage.getItem('messages');
      if (messagesText) {
        messages = JSON.parse(messagesText);
      }
    }
  
    displayMessages(messages);
}

function displayMessages(messages)
{
    for (let int = 0; int < messages.length; int++) 
    {
        let message = messages[int];
        addMessageToChat(message);
    }
}

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    addSentMessageToChat(message);
    messageInput.value = '';
});

function addMessageToChat(message) {
    const messageContent = document.createElement('div');
    messageContent.className = 'sent-chat active-chat';
    messageContent.textContent = message + " - " + userName;
    chatContainer.appendChild(messageContent);
}

function getUserName() {
    return localStorage.getItem('userName') ?? 'Mystery user';
}