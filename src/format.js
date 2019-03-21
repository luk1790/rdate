const parseNumber = dateNumber =>
  dateNumber.toString().length === 1 ? `0${dateNumber}` : `${dateNumber}`;


const format = (date, format = "DD-MM-YYYY") => {
    let tempDate = format;
    console.log(this);
    tempDate = tempDate.replace("DD", `${parseNumber(date.getDate())}`);
    tempDate = tempDate.replace("MM", `${parseNumber(date.getMonth() + 1)}`);
    tempDate = tempDate.replace("YYYY", `${date.getFullYear()}`);
    tempDate = tempDate.replace(
      "YY",
      `${date.getFullYear()
        .toString()
        .slice(2, 4)}`
    );
    return tempDate;
  };

  module.exports = format;