// === : equal
// &lt; : less than on html '<'

var Body = {
    setColor:function (color){
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackground:function (color){
        $('body').css('background', color);
    }
}

var Links = {
    setColor:function(color){
    //     alist = document.querySelectorAll('a');
    //     for (let i = 0; i < alist.length; i++) { //'let' becomes local variable of for statement, var becomes variable
    //         alist[i].style.color=color;
    //     }
        $('a').css('color', color);
    }
}

function setColor(target, color){
    for (let i = 0; i < target.length; i++) { //'let' becomes local variable of for statement, var becomes variable
        target[i].style.color=color;
    }
}
function setDarkLightToggle() {
    const button = document.querySelector('#dark_light_toggle');
    const body_style = document.querySelector('body').style;
    const alist = document.querySelectorAll('a');

    if(button.value==="dark"){
        //body_style.background = 'black';
        //setColor(body_style.color, 'white');
        button.value = "light";
        //setColor(alist, 'powderblue');
        Body.setBackground('black');
        Body.setColor('white');
        Links.setColor('powderblue');
    }
    else{
        body_style.background = 'white';
        setColor(body_style.color, 'black');
        button.value = "dark";
        setColor(alist, 'blue');
    }


}

function setLightMode() {
    document.querySelector('body').style.background = 'white';
    document.querySelector('body').style.color = 'black';
}

function setDarkMode() {
    document.querySelector('body').style.background = 'black';
    document.querySelector('body').style.color = 'white';
}
