async function requestPermission() {
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
        return false;
    }
    else if (Notification.permission === "granted") {
        return true;
    }
    else if (Notification.permission !== "denied") {
        Notification.requestPermission();
        if (Notification.permission === "granted") {
            return true;
        }
    }
    return false;
}

function notifyMe() {
    var notification = new Notification("Hi there!", {
        body: "This is a notification from the Notification API",
        icon: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
    })
    notification.onclick = function (event) {   
        event.preventDefault(); // prevent the browser from focusing the Notification's tab
        window.open('http://www.mozilla.org', '_blank');
    }
}

notifyMe();