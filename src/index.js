import {format} from './format';



export default class rDate extends Date {
  constructor(dateStr) {
    super(dateStr);
  }

  format(formatDate) {
    return format(formatDate);
  }
}
