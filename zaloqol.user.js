// ==UserScript==
// @name         Zalo QOL improvement
// @namespace    https://e-z.bio/anhwaivo
// @author       Anhwaivo
// @version      1.3
// @description  some quality of life improvement
// @match        https://chat.zalo.me/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // click the annoying download zalo pc banner
    new MutationObserver((_, o) => { let e = document.querySelector('div[icon="Close_24_Line"].z-banner__close'); if (e) { e.click(); o.disconnect(); }}).observe(document.body, {childList: true, subtree: true});

    // prevent annoying dangerous link check
    document.addEventListener('click', e => {
        const link = e.target.closest('.message-content-render a.text-is-link');
        if (link) {
            e.preventDefault();
            e.stopPropagation();
            let url = link.getAttribute('data-content');
            if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
            window.open(url, '_blank');
        }
    }, true);
})();
