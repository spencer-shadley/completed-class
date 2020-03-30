

// Write a function that takes in an absolute file path and simplifies it

const simplifyPath = function(path) {
    const pathArr = path.split(`/`);
    const stack = [];

    for (let i = 0; i < pathArr.length; ++i) {
        const section = pathArr[i];

        if (!section) {
            continue;
        }

        if (section === `.`) {
            continue;
        }

        if (section === `..`) {
            stack.pop();
            continue;
        }

        stack.push(section);
    }

    return `/${ stack.join(`/`)}`;
};
