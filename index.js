
var APP_ID = undefined; //replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var AlexaSkill = require('./AlexaSkill');

var NETWORK_DETAILS = require('./network_details')

var NETWORK_NAME = NETWORK_DETAILS.network_name;
var PASSWORD_AS_SPOKEN = NETWORK_DETAILS.password_as_spoken;
var CURRENT_ADDRESS = NETWORK_DETAILS.address;

/**
 * WifiDetail is a child of AlexaSkill.
 */
var WifiDetail = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
WifiDetail.prototype = Object.create(AlexaSkill.prototype);
WifiDetail.prototype.constructor = WifiDetail;

WifiDetail.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("WifiDetail onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

WifiDetail.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("WifiDetail onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);

    var speechOutput = "Welcome to " + CURRENT_ADDRESS + ". "
                + "If you'd like to know how to get on the wireless, "
                + "ask me how to connect.";

    response.ask(speechOutput);
};

WifiDetail.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("WifiDetail onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

WifiDetail.prototype.intentHandlers = {
    // register custom intent handlers
    HelpIntent: function (intent, session, response) {
        response.ask("I can tell you how to get on the wireless internet in this apartment!");
    },
    WifiDetailsIntent: function (intent, session, response) {
        response.tell("The network is " + NETWORK_NAME + ". and the password is " + PASSWORD_AS_SPOKEN);
    }
};

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the WifiDetail skill.
    var wifiDetail = new WifiDetail();
    wifiDetail.execute(event, context);
};
