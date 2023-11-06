const DOMSelectors = {
    //gives the selection of things to call
    form: document.querySelector("#form"),
    button: document.querySelector("#btn"),
    delete: document.querySelector(".del"),
    redinput: document.querySelector("#Red"),
    greeninput: document.querySelector("#Green"),
    blueinput: document.querySelector("#Blue"),
    card: document.querySelector(".card")
}

DOMSelectors.button.addEventListener("click", function(DOMSelectors){
    //the get elementbyid selects the element in the html file where it says "generate"; the addeventlistener says that if click happens then the function next to it will run 
    const redinput = DOMSelectors.redinput;
    //document.getelementbyid selects the element in the html file where it says "red"; const declares a variable (aka names it "redinput") and doesnt allow it to be changed 
    const greeninput = DOMSelectors.greeninput;
    //docuemnt.getelementbyid selects the element in the html file where it says "green"; const declares a variable (aka names it "greeninput") and doesnt allow it to be changed 
    const blueinput = DOMSelectors.blueinput;
    //document.getelementbyid selects the element in the html file where it says "blue"; const delclares a variable (aka names it "blueinput") and doesnt allow it to be changed 


    const Red = parseInt(redinput.value);
    //const declares a variable (aka names it "red") and doesnt allow it to be changed; parse takes information from an element (in this case, from redinput) 
    const Green = parseInt(greeninput.value);
    //const declares a variable (aka names it "green") and doesnt allow it to be changed; parse takes information from an element (in this case from greeninput)
    const Blue = parseInt(blueinput.value);
    //cosnt declares a variable (aka names it "blue") and doesnt allow it to be changed; parse takes information from an element (in this case, from blueinput)


    function createcard(Red,Green,Blue){
        //tells the html to create a card based on the red, green, and blue values inputted 
        const card = document.createElement("div");
        //const declares a variable (aka names it card) and doesnt allow it to be changed; document.createelement creates a new div element 
        card.classList.add ("card")
        //adds a card to a list of other cards/elements 
        card.style.backgroundColor = `RGB(${Red},${Green},${Blue})<br><button class="delete">Delete</button>`;
        //changes the background color of the card based on the red,green,and blue inputs/adds the option to delete the card 
        card.querySelector(".delete").addEventListener("click", function(){
        //gives the option to delete the card if someone clicks on it; function tells the code what to do after delete is clicked
        card.remove();
        //removes the card 
        });
        return card;
    }


    const card = createcard(Red,Green,Blue);
    //const declares a variable (aka names it "card") and doesnt allow it to be changed; createcard makes a card based off the red, green, and blue values 
    DOMSelectors.card.appendChild(card);
    //DOMselectors selects the element in the html file where it says "card"; appendchild adds more cards into the html with the id "card" 
}
);
