
// DOM elements
const wordInput = document.querySelector('.word__input');
const wordtype = document.querySelector('.word__wordtype');
const button = document.querySelector('.continue-btn');

// vars
const stories = [];
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
    this.types = types;
  }
}
