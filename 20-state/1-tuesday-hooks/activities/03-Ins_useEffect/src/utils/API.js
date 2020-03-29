// This code is meant to serve as a mock fetch from an API.
export const getDeveloper = new Promise(resolve => {
    const oneSecond = 1000;
    setTimeout(() => {
        resolve({
            excitementLevel: 10000,
            lifeLongLearner: true,
            mood: `excited`,
            name: `Alec`
        });
    }, oneSecond);
});
