// You are given the following information, but you may prefer to do some research for yourself.

// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
// Janruary 1 1900 = Monday
// Janruary 1 1901 = Tuesday

// Janruary 1 1901 --> December 31 2000
// Total number of Sundays on the 1st of months

// 100 years = 36525 days

const dateTime = require('date-time');

const countingSundays = () => {

    let sundays = 0;

    for (let year = 1901; year <= 2000; year++) {
        for (let month = 1; month <= 12; month++) {
            if ((new dateTime(year, month, 1)).DayOfWeek === DayOfWeek.Sunday) {
                sundays++;
            }
        }
    }

    return sundays;
};

console.log(countingSundays());

