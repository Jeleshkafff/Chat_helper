
const botChat = document.querySelector(".bot_chat")
const botChatInp = document.querySelector(".bot-chat-input")
const ul = document.querySelector(".container-message")
let phase = 0
let oldArr =  JSON.parse(localStorage.getItem("info")) || []
if(oldArr.length >0){
    for(let item of oldArr){
        addMessage(item.message,item.you,true)
    }
    ul.scrollTop = ul.scrollHeight;
}
console.log(document.querySelectorAll("input"));
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
    }
    if(botChatInp.value == "привет"){
        addMessage("привет, я Аврора, чем могу помочь?",false)
        ul.scrollTop = ul.scrollHeight;
    }
    if(botChatInp.value == "форма"){
        // phase = 1
        // botInput.value = ""
        // botContainer.innerHTML += `заполните поле имя<br>`
        // return
    }
    if(botChatInp.value == "я тебя люблю"){
        addMessage("О, как мило, спасибо",false)
        ul.scrollTop = ul.scrollHeight;
    }
    if(botChatInp.value == "перейди в команду"){
        window.location.assign("2.html")
    }    
    if(botChatInp.value == "перейди в общее"){
        window.location.assign("1.html")
    }
    if(phase == 3){
        console.log("Все данные заполнены");
        return
    }
    botChatInp.value = ""
})

// fucntion event


botChat.classList.add("unActive")
document.querySelector(".btnOpenBot").addEventListener('click',()=>{
    botChat.classList.remove("unActive")
    document.querySelector(".btnOpenBot").classList.add("unActive")
})
botChat.querySelector(".closeForm").addEventListener('click', ()=>{
    botChat.classList.add("unActive")
    document.querySelector(".btnOpenBot").classList.remove("unActive") 
})


function addMessage(message,you=true,fromLocal=false){
    if(!fromLocal){
        let oldArr =  JSON.parse(localStorage.getItem("info")) || []
        oldArr.push({
            message:message,
            you:you
        })
        localStorage.setItem("info",JSON.stringify(oldArr));
    }

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

function forMicro(textNew){
    let text = textNew.toLowerCase()
    addMessage(text)
    if(text == "помоги"){
        addMessage("Какая-то помощь",false)
        ul.scrollTop = ul.scrollHeight;
    }
    if(text == "привет"){
        addMessage("привет, я Аврора, чем могу помочь?",false)
        ul.scrollTop = ul.scrollHeight;
    }
    if(text == "форма"){
        // phase = 1
        // botInput.value = ""
        // botContainer.innerHTML += `заполните поле имя<br>`
        // return
    }
    if(text == "я тебя люблю"){
        addMessage("О, как мило, спасибо",false)
        ul.scrollTop = ul.scrollHeight;
    }
    if(text == "перейди в команду"){
        window.location.assign("2.html")
    }    
    if(text == "перейди в общее"){
        window.location.assign("1.html")
    }
    if(phase == 3){
        console.log("Все данные заполнены");
        return
    }
}











const micro = document.querySelector(".addMicro")
let textDict
////////////////////////////
const artyom = new Artyom()
artyom.ArtyomProperties.lang = "ru-RU"
console.log(artyom.ArtyomProperties.lang)

let UserDictation = artyom.newDictation({
    continuous:true, // Enable continuous if HTTPS connection
    onResult:function(text){
        // Do something with the text
        if(text){
            textDict = text
        }
        if(!text){
            micro.disabled = false
            forMicro(textDict)
            artyom.fatality()
            UserDictation.stop()
            textDict = ''
        }
    },

});



function microOnBtn(){
    
    micro.addEventListener("click",()=>{
        UserDictation.start();
        micro.disabled = true
    })
}

microOnBtn()