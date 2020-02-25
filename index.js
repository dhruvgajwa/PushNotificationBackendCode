

const webPush = require('web-push');

const vapidKeys = {
    "publicKey":"....",
    "privateKey":"...."
};

var pushSubscription = {"endpoint": "....",
"keys":{"p256dh":"....", "auth":"...."}};

webPush.setVapidDetails(
    'mailto:dhruvg.dakshana16@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);


    const notificationPayload = {
        "notification": {
            "title": "Angular News",
            "body": "Newsletter Available!",
            "icon": "https://developers.google.com/web/images/contributors/josephmedley.jpg",
            "vibrate": [100, 50, 100],
            "data": {
                "dateOfArrival": Date.now(),
                "primaryKey": 1
            },
            "actions": [{
                "action": "explore",
                "title": "Go to the site"
            }]
        }
    };


    try{
    webPush.sendNotification(
        pushSubscription,
        JSON.stringify(notificationPayload)
      ).then(res => {
          console.log(res);
      }).catch( e => {
          console.log(e)
      });
} catch(e) {
    console.log(e);
}

