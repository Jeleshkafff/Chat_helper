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

    shineLinks()