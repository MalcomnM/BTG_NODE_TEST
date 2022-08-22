/**
 * Trolls are attacking your comment section!
 * A common way to deal with this situation is to remove all of the vowels 
 * from the trolls' comments, neutralizing the threat.
 * Your task is to write a function that takes a string and return a new string with all vowels removed.
 * For examplebsie, the string "This wte is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
 * Note: for this exercise y isn't considered a vowel.
 */

function disemvowel(str) {
    // your code here
    return str.replace(/[aeiou]/gi, '');
}

module.exports = disemvowel;

