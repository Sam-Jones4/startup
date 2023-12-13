function uploadPic()
{
    const uploadedPic = document.getElementById('uploadedpic');
    localStorage.setItem("uploadedpic", uploadedPic.value);
}

function changePic()
{
    const profilePic = document.getElementById('profile-pic');
    profilePic.addEventListener('change', uploadedPic);
}