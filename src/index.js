var format = require("./format");

var rDate = class rDate extends Date {
  constructor(dateStr) {
    super(dateStr);
  }

  format(formatDate) {
    return format(this, formatDate);
  }
};

module.exports = rDate;
