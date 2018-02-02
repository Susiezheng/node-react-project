let fs = require("fs");
let path = require("path");
let exec = require("child_process").exec;
// const hasha = require('hasha');
// let packageJsonMd5Current = '';
// let webpackDllConfigJsMd5Current = '';

let func = {
    // 运行npm的命令
    npmCmd: function (cmdStr) {
        console.log('Running,please wait...');
        console.time(cmdStr);
        let child = exec(cmdStr, {
            encoding: 'utf8',
            timeout: 0, /*子进程最长执行时间 */
            maxBuffer: Number.MAX_VALUE, /*stdout和stderr的最大长度*/
            killSignal: 'SIGTERM',
            cwd: null,
            env: null
        });

        child.stdout.on('data', function (data) {
            console.log(data + '');
        });
        child.stderr.on('data', function (data) {
            console.log(data + '');
        });
        child.on('close', function (code) {
            console.log('closing code:\n' + code);
            // fs.writeFileSync(path.join(__dirname, 'package.json.md5'), packageJsonMd5Current);
            // fs.writeFileSync(path.join(__dirname, 'webpack.dll.config.md5'), webpackDllConfigJsMd5Current);
            console.timeEnd(cmdStr);
        })
    },
    // 检查package.json和webpack.dll.config文件是否有改动
    // md5Check: function () {
    //     let packageJsonMd5 = '';
    //     let webpackDllConfigJsMd5 = '';
    //     let isSame = false;
    //     try {
    //         packageJsonMd5 = fs.readFileSync('package.json.md5').toString();
    //         webpackDllConfigJsMd5 = fs.readFileSync('webpack.dll.config.md5').toString();
    //         packageJsonMd5Current = hasha.fromFileSync('package.json', {algorithm: 'md5'});
    //         webpackDllConfigJsMd5Current = hasha.fromFileSync('webpack.dll.config.js', {algorithm: 'md5'});
    //         isSame = packageJsonMd5 === packageJsonMd5Current && webpackDllConfigJsMd5 === webpackDllConfigJsMd5Current;
    //         return isSame
    //     } catch (ex) {
    //         fs.writeFileSync(path.join(__dirname, 'package.json.md5'), '');
    //         fs.writeFileSync(path.join(__dirname, 'webpack.dll.config.md5'), '');
    //         return isSame
    //     }
    // }
};

module.exports = func;