loadImages();function createEl(a=``, b){ const c=document.createElement(a);return b&&c.setAttribute(`class`, b), c; }function initLazyImages(){ const a=document.querySelectorAll(`.lazy-image`); const b=new IntersectionObserver(a => { a.forEach(a => { a.isIntersecting&&(b.unobserve(a.target), a.target.src=a.target.dataset.src); }); });a.forEach(a => b.observe(a)); }function loadImages(){ fetch(`/api/images`).then(a => a.json()).then(a => createCards(a)).then(() => initLazyImages()); }function createCards(a){ const b=document.getElementsByClassName(`container`)[0];b.innerHTML=``;let c;const d=createEl(`div`, `row`);return a.forEach((a, e) => { const f=createEl(`div`, `col-md-4 mt-4`);return f.appendChild(createCard(a)), e%3==0&&(d.appendChild(f), b.appendChild(d), c=d), c.appendChild(f); }); }function createCard(a){ const b=createEl(`div`, `card`); const c=createEl(`div`, `card__image-container`); const d=createEl(`img`, `card-img-top card__image--cover lazy-image`);d.setAttribute(`src`, `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOMrgcAATsA3BT31OAAAAAASUVORK5CYII=`), d.setAttribute(`data-src`, a.image), d.setAttribute(`alt`, a.description);const e=createEl(`div`, `card-body`); const f=createEl(`div`, `rating d-flex justify-content-start`);f.setAttribute(`data-id`, a._id), f.setAttribute(`data-rating`, a.rating);const g=createRatingForm(a); const h=createEl(`p`, `card-text font-weight-bold mt-2`);return h.innerText=`${a.description} (${a.rating})`, c.append(d), f.append(g), e.appendChild(f), e.appendChild(h), b.appendChild(c), b.appendChild(e), b; }function createRatingForm(a){ const b={1:`One Star`, 2:`Two Stars`, 3:`Three Stars`, 4:`Four Stars`, 5:`Five Stars`}; const c=createEl(`form`);c.setAttribute(`action`, `post`);for(let d=1;d<=5;d++){ const e=createEl(`input`, `visuallyhidden`);e.setAttribute(`type`, `radio`), e.setAttribute(`name`, `rating`), e.setAttribute(`id`, `${a._id}-star-${d}`), e.setAttribute(`value`, d);const f=createEl(`label`);f.setAttribute(`for`, `${a._id}-star-${d}`);const g=createEl(`span`, `visuallyhidden`);g.innerText=b[d];const h=createEl(`i`, `fa-star ${a.rating>=d?`fas`:`far`}`);f.appendChild(g), f.appendChild(h), f.onclick=updateRating, c.appendChild(e), c.appendChild(f); }return c; }function updateRating(a){ const[b,, c]=a.currentTarget.getAttribute(`for`).split(`-`);fetch(`/api/images/${b}`, {method:`PUT`, body:JSON.stringify({rating:c}), headers:{"Content-Type":`application/json`}}).then(() => { loadImages(); }); }
