
const nameInput = document.getElementById("input-name");
const passInput = document.getElementById("input-password");
const passMoreInput = document.getElementById("input-password-more")
const btn=document.getElementById('button-theme')
const theme = document.getElementById('theme-link')
let select = document.querySelector('select');
//const userType = document.getElementById("user-type").index
//let userTypeValue;
let nameInputValue;
let passInputValue;
let passMoreInputValue;
let userType;
nameInput.addEventListener("input", ()=> {
  nameInputValue = nameInput.value
})
nameInput.oninput = function () {
    document.getElementById("input-password").disabled = nameInputValue.length < 3;
}
nameInput.addEventListener("blur", () => {
    if (nameInputValue.length <3) {
        window.alert("Имя должно быть не меньше трех символов")
    }
})
passInput.addEventListener("input", () => {
    passInputValue=passInput.value;
})
passInput.addEventListener("blur", ()=>{
    if (passInputValue.length <6) {
        window.alert("Пароль должен быть не меньше 6 символов")
    }
})
passInput.oninput = function () {
    document.getElementById("input-password-more").disabled = passInputValue.length <= 5;
}
passMoreInput.addEventListener("input", ()=> {
    passMoreInputValue = passMoreInput.value;
})
passMoreInput.addEventListener("blur", ()=>{
    if (passInputValue !== passMoreInputValue) {
        window.alert("Введеные пароли не совпадают")
        document.getElementById("input-password").value = "";
        document.getElementById("input-password-more").value = "";
        document.getElementById("input-password").focus()
        document.getElementById("user-type").disabled = true;
    } else {
        document.getElementById("user-type").disabled = false;
    }
})
passMoreInput.oninput = function () {
    document.getElementById("user-type").disabled = passInputValue !== passMoreInputValue
}
select.addEventListener('change', ()=>{
    userType = select.value;
    document.getElementById("button-submit").disabled = false;
})

btn.addEventListener('click', function (){
    if (theme.getAttribute("href")==="style/light-theme.css") {
        theme.setAttribute('href', "style/dark-theme.css")
        btn.firstChild.data="На светлую"
    } else {
        theme.setAttribute('href', "style/light-theme.css")
        btn.firstChild.data="На темную"
    }
})
