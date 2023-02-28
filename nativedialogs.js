  
        let buttons = document.getElementsByTagName('button');

        buttons[0].addEventListener('click', () => {alert('Built-in Alert')} );

        let outputs = document.getElementsByTagName('output');

        let userValue = null;

        
        function taggedTemplateStr (str){       
            if(str === null || str.length < 1){
                return `Prompt Result : User did not enter anything`;
            }
            
            return `Prompt Result : ${str}`;
        }
        
        buttons[1].addEventListener('click', () => {
            outputs[0].innerHTML = '';

            setTimeout(() => {
                let confirmation = confirm('Do you confirm this?');
                let strToReturn = `Confirm Result: ${confirmation}`;
                outputs[0].innerHTML = strToReturn;
            }, 0);
           
        } );

        buttons[2].addEventListener('click', () => {        //Regular Prompt
            outputs[0].innerHTML = '';

            setTimeout(() => {
                userValue = prompt('Please enter your name!')
                outputs[0].innerHTML = taggedTemplateStr(userValue);
            }, 0);

        });

        buttons[3].addEventListener('click', () => {        //Safer Prompt
            outputs[0].innerHTML = '';

            setTimeout(() => {
                userValue = prompt('Please enter your name!');
                userValue = DOMPurify.sanitize(userValue);
                outputs[0].innerHTML = taggedTemplateStr(userValue);
            }, 0);
            
        });

                                                                                        //<b onmouseover="alert('Got \'Em')"> Roll them </b>