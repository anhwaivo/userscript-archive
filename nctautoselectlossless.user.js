// ==UserScript==
// @name         nct auto lossless
// @namespace    https://bio.anhwaivo.xyz/
// @version      3.1
// @description  automatically select lossless quality :)
// @author       Anhwaivo
// @match        https://www.nhaccuatui.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function select() {
        const btn = document.querySelector('.kbps-wrap.btn-class');
        if (!btn || btn.textContent.trim() === 'lossless') return;
        btn.closest('[role="button"]')?.click();
        setTimeout(() => {
            [...document.querySelectorAll('.menu-item span')]
                .find(s => s.textContent.trim() === 'lossless')?.parentElement.parentElement.click();
        }, 200);
    }
    const check = () => document.body ? (setTimeout(select, 1000), new MutationObserver(select).observe(document.body, {childList: true, subtree: true})) : setTimeout(check, 100);
    check();
})();
