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

const formatter = new Intl.DateTimeFormat('en-GB', DATE_TIME_FORMAT);

const getLocalIsoString = () => {
  const now = new Date();
  const parts = formatter
    .formatToParts(now)
    .filter(({ type }) => type !== 'literal')
    .map(({ type, value }) => [type, value]);
  const date = Object.fromEntries(parts);
  const { year, month, day, hour, minute, second } = date;
  console.log(date);
  const zone = date.timeZoneName.slice(3);
  return `${year}-${month}-${day}T${hour}:${minute}:${second}${zone}`;
};

// Usage

console.log(getLocalIsoString());
// Output: 2025-06-27T02:00:54+03:00
