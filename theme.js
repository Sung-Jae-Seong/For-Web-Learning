// === : equal
// &lt; : less than on html '<'


function setDarkLightToggle() {
    const button = document.querySelector('#dark_light_toggle');
    const body_style = document.querySelector('body').style;
    const alist = document.querySelectorAll('a');

    if(button.value==="dark"){
        body_style.background = 'black';
        body_style.color = 'white';
        button.value = "light";
        for (let i = 0; i < alist.length; i++) { //let becomes local variable of for statement, var becomes variable
            alist[i].style.color='powderblue';
        }
    }
    else{
        body_style.background = 'white';
        body_style.color = 'black';
        button.value = "dark";
        for (let i = 0; i < alist.length; i++) { //let becomes local variable of for statement, var becomes variable
            alist[i].style.color='blue';
        }
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
