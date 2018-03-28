
// DOM elements
const wordInput = document.querySelector('.word__input');
const wordtype = document.querySelector('.word__wordtype');
const button = document.querySelector('.continue-btn');

// vars
const stories = [];
let telling;
let answers = [];

class Story {
  constructor(title, text, words) {
    this.id = Story.autoincrement();
    this.title = title;
    this.text = text;
    this.words = words;
  }

  //static class to generate ids
  static autoincrement() {
    Story.id = Story.id || 0;
    Story.id++;
    return Story.id;
  }
}

class Words {
  constructor(types) {
    this.index = 0;
    this.types = types;
    this.askForWord = this.askForWord.bind(this);
    this.getAnswer = this.getAnswer.bind(this);
  }

  askForWord() {
    if (this.index < this.types.length) {
      wordtype.innerHTML = this.types[this.index];
      wordInput.focus();
      this.index++;
    }
  }

  getAnswer() {
    if (this.index > 0) {
      answers.push(wordInput.value || '');
    }
    wordInput.value = '';
    this.askForWord();
  }
}

// function to generate random number
function random(min, max) {
  return Math.floor(Math.random()*(max-min)) + min;
}

// initialize stories
stories.push(new Story(
  'Pretty Princess',
  ['A new and ', ' fairy princess movie is coming out soon! It will be about ', ' and the ', ' dwarfs. ', ' is a princess whose beauty threatens her ', ' , the queen. ', ' is forced to flee from ', ' and hides in a nearby ', '. There, she discovers the dwarfs ', ' in their ', '. But the queen finds her and casts a ', ' spell on her. The dwarfs take care of her until the ', ' ', ' comes to rescue her, and they all live ', ' ever after!'],
  new Words(['adjective', 'name/title', 'number', 'same name/title', 'relative', ' same name/title', 'place', 'place', 'verb/-ing', 'plural noun', 'adjective', 'adjective', 'person', 'adjective/-ly'])
));

// randomly choose a story to display
telling = stories[random(0, stories.length)];

// display each input in sequence
telling.words.askForWord();
button.addEventListener('click', function() {
  telling.words.getAnswer();
});
