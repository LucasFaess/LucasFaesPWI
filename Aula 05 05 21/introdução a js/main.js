function login(){
    var user = document.getElementById('userL')
    var senha = document.getElementById('userP')
    var res = document.getElementById('res')

    user = String(user.value)
    senha = String(senha.value)
    res = String(res.value)

    res.innerHTML = `O usuário é ${user} e sua senha é ${senha}`
}