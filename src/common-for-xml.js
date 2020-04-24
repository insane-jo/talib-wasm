const xml2js = require('xml2js');

if (typeof require !== 'undefined' && typeof require.extensions !== 'undefined') {
    require.extensions['.xml'] = function (module, filename) {
        var fs = require('fs');

        const xml = fs.readFileSync(filename, 'utf8');

        module.exports = new Promise((resolve, reject) => {
            xml2js.parseString(xml, function (err, result) {
                if (err) {
                    return reject(err);
                }

                resolve(result)
            });
        })

    };
}
