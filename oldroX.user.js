// ==UserScript==
// @name         roxfrfr
// @version      1.4
// @description  pwned ggez k ngo no chi co nhieu day :)))
// @author       anhwaivo
// @include      *://*/*
// @match        https://www.rophim.me/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(async function() { // script nay la ban cu truoc khi ban public cua dabeecao up xuat hien :))
    const originalOpen = XMLHttpRequest.prototype.open;
    const originalSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.open = function(method, url) {
        this._url = url;
        return originalOpen.apply(this, arguments);
    };
    XMLHttpRequest.prototype.send = function() {
        this.addEventListener('load', function() {
            try {
                if (this._url.includes("/v1/user/info")) {
                    let data = JSON.parse(this.responseText);
                    data.result.is_vip = true;
                    data.result.role = "vip";
                    data.result.vip_expired_at = Date.now() + 10*365*24*60*60*1000;
                    data.result.coin_balance = 999999999;
                    data.result.name = "anhwaivo";
                    Object.defineProperty(this, 'responseText', { value: JSON.stringify(data) });
                    Object.defineProperty(this, 'response', { value: JSON.stringify(data) });
                }
            } catch (e) {
                console.error("bruh:", e);
            }
        });
        return originalSend.apply(this, arguments);
    };
})();
