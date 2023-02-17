const nameInput = document.querySelector(".form-name")
const surnameInput = document.querySelector(".form-surname")
const botContainer = document.querySelector(".bot-container")
const botInput = document.querySelector("#bot-input")
const formBot = document.querySelector(".chat-bot") 
let objData = {
}
console.log(formBot);
let phase = 1
function helper(){
    console.log(1);
    if(nameInput.value.length == 0){ 
        botContainer.innerHTML = `заполните поле имя<br>`
    }
}
formBot.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(botInput.value);
    console.log(phase);
    if(phase == 1){
        if(botInput.value == 0){
            return
        }
        objData.nameUser = botInput.value
        nameInput.value = objData.nameUser
        botInput.value = ""
        botContainer.innerHTML += `заполните поле фамилия<br>`
        phase = 2
        return
    }
    if(phase==2){
        objData.surnameUser = botInput.value
        console.log(objData.surnameUser);
        surnameInput.value = objData.surnameUser
        botInput.value = ""  
        phase = 3
        botContainer.innerHTML += `Круто, вы все заполнили<br>`
    }
    if(phase == 3){
        console.log("Все данные заполнены");
        return
    }
    console.log(phase);
})


helper()

