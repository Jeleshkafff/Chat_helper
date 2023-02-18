let arrNotification = [
    "Открылся прием заявок на грантовый конкурс",
    "Вы участвуете в конкурсе молодые рукодельники, вот ссылка",
    "Мы рассмотрели вашу заявку, исправьте помеченные поля по ссылке",   
]
localStorage.setItem("notification",JSON.stringify(arrNotification))
console.log("notif");

for(let item of arrNotification){
    const li = document.createElement("li")
    li.textContent = item
    document.querySelector(".notificationUl").append(li)
}