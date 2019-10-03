// Creates pseudo-unique ids for articles
export function createArticleIds(articles) {
  return articles.map(article => {
    const spacelessTitle = removePunctuationFromString(article.title);
    article._id =
      spacelessTitle[0] +
      spacelessTitle[1] +
      removePunctuationFromString(article.url)[9] +
      removePunctuationFromString(article.url)[12] +
      article.publishedAt[15] +
      article.publishedAt[18];
    return article;
  });
}
// Returns URL query params as object
export function getParams() {
  return location.search
    .substring(1)
    .split("&")
    .reduce((acc, curr) => {
      const [key, value] = curr.split("=");

      acc[key] = value;
      return acc;
    }, {});
}
// Formats and returns date in MMMM/DD/YYYY format
export function formatDate(dateStr) {
  const date = new Date(dateStr);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  return date.toLocaleDateString(options);
}

export function removePunctuationFromString(str) {
  return str.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").replace(/\s/g, "");
}
