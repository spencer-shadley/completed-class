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

// function candies(numScores, scores) {
//     return Math.min(minFromLeft(scores), minFromRight(scores));
// }

// function minFromLeft(scores) {
//     let previousScore = scores[0];
//     let prevCandyAmount = scores[0] < scores[1] ? 1 : 2;
//     let totalCandy = prevCandyAmount;

//     for (let i = 1; i < scores.length; ++i) {
//         const score = scores[i];
//         const isAscending = previousScore < score;
//         const candyAmount = isAscending ? prevCandyAmount + 1 : 1;

//         totalCandy += candyAmount;
//         prevCandyAmount = candyAmount;
//         previousScore = score;
//     }

//     return totalCandy;
// }

// function minFromRight(scores) {
//     let previousScore = scores[scores.length - 1];
//     let prevCandyAmount = scores[scores.length - 1] > scores[scores.length - 1] ? 2 : 1;
//     let totalCandy = prevCandyAmount;

//     for (let i = scores.length - 1; i >= 0; --i) {
//         const score = scores[i];
//         const isDescending = previousScore >= score;
//         const candyAmount = isDescending ? 1 : prevCandyAmount + 1;

//         totalCandy += candyAmount;
//         prevCandyAmount = candyAmount;
//         previousScore = score;
//     }

//     return totalCandy;
// }

// bonus - https://photos.google.com/photo/AF1QipPJskjLawlKndJVHlVNpQLoz04ED-omnYJw_LRf

// 1. sort by score
// 2. grab median, assign them one candy
// 3. grab smallest increase
// 4. grab smallest decrease
// 5. repeat until all students have been considered