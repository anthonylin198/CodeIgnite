// next.config.js
const withImages = require("next-images");
const withFonts = require("next-fonts");

module.exports = withFonts(
  withImages({
    env: {
      MONGO_URI:
        "mongodb+srv://anthonylin198:anthonylin198@igniteprogrammingdb.ucsf3.mongodb.net/<dbname>?retryWrites=true&w=majority",
    },
  })
);
