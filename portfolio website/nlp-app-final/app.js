
(function nlpApp(){
    window.onload = function(){
        
    }
    
    /* hidden anchor page */
    let anchorDisplayPage = document.getElementById("anchor-display-page");
    let anchorDisplayEmotion = document.getElementById("anchor-display-emotion");
    let anchorDisplayIcon = document.getElementById("anchor-display-icon");
    let anchorDisplayTriggers = document.getElementById("anchor-display-triggers");
    let anchorDisplayTrigger0 = document.getElementById("anchor-display-trigger-0");
    let anchorDisplayTrigger1 = document.getElementById("anchor-display-trigger-1");
    let anchorDisplayTrigger2 = document.getElementById("anchor-display-trigger-2");

    /* hidden positive anchor page */
    let posAnchorDisplayPage = document.getElementById("pos-anchor-display-page");
    let posAnchorDisplayEmotion = document.getElementById("pos-anchor-display-emotion");
    let posAnchorDisplayIcon = document.getElementById("pos-anchor-display-icon");
    let posAnchorDisplayTriggers = document.getElementById("pos-anchor-display-triggers");
    let posAnchorDisplayTrigger0 = document.getElementById("pos-anchor-display-trigger-0");
    let posAnchorDisplayTrigger1 = document.getElementById("pos-anchor-display-trigger-1");
    let posAnchorDisplayTrigger2 = document.getElementById("pos-anchor-display-trigger-2");



    /* button pointers */
    let startDiscover = document.querySelectorAll(".discovery-button");

    let sessionDisplayButton = document.getElementById("sessions-button");

    let nextStepButtons = document.querySelectorAll(".next-step");
    let lastStepButtons = document.querySelectorAll(".last-step");

    let homeButtons = document.querySelectorAll(".home-button");
    let sessionDisplayHomeButton = document.getElementById("session-display-home-button");


    

    /* element pointers */
    let sessionDisplay = document.getElementById("session-display-container");
    let sessionTopDisplay = document.getElementById("session-top-pannel");

    /* page pointers */
    let introPage = document.getElementById('intro-page');

    let sentenceCompletion1 = document.getElementById("sentence-completion-1");
    let sentenceCompletion2 = document.getElementById("sentence-completion-2");
    let sentenceCompletion3 = document.getElementById("sentence-completion-3");
    let sentenceCompletion4 = document.getElementById("sentence-completion-4");
    let sentenceCompletion5 = document.getElementById("sentence-completion-5");
    let sentenceCompletion6 = document.getElementById("sentence-completion-6");
    let sentenceCompletion7 = document.getElementById("sentence-completion-7");
    let sentenceCompletion8 = document.getElementById("sentence-completion-8");
    let sentenceCompletion9 = document.getElementById("sentence-completion-9");
    let sentenceCompletion10 = document.getElementById("sentence-completion-10");
    let sentenceCompletion11 = document.getElementById("sentence-completion-11");
    let sentenceCompletion12 = document.getElementById("sentence-completion-12");
    let sentenceCompletion13 = document.getElementById("sentence-completion-13");
    let sentenceCompletion14 = document.getElementById("sentence-completion-14");
    let sentenceCompletion15 = document.getElementById("sentence-completion-15");


    /* event listeners */
    
    startDiscover.forEach(el => el.addEventListener("click", discoveryApp));

    nextStepButtons.forEach(el => el.addEventListener("click", nextStep));
    lastStepButtons.forEach(el => el.addEventListener("click", lastStep));

    homeButtons.forEach(el => el.addEventListener("click", goHome));
    homeButtons.forEach(el => el.addEventListener("click", hideTopPannel));
    
    
    sessionDisplayButton.addEventListener("click", togglesessionDisplay);

    sessionDisplayHomeButton.addEventListener("click", goHome);
    sessionDisplayHomeButton.addEventListener("click", togglesessionDisplay);






     /* array of page pointers */
    let pages = [
        introPage,
        sentenceCompletion1,
        sentenceCompletion2,
        sentenceCompletion3,
        sentenceCompletion4,
        sentenceCompletion5,
        sentenceCompletion6,
        sentenceCompletion7,
        sentenceCompletion8,
        sentenceCompletion9,
        sentenceCompletion10,
        sentenceCompletion11,
        sentenceCompletion12,
        sentenceCompletion13,
        sentenceCompletion14,
        sentenceCompletion15
    ]
    
    /* page tracker */
    let page = 0;


    /* sentences */
    let sentences = [];

    let emotions = [];

    let positiveEmotions = [];

    let triggers = [];

    let positiveTriggers = [];

    /* session object */
    let session = {
        target: "",
        negativeEmotionChoice: "",
        positiveEmotionChoice: "",
        triggers: [],
        positiveTriggerChoices: [],
        negativeEmotionIconChoice: "",
        positiveEmotionIconChoice: "",
        negativeSound: "",
        positiveEmotion: "",
        negativeSound: ""
    };





    /* functions */
    function displayPage(){
        for (var i = 0; i <= pages.length; i++){
            if (i === page){
                pages[i].classList.remove("hidden");
            }
        }
    }

    function clearPage(){
        pages[page].classList.add("hidden");
    }

    function nextStep() {
        clearPage();
        page = page + 1;
        displayPage();
    };

    function lastStep(){
        clearPage();
        page = page - 1;
        displayPage();
    }

    function lastStep() {
        clearPage();
        page = page - 1;
        displayPage();
    };

    function goHome(){
        clearPage();
        page = 0;
        displayPage();
    }

    function togglesessionDisplay(){
        if (sessionDisplay.style.visibility === "hidden"){
            sessionDisplay.style.visibility = "visible";
        }
        else {
            sessionDisplay.style.visibility = "hidden";
        }
    }

    function clearField(targetElement){
        targetElement.value = "";
    }

    function clearSessionDisplay(){
        if(sessionDisplay.style.visibility === "visible"){
            togglesessionDisplay();
        }
    }


    function playNegativeSound(){
            session.negativeSound.play();
        }

    function playPositiveSound(){
        session.positiveSound.play();
    }

    function hideTopPannel(){
        sessionTopDisplay.classList.add("hidden");
    }





/* test area */







    /* discovery app ******************************************************************************************************************************************* */


    function discoveryApp(){

        /* set up app start page */
        clearPage();
        page = 1;
        displayPage();
        clearSessionDisplay();
        


        /* page & element pointers */
        let sentenceDisplay = document.getElementById("sentence-display");
        let userInput = document.getElementById("user-sentence-input");
        

        /* button pointers */
        let sentenceSubmitButton = document.getElementById("sentence-submit-button");
        let delayedButton = document.getElementById("delayed-next-step");

        /* icon & sound pointers */
        let negativeIcons = document.querySelectorAll(".-emotion");
        let positiveIcons = document.querySelectorAll(".positive-emotion");
        let negativeSounds = document.querySelectorAll(".neg-sound");

        /* eventListeners */
        // Execute a function when the user releases a key on the keyboard
        userInput.addEventListener("keyup", function(event) {
            // Number 13 is the "Enter" key on the keyboard
                if (event.keyCode === 13) {
            // Cancel the default action, if needed
                    event.preventDefault();
             // Trigger the button element with a click
                    sentenceSubmitButton.click();
                }
            }); 
        sentenceSubmitButton.addEventListener("click", addUserSentence);
        delayedButton.addEventListener("click", clearSentenceDisplay);
        delayedButton.addEventListener("click", displaySentences);
        negativeIcons.forEach(el => el.addEventListener("click", savenegativeEmotionIconChoice));
        positiveIcons.forEach(el => el.addEventListener("click", savePositiveEmotion));
        
        

        
        
        





        /* discovery page 1 & 2 */
        
        function addUserSentence(){
            if (userInput.value !== ""){
                sentences.push(userInput.value);
                revealNextStepButton();
                clearField(userInput);
            }
            
        }

        function revealNextStepButton() {
            if (sentences.length > 2){
                delayedButton.classList.remove("hidden");
            }
        }


        function clearSentenceDisplay(){
            while (sentenceDisplay.firstChild) {
                sentenceDisplay.removeChild(sentenceDisplay.firstChild);
            }
        }

        function displaySentences(){
            let i = 0;
            sentences.forEach(el => {
                let sentenceHTML = '<div class="sentence-box" id="sentence'+i+'"><p>' + el + '</p></div>';
                sentenceDisplay.insertAdjacentHTML('beforeend', sentenceHTML);
                document.getElementById("sentence" + i).addEventListener("click", saveSentence);
                i++;
            })
        }

    
        function saveSentence(){
            let sentence = this.firstChild.innerHTML;
            let profileSentence = document.getElementById("chosen-topic");
            session.target = sentence;
            profileSentence.innerHTML = session.target;
            
        }

        



        


        /* page 3 */

        let emotionEntry = document.getElementById("emotion-entry");
        let emotionEntryButton = document.getElementById("enter-emotion-button");
        let emotionsEnteredButton = document.getElementById("emotions-entered");

        // Execute a function when the user releases a key on the keyboard
        emotionEntry.addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
        // Cancel the default action, if needed
                event.preventDefault();
         // Trigger the button element with a click
                emotionEntryButton.click();
            }
        });   

        emotionEntryButton.addEventListener("click", saveEmotion);
        emotionsEnteredButton.addEventListener("click", updateEmotionDescriptionDisplay);

        function saveEmotion(){
            if (emotionEntry.value !== ""){
                emotions.push(emotionEntry.value);
                emotionsEntered();
                clearEmotionField();
            }
            

        }

        function emotionsEntered(){
            if (emotions.length > 2){
                emotionsEnteredButton.classList.remove("hidden");
            }
        }

        function clearEmotionField(){
            emotionEntry.value = "";
        }


        







        /* page 4 */
        let emotionalSelectionDisplay = document.getElementById("emotion-selection-display");


        function updateEmotionDescriptionDisplay(){
            while (emotionalSelectionDisplay.firstChild) {
                emotionalSelectionDisplay.removeChild(emotionalSelectionDisplay.firstChild);
            }

            displayEmotions();
        }

        function displayEmotions(){
                let i = 0;
                emotions.forEach(el => {
                    let sentenceHTML = '<div class="emotion-entry-box" id="emotion'+i+'"><p>' + el + '</p></div>';
                    emotionalSelectionDisplay.insertAdjacentHTML('beforeend', sentenceHTML);
                    document.getElementById("emotion" + i).addEventListener("click", saveEmotionToObject);
                    i++;
                })
            }

            function saveEmotionToObject(){
                session.negativeEmotionChoice = this.firstChild.innerHTML;

                document.getElementById("neg-emotion-description").innerHTML = session.negativeEmotionChoice;
            }











            /* page 5 */
            let triggerInput = document.getElementById("trigger-entry");
            let triggerSubmitButton = document.getElementById("enter-trigger-button");
            let triggerEnteredButton = document.getElementById("triggers-entered");


            // Execute a function when the user releases a key on the keyboard
            triggerInput.addEventListener("keyup", function(event) {
            // Number 13 is the "Enter" key on the keyboard
                if (event.keyCode === 13) {
            // Cancel the default action, if needed
                    event.preventDefault();
             // Trigger the button element with a click
                    triggerSubmitButton.click();
                }
            }); 

            triggerSubmitButton.addEventListener("click", saveTrigger);
            triggerEnteredButton.addEventListener("click", updateTriggerDisplay);

            function saveTrigger(){
                if (triggerInput.value !== ""){
                    triggers.push(triggerInput.value);
                    triggersEntered();
                    clearTriggerField();
                }
                

            }

            function triggersEntered(){
                if (triggers.length > 2){
                    triggerEnteredButton.classList.remove("hidden");
                }
            }

            function clearTriggerField(){
                triggerInput.value = "";
            }



            







            /* page 6 */
            let negTriggerDisplay = document.getElementById("neg-emotion-triggers-description");
            let triggerSelectionDisplay = document.getElementById("trigger-selection-display");
            let deleteTriggerButton = document.getElementById("delete-trigger");
            let triggerNumber = 0;
            let currentHtmlTriggerElement = document.getElementById("trigger-" + triggerNumber);

            deleteTriggerButton.addEventListener("click", deleteTrigger);

        function updateTriggerDisplay(){
            while (triggerSelectionDisplay.firstChild) {
                triggerSelectionDisplay.removeChild(triggerSelectionDisplay.firstChild);
            }

            displayTriggers();
        }

        function displayTriggers(){
                let i = 0;
                triggers.forEach(el => {
                    let sentenceHTML = '<div class="emotion-entry-box" id="trigger'+i+'"><p>' + el + '</p></div>';
                    triggerSelectionDisplay.insertAdjacentHTML('beforeend', sentenceHTML);
                    document.getElementById("trigger" + i).addEventListener("click", saveTriggerToObject);
                    i++;
                })
            }

            function saveTriggerToObject(){
                if (session.triggers.length <= 2){
                    session.triggers.push(this.firstChild.innerHTML);
                    document.getElementById("neg-trigger-" + triggerNumber).innerHTML = session.triggers[triggerNumber];
                    triggerNumber++;
                }
            }


            function deleteTrigger(){
                if(triggerNumber > 0){
                    session.triggers.pop();
                    triggerNumber--;
                    document.getElementById("neg-trigger-" + triggerNumber).innerHTML = "";
                    
                }
            }

















        /* page 7 */
        function savenegativeEmotionIconChoice(){
            /* target session display */
            let negativeEmotionIconChoiceSessionDisplay = document.getElementById("neg-emotion-icon-display");
            let topDisplayNegativeIcon = document.getElementById("session-top-negative-anchor");
            /* clear home session display */
            while (negativeEmotionIconChoiceSessionDisplay.firstChild) {
                negativeEmotionIconChoiceSessionDisplay.removeChild(negativeEmotionIconChoiceSessionDisplay.firstChild);
            }


            
            
            /* clear session icon and sound */
            session.negativeEmotionIconChoice = "";
            session.negativeSound = "";

            /* save sessions icon and sound */
            session.negativeEmotionIconChoice = this.cloneNode(true);
            session.negativeSound = this.firstChild.cloneNode(true);

            /* play sound on click */
            session.negativeSound.play();
            session.negativeEmotionIconChoice.addEventListener("click", playNegativeSound);

            /* update session display */
            negativeEmotionIconChoiceSessionDisplay.appendChild(session.negativeEmotionIconChoice.cloneNode(true));
            
            
        }













        /* page 8 */
        let anchorButton = document.getElementById("set-off-anchor-button");

        anchorButton.addEventListener("click", setOffAnchor);




        function setOffAnchor(){
            anchorDisplayEmotion.innerHTML = session.negativeEmotionChoice;
            anchorDisplayIcon.appendChild(session.negativeEmotionIconChoice.cloneNode(true));
            anchorDisplayTrigger0.innerHTML = session.triggers[0];
            anchorDisplayTrigger1.innerHTML = session.triggers[1];
            anchorDisplayTrigger2.innerHTML = session.triggers[2];
            anchorDisplayPage.classList.add("pos-z-index");
            anchorDisplayPage.classList.add("reveal-page");
            setTimeout(playNegativeSound, 100);
            setTimeout(anchorHidePage, 1000);
        }

        function anchorHidePage(){
            anchorDisplayPage.classList.remove("reveal-page");
            setTimeout(changeZIndex, 400);
        }



        function changeZIndex(){
            anchorDisplayPage.classList.remove("pos-z-index");
            anchorDisplayEmotion.innerHTML = "";
            anchorDisplayIcon.innerHTML = "";
            anchorDisplayTrigger0.innerHTML = "";
            anchorDisplayTrigger1.innerHTML = "";
            anchorDisplayTrigger2.innerHTML = "";
        }










        /* page 9 */
        let positiveEmotionEntry = document.getElementById("positive-emotion-entry");
        let positiveEmotionEntryButton = document.getElementById("positive-emotion-entry-button");
        let positiveEmotionsEnteredButton = document.getElementById("positive-emotion-entered");

        // Execute a function when the user releases a key on the keyboard
            positiveEmotionEntry.addEventListener("keyup", function(event) {
            // Number 13 is the "Enter" key on the keyboard
                if (event.keyCode === 13) {
            // Cancel the default action, if needed
                    event.preventDefault();
             // Trigger the button element with a click
                    positiveEmotionEntryButton.click();
                }
            }); 
        

        positiveEmotionEntryButton.addEventListener("click", savePositiveEmotionChoice);
        positiveEmotionsEnteredButton.addEventListener("click", updatePositiveEmotionDescriptionDisplay);

        function savePositiveEmotionChoice(){
            if(positiveEmotionEntry.value !== ""){
                positiveEmotions.push(positiveEmotionEntry.value);
                positiveEmotionsEnteredCheck();
                clearPositiveEmotionField();
            }
            
        }

        function positiveEmotionsEnteredCheck(){
            if (positiveEmotions.length > 2){
                positiveEmotionsEnteredButton.classList.remove("hidden");
            }
        }

        function clearPositiveEmotionField(){
            positiveEmotionEntry.value = "";
        }








        /* page 10 */

        let positiveEmotionEntryDisplay = document.getElementById("positive-emotion-entry-display");
        let positiveEmotionDescription = document.getElementById("pos-emotion-description");

        function updatePositiveEmotionDescriptionDisplay(){
            while (positiveEmotionEntryDisplay.firstChild) {
                positiveEmotionEntryDisplay.removeChild(positiveEmotionEntryDisplay.firstChild);
            }

            displayPositiveEmotions();
        }

        function displayPositiveEmotions(){
                let i = 0;
                positiveEmotions.forEach(el => {
                    let sentenceHTML = '<div class="emotion-entry-box" id="positive-emotion'+i+'"><p>' + el + '</p></div>';
                    positiveEmotionEntryDisplay.insertAdjacentHTML('beforeend', sentenceHTML);
                    document.getElementById("positive-emotion" + i).addEventListener("click", savePositiveEmotionToObject);
                    i++;
                })
            }

            function savePositiveEmotionToObject(){
                session.positiveEmotionChoice = this.firstChild.innerHTML;
                positiveEmotionDescription.innerHTML = session.positiveEmotionChoice;
                
            }




            /* page 11 */
        let positiveTriggerEntry = document.getElementById("positive-trigger-entry");
        let positiveTriggerEntryButton = document.getElementById("positive-trigger-entry-button");
        let positiveTriggersEnteredButton = document.getElementById("positive-emotions-entered");


        // Execute a function when the user releases a key on the keyboard
        positiveTriggerEntry.addEventListener("keyup", function(event) {
            // Number 13 is the "Enter" key on the keyboard
                if (event.keyCode === 13) {
            // Cancel the default action, if needed
                    event.preventDefault();
             // Trigger the button element with a click
                    positiveTriggerEntryButton.click();
                }
            }); 

        positiveTriggerEntryButton.addEventListener("click", savePositiveTrigger);
        positiveTriggersEnteredButton.addEventListener("click", updatePositiveTriggersDescriptionDisplay);

        function savePositiveTrigger(){
            if(positiveTriggerEntry.value !== ""){
                positiveTriggers.push(positiveTriggerEntry.value);
                positiveTriggersEntered();
                clearPositiveTriggerField();
            }
            

        }

        function positiveTriggersEntered(){
            if (positiveTriggers.length > 2){
                positiveTriggersEnteredButton.classList.remove("hidden");
            }
        }

        function clearPositiveTriggerField(){
            positiveTriggerEntry.value = "";
        }










        /* page 12 */
        let positiveTriggerEntryDisplay = document.getElementById("positive-trigger-entry-display");
        let posTriggerNumber = 0;
        let deletePositiveTriggerButton = document.getElementById("delete-pos-trigger");

        deletePositiveTriggerButton.addEventListener("click", deletePosTrigger);


        function updatePositiveTriggersDescriptionDisplay(){
            while (positiveTriggerEntryDisplay.firstChild) {
                positiveTriggerEntryDisplay.removeChild(positiveTriggerEntryDisplay.firstChild);
            }

            displayPositiveTriggers();
        }

        function displayPositiveTriggers(){
                let i = 0;
                positiveTriggers.forEach(el => {
                    let sentenceHTML = '<div class="emotion-entry-box" id="positive-trigger'+i+'"><p>' + el + '</p></div>';
                    positiveTriggerEntryDisplay.insertAdjacentHTML('beforeend', sentenceHTML);
                    document.getElementById("positive-trigger" + i).addEventListener("click", savePositiveTriggerToObject);
                    i++;
                })
            }


            function savePositiveTriggerToObject(){
                if (session.positiveTriggerChoices.length <= 2){
                    session.positiveTriggerChoices.push(this.firstChild.innerHTML);
                    document.getElementById("pos-trigger-" + posTriggerNumber).innerHTML = session.positiveTriggerChoices[posTriggerNumber];
                    posTriggerNumber++;
                }
            }


            function deletePosTrigger(){
                if(posTriggerNumber > 0){
                    session.positiveTriggerChoices.pop();
                    posTriggerNumber--;
                    document.getElementById("pos-trigger-" + posTriggerNumber).innerHTML = "";
                    
                }
            }


















        /* page 13 */
        function savePositiveEmotion(){
            let positiveEmotionSessionDisplay = document.getElementById("pos-emotion-icon-display");

            while (positiveEmotionSessionDisplay.firstChild) {
                positiveEmotionSessionDisplay.removeChild(positiveEmotionSessionDisplay.firstChild);
            }

            session.positiveEmotionIconChoice = "";
            session.positiveSound = "";

            session.positiveEmotionIconChoice = this.cloneNode(true);
            session.positiveSound = this.firstChild.cloneNode(true);

            session.positiveSound.play();
            session.positiveEmotionIconChoice.addEventListener("click", playPositiveSound);
            
            
            positiveEmotionSessionDisplay.appendChild(session.positiveEmotionIconChoice);
            
        }











        /* page 14 */

        let posAnchorButton = document.getElementById("set-off-pos-anchor-button");

        posAnchorButton.addEventListener("click", setOffPosAnchor);

        function setOffPosAnchor(){
            posAnchorDisplayEmotion.innerHTML = session.positiveEmotionChoice;
            posAnchorDisplayIcon.appendChild(session.positiveEmotionIconChoice.cloneNode(true));
            posAnchorDisplayTrigger0.innerHTML = session.positiveTriggerChoices[0];
            posAnchorDisplayTrigger1.innerHTML = session.positiveTriggerChoices[1];
            posAnchorDisplayTrigger2.innerHTML = session.positiveTriggerChoices[2];
            posAnchorDisplayPage.classList.add("pos-z-index");
            posAnchorDisplayPage.classList.add("reveal-page");
            setTimeout(playPositiveSound, 100);
            setTimeout(posAnchorHidePage, 1000);
        }

        function posAnchorHidePage(){
            posAnchorDisplayPage.classList.remove("reveal-page");
            setTimeout(changePosAnchorZIndex, 400);
        }



        function changePosAnchorZIndex(){
            posAnchorDisplayPage.classList.remove("pos-z-index");
            posAnchorDisplayEmotion.innerHTML = "";
            posAnchorDisplayIcon.innerHTML = "";
            posAnchorDisplayTrigger0.innerHTML = "";
            posAnchorDisplayTrigger1.innerHTML = "";
            posAnchorDisplayTrigger2.innerHTML = "";
        }






        /* page 15 */
        let testPositiveAnchorButton = document.getElementById("test-positive-anchor");
        let testNegativeAnchorButton = document.getElementById("test-negative-anchor");

        testPositiveAnchorButton.addEventListener("click", setOffPosAnchor);
        testNegativeAnchorButton.addEventListener("click", setOffAnchor);








    }    






})();