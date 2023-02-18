const nameInput = document.querySelector(".form-name")
const surnameInput = document.querySelector(".form-surname")
const botContainer = document.querySelector(".bot-container")
const botInput = document.querySelector("#bot-input")
const formBot = document.querySelector(".chat-bot") 
const openBot = document.querySelector(".openBot")
// const notificationBtn = document.querySelector(".notification")
// const notificationContainer = document.querySelector(".notification-div")
// notificationContainer.style.display = "none"

// notificationBtn.addEventListener("click",()=>{
//     notificationContainer.style.display = "block" 
// })

// document.querySelector(".close-notification").addEventListener("click",()=>{
//     notificationContainer.style.display = "none" 
// })
const btnBot = document.querySelector(".btnBot")
let objData = {
//привет
}
let phase = 0
function helper(){
    botContainer.innerHTML += `для краткой справки введите help<br>`
    // if(nameInput.value.length == 0){ 
    //     botContainer.innerHTML += `заполните поле имя<br>`
    // }
}
formBot.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(phase);
    if(botInput.value.length == 0){
        return
    }
    if(botInput.value == "help"){
        botContainer.innerHTML += `Какая-то помощь<br>`
    }
    if(botInput.value == "привет"){
        botContainer.innerHTML += `привет, я Аврора, чем могу помочь?<br>`
        botContainer.innerHTML += `привет, я Аврора, чем могу помочь?<br>`
    }
    if(botInput.value == "форма"){
        phase = 1
        botInput.value = ""
        botContainer.innerHTML += `заполните поле имя<br>`
        return
    }
    if(phase == 1){
       
        objData.nameUser = botInput.value
        nameInput.value = objData.nameUser
        botContainer.innerHTML += `заполните поле фамилия<br>`
        phase = 2
        botInput.value = ""
        return
    }
    if(phase==2){
        
        objData.surnameUser = botInput.value
        surnameInput.value = objData.surnameUser   
        phase = 3
        botContainer.innerHTML += `Круто, вы все заполнили<br>`
        botInput.value = ""
    }
    if(phase == 3){
        console.log("Все данные заполнены");
        return
    }
    botInput.value = ""
})
helper()
const artyom = new Artyom();

// artyom.say("Хочу пиццы")

function startOneCommandArtyom(){
    artyom.fatality();// use this to stop any of

    setTimeout(function(){// if you use artyom.fatality , wait 250 ms to initialize again.
         artyom.initialize({
            lang:"en-GB",// A lot of languages are supported. Read the docs !
            continuous:false,// recognize 1 command and stop listening !
            listen:true, // Start recognizing
            debug:true, // Show everything in the console
            speed:1 // talk normally
        }).then(function(){
            console.log("Ready to work !");
        });
    },250);
}

let commandHello = {
    indexes:["hello","good morning","hey"], // These spoken words will trigger the execution of the command
    action:function(){ // Action to be executed when a index match with spoken word
        artyom.say("Hey buddy ! How are you today?");
    }
};
artyom.addCommands(commandHello);

let fillIn = {
    indexes:["заполни","поле"],
    action:function(){
        
    }
}

// btnBot.addEventListener("click",()=>{
//     startOneCommandArtyom()
// })

function answerOnQuestions(){
    const input = document.querySelector(".bot-chat-input")

    input.addEventListener("change",()=>{

    })

}



