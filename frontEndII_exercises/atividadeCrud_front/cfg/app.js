function verifyTokenLocalStorage() {
    return JSON.parse(localStorage.getItem('token'));
}

function getLoggedUser() {
    const token = verifyTokenLocalStorage()
    if(!token) {
        alert("Please login first!")
        localStorage.clear()
        setTimeout(() => {
            window.location.href = './index.html';
        }, 100);
        return
    }
}

getLoggedUser()