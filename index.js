let getButton = document.querySelector('#addItem');

insertButton();

// insert button for each LI in the created UL
function insertButton() {
    let getLi = document.querySelectorAll('li');
    
    
    for (const insertLi of getLi) {
        let createButton = document.createElement('button');
        createButton.textContent = `X`;
        insertLi.appendChild(createButton);
        // remove LI when click on the button
        createButton.addEventListener('click', function () {
            createButton.parentElement.remove();
        })
        // add Done class to each LI from actual UL
        insertLi.addEventListener('click',function(){
            insertLi.classList.toggle('done');
        })
        
    }

}

// add items when Add Item button is clicked
getButton.addEventListener('click', function () {
    // get input element 
    let getInput = document.querySelector('input');
    //get ul element
    let getUl = document.querySelector('ul');
    //create LI element
    let createLi = document.createElement('li');
    // create text node from input element
    let getInputValue = document.createTextNode(getInput.value);
    //create delete button for each element created in the UL
    let createButton = document.createElement('button');
    createButton.textContent = `X`;
    //append the text node to the LI
    createLi.appendChild(getInputValue);
    //append the delete button to the LI
    createLi.appendChild(createButton);
    //append LI to UL element
    getUl.appendChild(createLi);
    // empty the input value after each insertion
    getInput.value = '';
    //create action to delete entire LI when delete button is clicked
    createButton.addEventListener('click', function () {
        createButton.parentElement.remove();
    })

    //create toogle action for each text node from the created LI
    createLi.addEventListener('click', function () {
        createLi.classList.toggle('done');
    });

    
})
















