const bayes = require("classificator");
const fs = require("fs");
const langs = JSON.parse(fs.readFileSync(__dirname + "/langs.json").toString());
const classifier = bayes.fromJson(
  fs.readFileSync(__dirname + "/classifier.json").toString()
);

module.exports = async string => {
  if (!string) return;
  const results = classifier.categorize(string);
  if (!results || !results.likelihoods || results.likelihoods.length == 0)
    return [];

  return results.likelihoods.reduce((acc, cur) => {
    if (cur.proba > 0.05)
      acc.push({
        code: cur.category,
        name: langs[cur.category].name,
        confidence: (cur.proba.toFixed(3) * 100).toFixed(2)
      });
    return acc;
  }, []);
};
