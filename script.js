/* eslint-env browser */

(function() {
    var chatBox = document.getElementById("chatBox");
    var chatIn = document.getElementById("chatIn");
    var chatMessages = document.getElementById("chatMessages");
    var chatStarted = false;

    window.handleChat = function() {
        var currentStyle = window.getComputedStyle(chatBox).display;

        if (currentStyle === "none") {
            chatBox.style.display = "flex";
            chatIn.focus();
            
            if (!chatStarted) {
                setTimeout(function() {
                    addMessage("ai", "Zdravo! Ja sam Sohamir AI asistent. Kako Vam mogu pomoći oko Vašeg digitalnog projekta?");
                }, 500);
                chatStarted = true;
            }
        } else {
            chatBox.style.display = "none";
        }
    };

    chatIn.onkeypress = function(e) {
        var key = e.keyCode || e.which;
        if (key === 13 && chatIn.value.trim() !== "") {
            var txt = chatIn.value;
            addMessage("user", txt);
            chatIn.value = "";
            
            setTimeout(function() {
                addMessage("ai", generateResponse(txt));
            }, 650);
        }
    };

    function addMessage(type, text) {
        var div = document.createElement("div");
        div.style.margin = "10px 0";
        div.style.padding = "12px 16px";
        div.style.borderRadius = "15px";
        div.style.fontSize = "13px";
        div.style.clear = "both";
        div.style.maxWidth = "85%";
        div.style.wordWrap = "break-word";

        if (type === "user") {
            div.style.background = "#334155";
            div.style.color = "white";
            div.style.float = "right";
            div.style.borderBottomRightRadius = "2px";
        } else {
            div.style.background = "rgba(0, 210, 255, 0.1)";
            div.style.color = "#00d2ff";
            div.style.border = "1px solid rgba(0, 210, 255, 0.2)";
            div.style.float = "left";
            div.style.borderBottomLeftRadius = "2px";
        }

        div.innerText = text;
        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function generateResponse(input) {
        var str = input.toLowerCase();
        if (str.indexOf("wedding") !== -1 || str.indexOf("vjenčanje") !== -1) 
            return "Naš Wedding paket (200 KM) uključuje RSVP, galeriju i odbrojavanje.";
        if (str.indexOf("cijena") !== -1 || str.indexOf("koliko") !== -1) 
            return "Cijene kreću od 200 KM za biznis stranice, dok su Fullstack sistemi između 1000 i 2000 KM.";
        return "Najbolje je da nas kontaktirate na WhatsApp za brzi odgovor.";
    }
})();