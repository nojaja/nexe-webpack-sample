const nexe = require('nexe');

nexe.compile({
    input: './dist/main.bundle.js',
    output: './dist/sample',
    target: 'windows-x86-14.15.3',
    nodeTempDir: __dirname,
    resources: ["./assets/**/*"]
}, function (err) {
    if (err) console.log(err);
});