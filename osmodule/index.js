const os = require("os");

console.log(os.arch());
console.log(os.platform());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.type());
console.log(os.tmpdir());
console.log(os.userInfo());
console.log(os.uptime());
console.log("total memory", `${os.totalmem() / 1024 / 1024 / 1024}`);
console.log("free memory", `${os.freemem() / 1024 / 1024 / 1024}`);
console.log(os.release());
console.log(os.version());
console.log(os.totalmem());
console.log(os.networkInterfaces());

