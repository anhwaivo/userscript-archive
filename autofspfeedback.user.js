// ==UserScript==
// @name         auto fsp feedback
// @namespace    https://bio.anhwaivo.xyz
// @version      1.1
// @description  this saved 15 minutes of my life by rating all teacher 5 star
// @author       Anhwaivo
// @match        https://fsp.fpt.edu.vn/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
  
    // vibe coded in 5 minutes
    function clickAllRadioButtons() {
        const radioButtons = document.querySelectorAll('input[type="radio"][value="5"]');
        let clicked = false;
        radioButtons.forEach(button => {
            if (!button.checked) {
                button.click();
                clicked = true;
            }
        });
        return clicked;
    }
    clickAllRadioButtons();
    const observer = new MutationObserver(function(mutations) {
        if (clickAllRadioButtons()) {
            // idk
        }
    });
    observer.observe(document, {
        childList: true,
        subtree: true
    });
})();
