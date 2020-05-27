// Specialized tree for searching
// Know if part of a work exists in a body of text

// Great for string searching
// Words in a dictionary/letters in a word

// A trie is a variant of an n-ary tree in which characters are stored at each node. Each path down the tree may represent a word.

// The # nodes (sometimes called null nodes) are often usted to indicate complete words.
// For example, the fact that there is a * node under MANY indicates that MANY is a complete word.
// The existance of the MA path indicates that there are words that start with MA. 
// A node in a trie can have anywhere from 1 through alphabet.length +1 children. 

// Its lookup is O(K) time where K is the length of the string. 
// TECHNICALLY the same as a hashtable