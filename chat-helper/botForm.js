const div = document.createElement("div")
div.innerHTML = `
    <button class="btnOpenBot">Помощник</button>
    <form class="bot_chat">
        <div class="wind_top">
            <div class=bot-div>
                <p>Аврора</p>
                <img src="../public/bot.svg" alt="Лого">
            </div>
            <div class="flex">
                <div class="notification">
                    <img src="../public/notification.png" alt="уведомления">
                </div>
                <div class="closeForm">
                    <img src="../public/icon-close.webp" alt="закрыть">
                </div>
            </div>
        </div>
        <main>
            <p class="help-p">введите, "помоги", если нужна помощь</p>
            <ul class="container-message"></ul>
        </main>
        <footer>
            <button class="addMicro">
                <img src="../public/micro.svg" alt="картинка">
            </button>
            <input class="bot-chat-input" list="historyInp" type="text" placeholder="Введите текст" >
            <button class="btnNoStyle" >
                <img src="../public/send.svg" alt="стрелочка">
            </button>

        </footer>
    </form>
    <datalist id="historyInp">

    </datalist>
`
let arrCommand = ["привет","помоги","форма","как отправить проект","перейди в общее","перейди в команду","я тебя люблю","шутка"]
function fillDataList(arr,idDatalist){
    console.log(11);
    const datalist =  div.querySelector(`#${idDatalist}`)
    console.log(datalist);
    for(let item of arr){
        const option = document.createElement("option")
        option.textContent = item
        datalist.append(option)
    }
}
fillDataList(arrCommand,"historyInp")


export default div



