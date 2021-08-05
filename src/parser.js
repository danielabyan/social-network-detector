var urlParser = require('url');

/**
 * Returns schema and host
 *
 * This is a simple wrapper for the `url` library.
 *
 * @param {string} uri
 *
 * @return {{path: (string|null), protocol: (string|null), host: string}}
 */
module.exports = function (uri) {
    var parsedUrl = urlParser.parse(uri, true);

    return {
        protocol: parsedUrl.protocol ? parsedUrl.protocol.substr(0, parsedUrl.protocol.length - 1) : null,
        host: parsedUrl.hostname,
        path: parsedUrl.pathname ? parsedUrl.pathname.substr(1, parsedUrl.pathname.length) : null,
    };
}
