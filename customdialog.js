// 
let buttons = document.getElementsByTagName('button');
let dialogs = document.getElementsByTagName('dialog');
let results = document.getElementsByTagName('result');

buttons[0].addEventListener('click', () =>{
    results[0].innerHTML = "";
    results[0].style = "";
    dialogs[0].innerHTML = "Alert Pressed! <br> <button id='alertOkButton'>Ok</button> ";
    dialogs[0].open = true;

    let innerOkButton = document.getElementById('alertOkButton');
    innerOkButton.addEventListener('click', () =>{
        dialogs[0].open = false;
        dialogs[0].innerHTML = "";
    });

});
buttons[1].addEventListener('click', () =>{
    results[0].innerHTML = "";
    results[0].style = "";
    dialogs[0].innerHTML = "Do you confirm this? <br> <button id='confirmOkButton'>Ok</button> <button id='confirmCancelButton'>Cancel</button> ";
    dialogs[0].open = true;

    let innerOkButton = document.getElementById('confirmOkButton');
        innerOkButton.addEventListener('click', () =>{
        dialogs[0].open = false;
        dialogs[0].innerHTML = "";
        results[0].style = 'border: solid 1px black; font-weight:500; background-color:pink';
        results[0].innerHTML = confirmResultTemplateStr('true');
    });
    let innerCancelButton = document.getElementById('confirmCancelButton');
        innerCancelButton.addEventListener('click', () =>{
        dialogs[0].open = false;
        dialogs[0].innerHTML = "";
        results[0].style = 'border: solid 1px black; font-weight:500; background-color:pink';
        results[0].innerHTML = confirmResultTemplateStr('false');
    });

});
function confirmResultTemplateStr(result){
    return `Confirm result: ${result}`
}
function promptResultTemplateStr(result){
    return `Prompt result: ${result}`
}
buttons[2].addEventListener('click', () =>{
    results[0].innerHTML = "";
    results[0].style = "";
    dialogs[0].innerHTML = "What is your name? <br> <textarea id='promptTextArea'> </textarea> <br> <button id='promptOkButton'>Ok</button> <button id='promptCancelButton'>Cancel</button> ";
    dialogs[0].open = true;

    let innerOkButton = document.getElementById('promptOkButton');
    innerOkButton.addEventListener('click', () =>{
        let promptTxtArea = document.getElementById('promptTextArea');   
        let txtFromUser = DOMPurify.sanitize(promptTxtArea.value);
        txtFromUser = txtFromUser===' ' ? "No name given" : txtFromUser;

        dialogs[0].open = false;
        dialogs[0].innerHTML = "";
        results[0].style = 'border: solid 1px black; font-weight:500; background-color:pink';
        results[0].innerHTML = promptResultTemplateStr(txtFromUser);

    });
    let innerCancelButton = document.getElementById('promptCancelButton');
    innerCancelButton.addEventListener('click', () =>{
        dialogs[0].open = false;
        dialogs[0].innerHTML = "";
        results[0].style = 'border: solid 1px black; font-weight:500; background-color:pink';
        results[0].innerHTML = promptResultTemplateStr('No name given, User hit cancel');
    });

});
