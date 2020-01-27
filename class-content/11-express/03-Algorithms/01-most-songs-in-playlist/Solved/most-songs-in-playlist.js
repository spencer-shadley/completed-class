'use strict';

// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

const mostSongsInPlaylist = function(arr) {
  const sortedArr = arr.sort();
  const totalMins = 0;
  const totalSongs = 0;

  for (let i = 0; i < sortedArr.length; ++i) {
    const currentSongDuration = sortedArr[i];

    if (totalMins + currentSongDuration <= 60) {
      totalMins += currentSongDuration;
      totalSongs++;
    } else {
      return totalSongs;
    }
  }

  return totalSongs;
};
