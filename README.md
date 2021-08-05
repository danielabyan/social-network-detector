# Social Network Detector

This library allows you to define a social platform by URI.

The library accepts http/https protocol (also mobile application protocols like `android-app://`). So all these URIs will detected as `facebook`
- http://m.facebook.com/
- android-app://com.facebook.lite/
- https://lm.facebook.com/


## Installation
This module is designed to be used using either browserify or Node.js it's released in the public npm registry and can be installed using:
```
npm install social-network-detector
```


## Usage
Use the `getNetworksList` method to get a list of all supported platforms
```
var socialNetworkDetector = require('./src/social-network-detector');

socialNetworkDetector.getNetworksList();

/* 
* Will return a similar array
* [ 
*   'facebook', 'twitter', 'linkedin', 'reddit', 'vkontakte', 'pinterest', 'tumblr', 'telegram', 
*   'snapchat', 'slack', 'youtube', 'whatsapp', 'wechat', 'instagram', 'qq', 'tiktok', 'medium', 
*   'quora', 'weibo', 'twitch', 'discord'
* ]
*/
```
Here are some examples of the library in action
```
var socialNetworkDetector = require('social-network-detector');

socialNetworkDetector.detect('https://staticxx.facebook.com/platform/'); // facebook
socialNetworkDetector.detect('android-app://com.linkedin.android'); // linkedin
socialNetworkDetector.detect('https://twitter.com/abyandaniel/status/1371762841066348544?s=20'); // twitter
socialNetworkDetector.detect('https://google.com/'); // null, since this is not a social platform
socialNetworkDetector.detect('https://newsstand.joomag.com/en/'); // null, since this is not a social platform
socialNetworkDetector.detect('https://t.co/Jyx44u722z?amp=1'); // twitter
```

## License

MIT

