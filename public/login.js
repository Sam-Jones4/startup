function login() 
{
    const userName = document.querySelector("#username");
    localStorage.setItem("userName", userName.value);
    const passWord = document.querySelector("#password");
    localStorage.setItem("passWord", passWord.value);
    window.location.href = "chat.html";
}
