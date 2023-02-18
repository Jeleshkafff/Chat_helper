const asidebar = document.createElement("div")
asidebar.classList.add("asidebar")
asidebar.innerHTML = `
    <h2>Разделы</h2>
    <a href="./1.html">ОБЩЕЕ</a>
    <a href="./2.html">КОМАНДА</a>
    <a href="./3.html">ПРОЕКТ</a>
    <a href="./4.html">КАЛЕНДАРНЫЙ ПЛАН</a>
    <a href="./5.html">СОФИНАНСИРОВАНИЕ</a>
    <a href="./6.html">ДОП.ФАЙЛЫ</a>
    <a href="./7.html">РАСХОДЫ</a>
    <a href="./9.html">МЕРОПРИЯТИЯ</a>
    <div class="linkNotification">
    <a href="./8.html" >УВЕДОМЛЕНИЯ</a>
    </div>
    
`
document.querySelector(".wrapper").prepend(asidebar)
function shineLinks(){
        let el=document.getElementsByTagName('a');
        console.log(el.length)
        console.log(el)
        let url=document.location.href;
        console.log(url)
        for(let i=0;i<el.length; i++){
            console.log(el[i].href)
            if (url==el[i].href){
                el[i].style="color:rgb(193, 120, 48);";
            };
        }
    }
let obj = JSON.parse(localStorage.getItem("infoInputsFill")) ||
{
    allCount:28,
    filled:0
}
localStorage.setItem("infoInputsFill",JSON.stringify(obj))
shineLinks()
console.log(JSON.parse(localStorage.getItem("notification")));