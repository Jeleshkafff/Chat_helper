const div = document.createElement("div")
div.innerHTML = `
    <form class="bot_chat">
        <div class="wind_top">
        <p>Аврора</p>
        <img src="../public/bot.svg" alt="Лого">
        </div>
        <main>
            <p class="help-p">введите, "помоги", если нужна помощь</p>
            <ul class="container-message"></ul>
        </main>
        <footer>
            <img src="../public/micro.svg" alt="картинка">
            <input class="bot-chat-input" list="historyInp" type="text" placeholder="Введите текст" >
            <button class="btnNoStyle" >
                <img src="../public/send.svg" alt="стрелочка">
            </button>

        </footer>
    </form>
    <datalist id="historyInp">
    <option>как выжить</option>
    <option>как не умереть</option>
    <option>как не выжить из ума</option>
    <option>что, если выхода нет</option>
    </datalist>
`
export default div


const btnBot = document.createElement("button")
btnBot.textContent = "чат"

btnBot.style.position = "absolute"
btnBot.style.bottom = "20px"
btnBot.style.right = "20px"
document.body.append(btnBot)

let a = 1

btnBot.addEventListener('click', ()=>{
    if(a == 1){
        div.style.display="none"
        a = a-1
    }
    else{
        div.style.display="block"
        a++
    }

})