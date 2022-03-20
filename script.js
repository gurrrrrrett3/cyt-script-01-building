const fs = require("fs");
const yaml = require("js-yaml");

const inDir = "./data-in/";
const outDir = "./data-out/";

let files = fs.readdirSync(inDir);

files.forEach((file) => {
  let data = yaml.load(fs.readFileSync(inDir + file, "utf8"));

  if (data == undefined) return;
  if (data.options == undefined) return;

  data.options.repeatable = true;
  data.options.cooldown.enabled = true;
  data.options.cooldown.time = 10080;

  fs.writeFileSync(outDir + file, yaml.dump(data));
  console.log(file + " done");
});