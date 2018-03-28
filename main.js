(function(){

  // DOM elements
  const sillyTitle = document.querySelector('.story-title');
  const wordInput = document.querySelector('.word__input');
  const wordtype = document.querySelector('.word__wordtype');
  const button = document.querySelector('.continue-btn');
  const entry = document.querySelector('.entry');
  const sillyStory = document.querySelector('.story');

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

    showTitle() {
      sillyTitle.innerHTML = this.title;
    }

    showStory() {
      let html = '';
      entry.setAttribute('style', 'display: none');
      this.text.forEach((line, index, arr) => {
        html += line;
        if (index < arr.length - 1)
          html += answers[index];
      });
      sillyStory.innerHTML = html;
    }
  }

  class Words {
    constructor(types) {
      this.index = 0;
      this.types = types;
      this.askForWord = this.askForWord.bind(this);
      this.saveAnswer = this.saveAnswer.bind(this);
    }

    askForWord() {
      if (this.index === this.types.length - 1) {
        button.innerHTML = 'Get Silly Story';
      }
      if (this.index < this.types.length) {
        wordtype.innerHTML = this.types[this.index];
        wordInput.focus();
        this.index++;
      } else {
        telling.showStory();
      }
    }

    saveAnswer() {
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

  stories.push(new Story(
    'Pizza Pizza',
    ['Pizza was invented by a ', ' ', ' chef named ', '. To make pizza, you need to take a lump of ', ', and make a thin, round ', ' ', '. Then you cover it with ', ' sauce, ', ' cheese, and fresh chopped ', '. Next you have to bake it in a very hot ', '. When it is done, cut it into ', ' ', '. Some kids like ', ' pizza the best, but my favorite is the ', ' pizza. If I could, I would eat it ', ' times a day!'],
    new Words(['adjective', 'nationality', 'person', 'noun', 'adjective', 'noun', 'adjective', 'adjective','plural noun', 'noun', 'number', 'shapes', 'food', 'food', 'number'])
  ));

  stories.push(new Story(
    'What Happens in the Lunchroom, Stays in the Lunchroom',
    ['Lunchtime in our cafeteria is always ', '. They serve hot ', 'and ', ', but some students ', ' their own ', ' to eat. Some kids quietly ', ' their ', ', while others throw ', ' or ', ' when the teachers aren&apos;t looking. One time, a bunch of kids mixed all of their unfinished ', ' and ', ' together to make a ', ' mountain of ', ' on a ', '. The teachers were ', ', but everyone had already ', ' outside for recess, so nobody got in trouble.'],
    new Words(['adjective', 'food', 'food', 'verb', 'nouns', 'verb', 'food', 'vegetables', 'fruits', 'food', 'food', 'adjective', 'noun', 'furniture', 'emotion', 'verb/-ed'])
  ));

  // randomly choose a story to display
  telling = stories[random(0, stories.length)];
  telling.showTitle();
  telling.words.askForWord();

  // display each input in sequence and return silly story
  button.addEventListener('click', function() {
    telling.words.saveAnswer();
  });
  
})();