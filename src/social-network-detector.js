var socialNetworkPatterns = require('./data/social-networks-patterns');
var uriParser = require('./parser');

/**
 * Returns the name of a social platform from by uri.
 *
 * This method accepts http/https protocol, also mobile application
 * protocols like `android-app://`.
 * So all these URIs will detected as `facebook`
 *  - http://m.facebook.com/
 *  - android-app://com.facebook.lite/
 *  - https://lm.facebook.com/
 *
 * @param {string} uri
 *
 * @return {string|null}
 */
exports.detect = function (uri) {
    var uriParts = uriParser(uri);

    for (var socialNetworkLabel in socialNetworkPatterns) {
        if (!socialNetworkPatterns.hasOwnProperty(socialNetworkLabel)) {
            continue;
        }

        for (var searchRegexp of socialNetworkPatterns[socialNetworkLabel]) {
            if (searchRegexp.test(uriParts.host)) {
                return socialNetworkLabel;
            }
        }
    }

    return null;
}

/**
 * Returns a list of social platforms supported by this library
 *
 * @return {string[]}
 */
exports.getNetworksList = function() {
    return Object.keys(socialNetworkPatterns);
}
