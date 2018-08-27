'use strict';

var os = require('os');
var path = require('path');

var util = {
    // get absolute path to cwd
    cwdPath: function() {
        var argvs = Array.prototype.slice.call(arguments);
        argvs.unshift(process.cwd());
        return path.join.apply(path, argvs);
    },
    // write process info
    writeProcessInfo: function(info) {
        try {
            var infoPath = path.join(os.tmpdir(), '.glon-server-' + info.uid + '.json');
            fs.writeFileSync(infoPath, JSON.stringify(info, null, '  '));
            return info;
        } catch (e) {
            return null;
        }
    },
};

module.exports = util;