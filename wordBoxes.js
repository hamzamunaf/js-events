var allWords = [];
var currentWord = 0;

function handleNewWordsEntered(event) {
  var text = event.currentTarget.value;
  // event.currentTarget.value = "Some string";
  allWords = text.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '')
    .toLowerCase().split(' ');
  currentWord = 0;
  console.log("== New words entered:", allWords);
}

function generateWordElement(word, highlight) {
  var wordElem = document.createElement('span');
  wordElem.classList.add('word');
  wordElem.dataset.word = word;
  wordElem.textContent = word;
  return wordElem;
}

function getEveryNthValue() {
  var everyNthSelectElem = document.getElementById('every-nth-select');
  var everyNth = everyNthSelectElem.value;
  console.log("== everyNth:", everyNth);
  return Number(everyNth);
}

function handleAddWordButtonClick(event) {
  if (allWords[currentWord]) {
    var word = allWords[currentWord];

    var everyNth = getEveryNthValue();
    var highlight = !((currentWord + 1) % everyNth);

    var wordElem = generateWordElement(word, highlight);
    // console.log("== wordElem:", wordElem);

    var button = event.currentTarget;
    var container = button.parentNode.parentNode;
    var wordsContainer = container.getElementsByClassName('words-container')[0];
    wordsContainer.appendChild(wordElem);

    currentWord = (currentWord + 1) % allWords.length;
  }
}

var wordsInputElem = document.getElementById('words-input');
// wordsInputElem.addEventListener('input', handleNewWordsEntered);
wordsInputElem.addEventListener('change', handleNewWordsEntered);


var addWordButtonElems = document.getElementsByClassName('add-word-button');
for (var i = 0; i < addWordButtonElems.length; i++) {
  addWordButtonElems[i].addEventListener('click', handleAddWordButtonClick);
}
