var sms = require('free-mobile-sms-api');
 
sms.account(8801871601606,'c9ce6b87-38a5-425e-88d5-babb392ff7ec');
sms.send("Hello world!");

sms.on('sms:error', function(e) {
    console.log(e.code + ": " + e.msg);
  });
   
  sms.on('sms:success', function(data) {
    console.log("Success! :D");
  });