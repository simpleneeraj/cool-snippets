const fs = require("fs");
const path = require("path");

const readAll = () => {
  const empty = [];
  const folder = fs.readdirSync("./fonts");
  for (let i = 0; i < folder.length; i++) {
    const subFolder = folder[i];
    const files = fs.readdirSync(`./fonts/${subFolder}`);
    for (let e = 0; e < files.length; e++) {
      const file = files[e];
      empty.push({
        name: path.basename(file, path.extname(file)),
        url: `./fonts/${subFolder}/${file}`,
      });
      fs.writeFileSync("./font.json", JSON.stringify(empty));
    }
  }
};

readAll();
