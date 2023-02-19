
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
    forMicro(botChatInp.value)
    botChatInp.value = ""
})


botChat.classList.add("unActive")
document.querySelector(".btnOpenBot").addEventListener('click',()=>{
    botChat.classList.remove("unActive")
    document.querySelector(".btnOpenBot").classList.add("unActive")
    localStorage.setItem("botIsOpen",true)
})
botChat.querySelector(".closeForm").addEventListener('click', ()=>{
    botChat.classList.add("unActive")
    document.querySelector(".btnOpenBot").classList.remove("unActive")
    localStorage.removeItem("botIsOpen") 
})
if(localStorage.getItem("botIsOpen")){
    botChat.classList.remove("unActive")
}

botChat.querySelector(".notification").addEventListener("click",()=>{
    window.location.assign("8.html")
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
    ul.scrollTop = ul.scrollHeight;
}

function forMicro(textNew){
    console.log(textNew);
    let text = textNew.toLowerCase()
    addMessage(text)
    if(text == "помоги"){
        addMessage("Какая-то помощь",false)
    }
    if(text == "привет"){
        addMessage("привет, я Аврора, чем могу помочь?",false)
    }
    if(text == "форма"){
        let objCounts = JSON.parse(localStorage.getItem("infoInputsFill")) || {}
        let allInputs = document.querySelectorAll(".to-fill")
        let count = 1
        for(let item of allInputs){
            if(item.value.length!=0){
                count = count + 1
            }
        }

        console.log(count-1,allInputs.length);
        objCounts.filled +=count
        if(count-1 == allInputs.length){
            addMessage("Вы заполнили все поля",false)
            localStorage.setItem("infoInputsFill",JSON.stringify(objCounts))
        }
        // for(allInputs)
        addMessage(`Профент заполненый полей: ${(objCounts.filled/objCounts.allCount).toFixed(2)*100} %`,false)
        // phase = 1
        // botInput.value = ""
        // botContainer.innerHTML += `заполните поле имя<br>`
        // return
    }
    if(text == "я тебя люблю"){
        addMessage("О, как мило, спасибо",false)
    }
    if(text == "перейди в команду"){
        window.location.assign("2.html")
    }    
    if(text == "перейди в общее"){
        window.location.assign("1.html")
    }
    if(text == "как отправить проект"){
        addMessage("Вам необходимо выбрать мероприятие во вкладке мероприятия и добавить проект используя следующие разделы...",false)
    }
    if(text=="шутка"){
        let arrJoke = [`Девушка звонит парню:
        — Приходи ко мне, дома никого не будет.
        Парень пришел, а дома никого нет`,
        `заходит штирлиц в лес, и видит голубые ели
        посмотрел повнимательнее, оказалось ещё и пили`,`знаете как называется будка охранника на кладбище? живой уголок`,
        `Жаль не взял собой рундук.
        Хе-хе.
        Сундук для рун - рундук`
        ]
        let index = Math.round(Math.random() * (arrJoke.length-1 - 1) + 1);
        console.log(index);
        addMessage(arrJoke[index],false)

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
