document.body.onkeydown = parseCommand;
let blink = false; let command = "";
setInterval(toggleCaret, 500);

const d = new Date();
document.getElementById("demo").innerHTML = d;


function toggleCaret() {
    let caret = document.getElementById("commandCaret");
    if (blink) {
        blink = false; caret.style.color = "#00bd0d";
    } else {
        blink = true; caret.style.color = "#000000"; 
    }
}

function executeCommand() {
    switch (command.toLowerCase()) {
        case "github":
            return window.open("https://github.com/Luwey-Silva");
        case "telegram":
            return window.open("https://t.me/Haryfarinston");
        case "linkedin":
            return window.open("https://linkedin.com/luwey-silva");
        case "email":
            return window.open("mailto:luagruda@gmail.com");
    }

}

function parseCommand(enteredKey) {
    let dontPrint = ['Control', 'Alt', 'Shift', 'CapsLock', 'Tab', 'F1', 
    'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10',
    'F11', 'F12', 'F13', 'BrowserHome', 'ContextMenu',
    'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown',
    'Insert', 'Home', 'PageUp', 'Delete', 'End', 'PageDown',
    'ScrollLock', 'Pause', 'Escape', 'OS', 'Meta',
    '-', '=', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let commandInput = document.getElementById("commandInput");
    if (!dontPrint.includes(enteredKey.key)) {
        if (enteredKey.key === "Backspace") {
            command = command.substring(0, command.length - 1);
        } else {
            if (enteredKey.key === "Enter") {
                executeCommand(); command = "";
            } else {
                if (command.length < 15) {
                    command += enteredKey.key;
                }
            }
        }
        commandInput.innerText = command;
    }
}

