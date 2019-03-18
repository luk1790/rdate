const parseNumber = dateNumber =>
  dateNumber.toString().length === 1 ? `0${dateNumber}` : `${dateNumber}`;


export const format = (format = "DD-MM-YYYY") => {
    let tempDate = format;
    tempDate = tempDate.replace("DD", `${parseNumber(this.getDate())}`);
    tempDate = tempDate.replace("MM", `${parseNumber(this.getMonth() + 1)}`);
    tempDate = tempDate.replace("YYYY", `${this.getFullYear()}`);
    tempDate = tempDate.replace(
      "YY",
      `${this.getFullYear()
        .toString()
        .slice(2, 4)}`
    );
    return tempDate;
  };