import fs from "node:fs";

if (fs.existsSync("./github")) {
  fs.rmdirSync("./github", { recursive: true, force: true });
}

fs.mkdirSync("./github");
fs.mkdirSync("./github/remote-react");
fs.mkdirSync("./github/remote-vue");

fs.cpSync("./host-app/dist", "./github", { recursive: true });
fs.cpSync("./remote-react/dist", "./github/remote-react", { recursive: true });
fs.cpSync("./remote-vue/dist", "./github/remote-vue", { recursive: true });
