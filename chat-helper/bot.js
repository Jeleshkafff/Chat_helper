const botChat = document.querySelector(".bot_chat")
const botChatInp = document.querySelector(".bot-chat-input")
const ul = document.querySelector(".container-message")
botChat.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(botChatInp.value);
    if(botChatInp.value.length ==0){
        return
    }
    addMessage(botChatInp.value)
    if(botChatInp.value == "помоги"){
        addMessage("Какая-то помощь",false)
        ul.scrollTop = ul.scrollHeight;
        // botContainer.innerHTML += `Какая-то помощь<br>`
    }
    if(botChatInp.value == "привет"){
        addMessage("привет, я Аврора, чем могу помочь?",false)
        ul.scrollTop = ul.scrollHeight;
        // botContainer.innerHTML += `привет, я Аврора, чем могу помочь?<br>`
        // botContainer.innerHTML += `привет, я Аврора, чем могу помочь?<br>`
    }
    // if(botChatInp.value == "форма"){
    //     phase = 1
    //     botInput.value = ""
    //     botContainer.innerHTML += `заполните поле имя<br>`
    //     return
    // }
    // if(phase == 1){
       
    //     objData.nameUser = botInput.value
    //     nameInput.value = objData.nameUser
    //     botContainer.innerHTML += `заполните поле фамилия<br>`
    //     phase = 2
    //     botInput.value = ""
    //     return
    // }
    // if(phase==2){
        
    //     objData.surnameUser = botInput.value
    //     surnameInput.value = objData.surnameUser   
    //     phase = 3
    //     botContainer.innerHTML += `Круто, вы все заполнили<br>`
    //     botInput.value = ""
    // }
    if(phase == 3){
        console.log("Все данные заполнены");
        return
    }
    botChatInp.value = ""
})

function addMessage(message,you=true){
    const li = document.createElement("li")
    if(you){
        li.classList.add("messF")
    }
    else{
        li.classList.add("messT")
    }
    
    li.innerHTML = `
        <div>
        <p>${message}</p>
        </div>
    `
    ul.append(li)
}
console.log(1);