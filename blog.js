    function init() {

        let postTitles = JSON.parse(localStorage.getItem('Post Titles'));
        let postDate = JSON.parse(localStorage.getItem('Post Dates'));
        let postSummary = JSON.parse(localStorage.getItem('Post Summaries'));

        if(postTitles === null || postDate === null  || postSummary === null || postSummary.length===0 || postDate.length===0 || postTitles.length===0){
            localStorage.setItem('Post Titles', JSON.stringify(['First Post', 'Second Post', 'Trials of the Mind']));
            localStorage.setItem('Post Dates', JSON.stringify(['2023-02-20', '2023-02-21', '2023-02-22']));
            localStorage.setItem('Post Summaries', JSON.stringify(['I made my first blog post today. It went ok.', 'My second blog post went a lot better than my first. Perhaps Practice makes perfect', 'I tried to set up a CRUD application today, I am feeling like... Well you know what...']));

            postTitles = JSON.parse(localStorage.getItem('Post Titles'));
            postDate = JSON.parse(localStorage.getItem('Post Dates'));
            postSummary = JSON.parse(localStorage.getItem('Post Summaries'));

        } 

        loadFromLocalStorage();
    
    }
    init();

    function loadFromLocalStorage(){

        let postTitles = JSON.parse(localStorage.getItem('Post Titles'));
        let postDate = JSON.parse(localStorage.getItem('Post Dates'));
        let postSummary = JSON.parse(localStorage.getItem('Post Summaries'));

        let blogPosts = document.getElementsByTagName('output');

        for (let index = 0; index < postTitles.length; index++) {
            blogPosts[0].innerHTML += '<li>' + postTitles[index] +  ': ' + postDate[index] + ' — ' + postSummary[index] + " |"  + "<button class='editButton'> Edit </button> " + "<button class='deleteButton'> Delete </button>"  +  ' </li>';

        }
        

    }  

    let blogPosts = document.getElementsByTagName('output');
    let deleteButtons = blogPosts[0].getElementsByClassName('deleteButton');
//items' delete buttons
    for (let index = 0; index < deleteButtons.length; index++) {

        deleteButtons[index].addEventListener('click', () =>{
            let postTitles = JSON.parse(localStorage.getItem('Post Titles'));
            let postDates = JSON.parse(localStorage.getItem('Post Dates'));
            let postSummaries = JSON.parse(localStorage.getItem('Post Summaries'));


            let userDialogField = document.getElementById('userDialogField');
            userDialogField.open = true;
            userDialogField.innerHTML = ` <p> <b> Do you want to delete this entry? </b> </p> <br> 
                                        <button id="delConfirmButton">
                                            Delete
                                        </button>
                                        <button id="cancelButton">
                                            Cancel
                                        </button>`;

            
            cancelButton.addEventListener('click', ()=>{
                userDialogField.open = false;
                userDialogField.innerHTML = '';

                blogPosts[0].innerHTML = '';
                loadFromLocalStorage();
                window.location.reload();
            });

            let delConfirmButton = document.getElementById('delConfirmButton');
            delConfirmButton.addEventListener('click', ()=>{
                postTitles.splice(index, 1);
                postDates.splice(index, 1);
                postSummaries.splice(index, 1);

                localStorage.setItem('Post Titles', JSON.stringify(postTitles));
                localStorage.setItem('Post Dates', JSON.stringify(postDates));
                localStorage.setItem('Post Summaries', JSON.stringify(postSummaries));

                blogPosts[0].innerHTML = '';
                loadFromLocalStorage();
                window.location.reload();
            });


            

          
        });
        
    } 
