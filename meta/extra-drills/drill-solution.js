'use strict'

// TODO: in-progress
// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

function formatDuration(seconds) {
  const mapping = [
    { 'seconds': 60 },
    { 'minutes': 60 },
    { 'hours': 24 },
    { 'days': 365 },
    { 'years': 1 }
  ];

  for (const map of mapping) {
    
  }

  let seconds = seconds % 60;
  let minutes = seconds / 60;
  let hours = minutes % 60;
  
  let remainder = minutes / 60;
  
  let days = remainder % 24;
  
  console.log(days);
}

formatDuration(62);