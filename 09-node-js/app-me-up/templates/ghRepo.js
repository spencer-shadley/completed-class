"use strict";

const ghCss = `
  body {
    background-color: black;
  }

  main {
    margin-top: 50px;
  }

  .card-body {
    background-color: #343a40;
    color: white;
  }

  .card-body a:hover {
    color: white;
  }

  .btn-info {
    color: black;
    font-weight: bold;
  }
`;

const ghJs = name => {
  return `
  "use strict";

// document.querySelector("body").style.backgroundImage =
//   "url('https://cdn.hipwallpaper.com/i/52/25/YHV2NW.jpg')";

const addAttributes = (element, attrsObject) => {
  Object.entries(attrsObject).forEach(([attr, value]) =>
    element.setAttribute(attr, value)
  );
};

let repoList = [];

const card = ({ avatar_url, login, url }, count) => {
  const div = document.createElement("div");
  div.classList.add("text-center");
  div.innerHTML =\`
  <div class="card w-25 mx-auto">
    <img src=\${avatar_url} class="card-img-top" alt="github image">
    <div class="card-body text-center">
    <a href=\${url} target="_blank" rel="noopener noreferrer">
      <h5 class="card-title">\${login}</h5>
      </a>
      <p>\${count} Repos</p>
    </div>
  </div>
  \`
;

  return div;
};

const queryUrl = "https://api.github.com/users/${name}/repos?per_page=100;"
fetch(queryUrl)
  .then(res => res.json())
  .then(repos => {
    repoList = repos;
    const main = document.querySelector("main");
    const owner = repos[0].owner;
    const imgEl = card(owner, repos.length);

    main.prepend(imgEl);

    const section = document.querySelector("section");
    const ul = document.createElement("ul");

    addAttributes(ul, {
      class: "d-flex justify-content-around flex-wrap",
      style: "list-style-type: none"
    });

    repoList.forEach(({ name, html_url }) => {
      const li = document.createElement("li");
      const button = document.createElement("a");

      button.innerText = name;

      addAttributes(button, {
        href: html_url,
        class: "btn btn-info",
        target: "_blank",
        rel: "noopener noreferrer"
      });

      addAttributes(li, { class: "my-3" });

      li.appendChild(button);
      ul.append(li);
    });

    section.appendChild(ul);
  });

    `;
};

const ghHTML = name => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="style.css" />
      <title>${name} Repos</title>
    </head>
    <body>
      <main class="container">
        <section></section>
      </main>
      <script src="script.js"></script>
    </body>
  </html>

  `;
};

module.exports = {
  ghCss,
  ghHTML,
  ghJs
};
