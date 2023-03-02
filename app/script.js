const fs = require("fs");
const { generateDashboardTerraformCode } = require("./dashboard-converter");
const filename = process.argv[2];
fs.readFile(filename, "utf8", function (err, data) {
  if (err) throw err;
  console.log(generateDashboardTerraformCode("dashboard", JSON.parse(data)));
});
