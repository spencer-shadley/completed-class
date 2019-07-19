export function loadImages() {
  return new Promise((resolve, reject) => {
    fetch("/api/images")
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
}

export function loadImage(id) {
  return new Promise((resolve, reject) => {
    fetch("/api/images/" + id)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
}
