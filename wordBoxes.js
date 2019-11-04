var allWords = [];
var currentWord = 0;

function handleNewWordsEntered(event) {
  var text = '';
  allWords = text.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '')
    .toLowerCase().split(' ');
  currentWord = 0;
}
