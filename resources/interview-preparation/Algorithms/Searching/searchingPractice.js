// SEARCHING

const beasts = [`Centaur`, 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie']

// **** JS Searching ****

beasts.indexOf('Godzilla');

beasts.findIndex(item => {
    return item === 'Godzilla';
});

beasts.find(item => {
    return item === 'Godzilla';
});

beasts.includes('Godzilla');

// These are linear searchings. Slow.

const numbersArray = [1, 4, 6, 9, 12, 34, 45];