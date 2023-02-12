module.exports = {
    locales: ["en"],
    sourceLocale: "en",
    catalogs: [{
       path: "src/locales/{locale}/messages",
       include: ["src"]
    }],
    format: "json"
 }
