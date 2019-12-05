// Joan of Arc 'properties.'
var joanOfArcInfoParts = ['Real Name', 'Grew Up Where', 'Known For', 'Scars', 'Symbolism'];

// Values for Joan's 'properties.'
var joanOfArcInfoValues = [
  'Jehanne la Pucelle.',
  'Domremy, a village in northeastern France.',
  'Peasant girl, daughter of a farmer, who rose to become Commander of the French army.',
  'Took an arrow to the shoulder and a crossbow bolt to the thigh while trying to liberate Paris.',
  'Stands for French unity and nationalism.'
];

var input = 'Real Name';

// How do I use input to get 'Jehanne la Pucelle.'?
var index = joanOfArcInfoParts.indexOf(input);
var valuesIndex = joanOfArcInfoValues[index];

// as an object:
var joanOfArc = {
  'Real Name': 'Jehanne la Pucelle',
  'Grew Up Where': 'Domremy, a village in northeastern France.',
  'Known For': 'Peasant girl, daughter of a farmer, who rose to become Commander of the French army.',
  'Scars': 'Took an arrow to the shoulder and a crossbow bolt to the thigh while trying to liberate Paris.',
  'Symbolism': 'Stands for French unity and nationalism.'
}

console.log(joanOfArc);
console.log(joanOfArc.Scars);
console.log(joanOfArc['Real Name']);
