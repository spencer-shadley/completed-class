// https://www.hackerrank.com/challenges/candies/problem

function candies(numScores, scores) {
    const candies = new Array(numScores);
    candies.fill(1);

    for (let i = 0; i < numScores - 1; ++i) {
        if (scores[i] > scores[i + 1] && candies[i] <= candies[i+1]) {
            ++candies[i];
        } else if (scores[i] < scores[i + 1]) {
            ++candies[i + 1];
            if (candies[i + 1] <= candies[i]) {
                candies[i + 1] = candies[i] + 1;
            }
        }
    }

    for (let i = numScores - 1; i > 0; --i) {
        if (scores[i - 1] > scores[i] && candies[i-1 <= candies[i]]) {
            candies[i - 1] = candies[i] + 1;
        }
    }

    return candies.reduce((currTotal, candy) => currTotal + candy, 0);
}

// 1. sort by score
// 2. grab median, assign them one candy
// 3. grab smallest increase
// 4. grab smallest decrease
// 5. repeat until all students have been considered