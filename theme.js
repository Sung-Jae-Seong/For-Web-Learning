var Body = {
    setColor: function(color) {
        $('body').css('color', color);
    },
    setBackground: function(color) {
        $('body').css('background', color);
    }
};

var Links = {
    setColor: function(color) {
        $('a').css('color', color);
    }
};

function setDarkLightToggle() {
    const button = document.querySelector('#dark_light_toggle');
    const currentMode = button.getAttribute('data-mode');

    if (currentMode === "dark") {
        button.setAttribute('data-mode', "light");
        Body.setBackground('black');
        Body.setColor('white');
        Links.setColor('powderblue');
    } else {
        button.setAttribute('data-mode', "dark");
        Body.setBackground('white');
        Body.setColor('black');
        Links.setColor('blue');
    }
}

function setLightMode() {
    $('body').css('background', 'white').css('color', 'black');
}

function setDarkMode() {
    $('body').css('background', 'black').css('color', 'white');
}
