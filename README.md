# Wifi Details Alexa Skill

###Once set up, you can use it like this:

```
>> Alexa ask wireless internet for the connection details

The network is gibson. and the password is hack the planet hack the planet.
all lower case and underscore separated.
```

###How to Deploy
1. create a network_details.js file with your network name and password.
1. get an amazon account. get an amazon echo. sign up to be an amazon developer. make sure you use the same email address for all of these things because :troll:
1. you'll need to register the skill with the alexa service. the important thing here is pasting the intent schema and the sample utterances into the "Interaction Model." i've found this process to be incredibly unreliable and error prone and user unfriendly, even by AWS standards. stick with it though. i wasted 30 minutes looking into meaningless error messages when things were actually working just fine.
1. zip up *.js and upload to lambda as a new function. or put it on s3. whatever you wish.
1. enable the development app in your echo app.

this was a pretty solid video: https://www.youtube.com/watch?v=ZxXWphy6Rs4

###Future Work
1. make it way more dynamic. let an arbitrary user set their network name and password, and persist that somewhere across sessions.
1. do something completely different and much more challenging.
