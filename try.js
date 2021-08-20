function anotherEventListener(typeOfEvent, callbackFunction) {
    var evt = {
        eventType: "keypress",
        key: "k",
        timeTaped: 2
    };
    if (evt.eventType === typeOfEvent)
        callbackFunction();
}