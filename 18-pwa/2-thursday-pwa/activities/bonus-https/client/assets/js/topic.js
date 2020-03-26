import { loadArticles } from './API';
import { renderArticles } from './domMethods';
import { useIndexedDb } from './indexedDb';

// Call renderArticles on page load
function loadPage() {
  useIndexedDb(`articles`, `ArticleStore`, `get`).then(results => {
    const favorites = results;
    loadArticles().then(data => {
      const mappedData = data.map(article => {
        article.favorite = false;
        // eslint-disable-next-line max-nested-callbacks
        favorites.forEach(fav => {
          if (article._id === fav._id) {
            article.favorite = true;
          }
        });
        return article;
      });
      renderArticles(mappedData, loadPage);
    });
  });

  Notification.requestPermission(status => {
    console.log(status);
  });
}

loadPage();


