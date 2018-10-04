const bayes = require("classificator");
const fs = require("fs");
const classifier = bayes.fromJson(
  fs.readFileSync(__dirname + "/classifier.json").toString()
);

module.exports = async string => {
  if (!string) return;
  return classifier.categorize(string);
};
