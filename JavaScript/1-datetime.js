'use strict';

// Requires node.js 18

const DATE_TIME_FORMAT = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'longOffset',
};

// Sweden
const formatter = new Intl.DateTimeFormat('sv-SE', DATE_TIME_FORMAT);

const date = new Date();
const parts = formatter.formatToParts(date);
console.log(parts);

const s = parts.map(({ value }) => value).join('');
console.log(s);
// Output: 2025-06-27 02:00:54 GMT+03:00
