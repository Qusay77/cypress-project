const preprocess = require("./preprocess");

module.exports = (on) => {
	on("file:preprocessor", preprocess);
};
