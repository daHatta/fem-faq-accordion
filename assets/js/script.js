"use strict";

const faq = document.getElementById("faqGroup");


const hideAllPanels = (base) => {

    let listFaqButtons = base.querySelectorAll("button.faq-trigger");

    for (let i = 1; i <= listFaqButtons.length; i++) {
        
        let faqBtn = document.getElementById("faq" + i + "id");
        let region = document.getElementById("sect" + i);

        faqBtn.setAttribute("aria-expanded", "false");
        region.classList.add("hidden");
    }

};


const showPanel = (item) => {

    hideAllPanels(faq);

    let currentBtn = document.getElementById("faq" + item + "id");
    let currentRegion = document.getElementById("sect" + item);

    currentBtn.setAttribute("aria-expanded", "true");
    currentRegion.classList.remove("hidden");

};


const initFaq = (base) => {
    
    let listButtons = base.querySelectorAll("button.faq-trigger");

    listButtons.forEach((button, key) => {
        let index = key + 1;
        button.addEventListener("click", () => {
            showPanel(index);
        })
    });

};


initFaq(faq);
