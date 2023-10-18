const passwordBox = document.getElementById("password");
const length = 12
const btn = document.getElementById("btn")
const copy =  document.getElementById("copy")

const passwordCharacters =
  "QWERuiop{}$|asdTYU345SDFG./?><;[]HJKLZXCVBNMqwertyfZXCVghjklnm012^&*6789!@~#%zxcvb()_IOPA+=-,";

btn.addEventListener('click', createPassword)
copy.addEventListener('click', copyPassword)

function createPassword() {
    let password = ''
    for (let i = 0; i <= length; i++){
        password += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]
    }
    passwordBox.value = password
}

function copyPassword() {
    navigator.clipboard.writeText(passwordBox.value)
    alert(`You copied password: ${passwordBox.value}`)
}