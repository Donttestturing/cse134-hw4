  //get buttons
        let buttons = document.getElementsByTagName('button');
  //built in alert part
        buttons[0].addEventListener('click', () => {alert('Built-in Alert')} );

        let outputs = document.getElementsByTagName('output');

        let userValue = null;

       //use of tagged template strings 
        function taggedTemplateStr (str){       
            if(str === null || str.length < 1){
                return `Prompt Result : User did not enter anything`;
            }
            
            return `Prompt Result : ${str}`;
        }
  //confirm button with response code    
        buttons[1].addEventListener('click', () => {
            outputs[0].innerHTML = '';

            setTimeout(() => {
                let confirmation = confirm('Do you confirm this?');
                let strToReturn = `Confirm Result: ${confirmation}`;
                outputs[0].innerHTML = strToReturn;
            }, 0);
           
        } );
  //regular prompt button with response code    
        buttons[2].addEventListener('click', () => {        //Regular Prompt
            outputs[0].innerHTML = '';

            setTimeout(() => {
                userValue = prompt('Please enter your name!')
                outputs[0].innerHTML = taggedTemplateStr(userValue);
            }, 0);

        });
  //safer prompt button with response code    
        buttons[3].addEventListener('click', () => {        //Safer Prompt
            outputs[0].innerHTML = '';

            setTimeout(() => {
                userValue = prompt('Please enter your name!');
                userValue = DOMPurify.sanitize(userValue);
                outputs[0].innerHTML = taggedTemplateStr(userValue);
            }, 0);
            
        });

                                //string for testing: <b onmouseover="alert('Got \'Em')"> Roll them </b>