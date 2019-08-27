function Movie(releaseYear, title) {
  this.releaseYear = releaseYear;
  this.title = title;
}

Movie.prototype.logInfo = function() {
  console.log(`${this.title} was release in ${this.releaseYear}`);
}

var newmovie = new Movie("l", "p")
newmovie.logInfo = ()=>console.log("yo")
newmovie.logInfo()