var didUserCancel = false;
while (!didUserCancel) {
  var tagName = prompt(
    'Please enter an HTML Tag (ex. h1, h2, p, div):',
    'enter tag'
  );
  didUserCancel = tagName === null;

  if (!didUserCancel) {
    if (!isValidTagName(tagName)) {
      alert('please enter a valid tag');
    } else {
      createAndAppendElement(tagName);
    }
  }
}

function createAndAppendElement(tagName) {
  var tag = document.createElement(tagName);
  tag.textContent = "This was made via prompts. It's a(n) " + tagName;
  document.body.appendChild(tag);
}

function isValidTagName(tagName) {
  var acceptableTagNames = [
    'p',
    'div',
    'strong',
    'b',
    'i',
    'em',
    'mark',
    'small',
    'del',
    'ins',
    'sub',
    'sup'
  ];
  return isValidHTag(tagName) || acceptableTagNames.includes(tagName);
}

function isValidHTag(tagName) {
  for (var i = 1; i <= 6; ++i) {
    if (tagName === 'h' + i) {
      return true;
    }
  }
  return false;
}