//items' edit buttons
    let editButtons = blogPosts[0].getElementsByClassName('editButton');
    for (let index = 0; index < editButtons.length; index++) {
        editButtons[index].addEventListener('click', () => {
            let postTitles = JSON.parse(localStorage.getItem('Post Titles'));
            let postDates = JSON.parse(localStorage.getItem('Post Dates'));
            let postSummaries = JSON.parse(localStorage.getItem('Post Summaries'));


            let userDialogField = document.getElementById('userDialogField');
            userDialogField.open = true;
            userDialogField.innerHTML = ` <label for="postTitle">Edit Title:</label>
                        <input type="text" id="postTitle" name="postTitle" value=${postTitles[index]} required>
        
                        <label for="Date">Edit Date:</label>
                        <input type="date" id="Date" name="Date" value=${postDates[index]} required>
                        <br>
                        <label for="summary">Edit Summary:</label> <br>
                        <textarea id="summary" name="summary" innerText=${postSummaries[index]} required> </textarea>
                        <br>
                        <button id="saveButton">
                            Save
                        </button>
                        <button id="cancelButton">
                            Cancel
                        </button>`;

                

            cancelButton.addEventListener('click', ()=>{
                userDialogField.open = false;
                userDialogField.innerHTML = '';

                blogPosts[0].innerHTML = '';
                loadFromLocalStorage();
                window.location.reload();
            });
            saveButton.addEventListener('click', ()=>{
                let postTitleEle = document.getElementById('postTitle');
                let dateEle = document.getElementById('Date');
                let summaryEle = document.getElementById('summary');
        
                const postTitles = JSON.parse(localStorage.getItem('Post Titles'));
                const postDates = JSON.parse(localStorage.getItem('Post Dates'));
                const postSummaries = JSON.parse(localStorage.getItem('Post Summaries'));
    
                postTitles[index] = DOMPurify.sanitize(postTitleEle.value);
                postDates[index] = DOMPurify.sanitize(dateEle.value);
                postSummaries[index] = DOMPurify.sanitize(summaryEle.value);

                localStorage.setItem('Post Titles', JSON.stringify(postTitles));
                localStorage.setItem('Post Dates', JSON.stringify(postDates));
                localStorage.setItem('Post Summaries', JSON.stringify(postSummaries));
            
                userDialogField.open = false;
                userDialogField.innerHTML = '';

                blogPosts[0].innerHTML = '';
                loadFromLocalStorage();
                window.location.reload();
            });


        });
        
    } 

//app's add button
  let addButtons = document.getElementsByClassName('addButton');

  addButtons[0].addEventListener('click', () => {
    let userDialogField = document.getElementById('userDialogField');
    userDialogField.open = true;
    userDialogField.innerHTML = ` <label for="postTitle">Post Title:</label>
                <input type="text" id="postTitle" name="postTitle" required>

                <label for="Date">Date:</label>
                <input type="date" id="Date" name="Date" required>
                <br>
                <label for="summary">Summary:</label> 
                <textarea id="summary" name="summary" required> </textarea>
                <br>
                <button id="saveButton">
                    Save
                </button>
                <button id="cancelButton">
                    Cancel
                </button>`;

    let saveButton = document.getElementById('saveButton');
    let cancelButton = document.getElementById('cancelButton');

    cancelButton.addEventListener('click', ()=>{
        userDialogField.open = false;
        userDialogField.innerHTML = '';
    });
    saveButton.addEventListener('click', ()=>{
        let postTitleEle = document.getElementById('postTitle');
        let dateEle = document.getElementById('Date');
        let summaryEle = document.getElementById('summary');

        const postTitles = JSON.parse(localStorage.getItem('Post Titles'));
        const postDates = JSON.parse(localStorage.getItem('Post Dates'));
        const postSummaries = JSON.parse(localStorage.getItem('Post Summaries'));


        postTitles.push(DOMPurify.sanitize(postTitleEle.value));
        postDates.push(DOMPurify.sanitize(dateEle.value));
        postSummaries.push(DOMPurify.sanitize(summaryEle.value));

        localStorage.setItem('Post Titles', JSON.stringify(postTitles));
        localStorage.setItem('Post Dates', JSON.stringify(postDates));
        localStorage.setItem('Post Summaries', JSON.stringify(postSummaries));
    
        userDialogField.open = false;
        userDialogField.innerHTML = '';

        document.getElementsByTagName('output')[0].innerHTML = '';
        loadFromLocalStorage();
        window.location.reload();
    });




  });




