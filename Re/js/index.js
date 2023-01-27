function login(userName,password) {
    console.log(userName)
    if (userName === 'nivi') {
        localStorage.setItem('userName', userName)
        alert('Welcome Nivi ')
        window.location.href='index2.html'
    } else {
        alert('Sorry Wrong Person')
    }
}

function navigate(){
    window.location.href='index.html'
}