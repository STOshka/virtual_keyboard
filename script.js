const KEYS = {
  Backquote: { eng: { lower: '`', upper: '~' }, rus: { lower: 'ё', upper: 'Ё' } },
  Digit1: { eng: { lower: '1', upper: '!' }, rus: { lower: '1', upper: '!' } },
  Digit2: { eng: { lower: '2', upper: '@' }, rus: { lower: '2', upper: '"' } },
  Digit3: { eng: { lower: '3', upper: '#' }, rus: { lower: '3', upper: '№' } },
  Digit4: { eng: { lower: '4', upper: '$' }, rus: { lower: '4', upper: ';' } },
  Digit5: { eng: { lower: '5', upper: '%' }, rus: { lower: '5', upper: '%' } },
  Digit6: { eng: { lower: '6', upper: '^' }, rus: { lower: '6', upper: ':' } },
  Digit7: { eng: { lower: '7', upper: '&' }, rus: { lower: '7', upper: '?' } },
  Digit8: { eng: { lower: '8', upper: '*' }, rus: { lower: '8', upper: '*' } },
  Digit9: { eng: { lower: '9', upper: '(' }, rus: { lower: '9', upper: '(' } },
  Digit0: { eng: { lower: '0', upper: ')' }, rus: { lower: '0', upper: ')' } },
  Minus: { eng: { lower: '-', upper: '_' }, rus: { lower: '-', upper: '_' } },
  Equal: { eng: { lower: '=', upper: '+' }, rus: { lower: '=', upper: '+' } },
  Backspace: {
    eng: { lower: 'Backspace', upper: 'Backspace' },
    rus: { lower: 'Backspace', upper: 'Backspace' },
  },
  Tab: {
    eng: { lower: 'Tab', upper: 'Tab' },
    rus: { lower: 'Tab', upper: 'Tab' },
  },
  KeyQ: { eng: { lower: 'q', upper: 'Q' }, rus: { lower: 'й', upper: 'Й' } },
  KeyW: { eng: { lower: 'w', upper: 'W' }, rus: { lower: 'ц', upper: 'Ц' } },
  KeyE: { eng: { lower: 'e', upper: 'E' }, rus: { lower: 'у', upper: 'У' } },
  KeyR: { eng: { lower: 'r', upper: 'R' }, rus: { lower: 'к', upper: 'К' } },
  KeyT: { eng: { lower: 't', upper: 'T' }, rus: { lower: 'е', upper: 'Е' } },
  KeyY: { eng: { lower: 'y', upper: 'Y' }, rus: { lower: 'н', upper: 'Н' } },
  KeyU: { eng: { lower: 'u', upper: 'U' }, rus: { lower: 'г', upper: 'Г' } },
  KeyI: { eng: { lower: 'i', upper: 'I' }, rus: { lower: 'ш', upper: 'Ш' } },
  KeyO: { eng: { lower: 'o', upper: 'O' }, rus: { lower: 'щ', upper: 'Щ' } },
  KeyP: { eng: { lower: 'p', upper: 'P' }, rus: { lower: 'з', upper: 'З' } },
  BracketLeft: { eng: { lower: '[', upper: '{' }, rus: { lower: 'х', upper: 'Х' } },
  BracketRight: { eng: { lower: ']', upper: '}' }, rus: { lower: 'ъ', upper: 'Ъ' } },
  Delete: {
    eng: { lower: 'Del', upper: 'Del' },
    rus: { lower: 'Del', upper: 'Del' },
  },
  CapsLock: {
    eng: { lower: 'CapsLock', upper: 'CapsLock' },
    rus: { lower: 'CapsLock', upper: 'CapsLock' },
  },
  KeyA: { eng: { lower: 'a', upper: 'A' }, rus: { lower: 'ф', upper: 'Ф' } },
  KeyS: { eng: { lower: 's', upper: 'S' }, rus: { lower: 'ы', upper: 'Ы' } },
  KeyD: { eng: { lower: 'd', upper: 'D' }, rus: { lower: 'в', upper: 'В' } },
  KeyF: { eng: { lower: 'f', upper: 'F' }, rus: { lower: 'а', upper: 'А' } },
  KeyG: { eng: { lower: 'g', upper: 'G' }, rus: { lower: 'п', upper: 'П' } },
  KeyH: { eng: { lower: 'h', upper: 'H' }, rus: { lower: 'р', upper: 'Р' } },
  KeyJ: { eng: { lower: 'j', upper: 'J' }, rus: { lower: 'о', upper: 'О' } },
  KeyK: { eng: { lower: 'k', upper: 'K' }, rus: { lower: 'л', upper: 'Л' } },
  KeyL: { eng: { lower: 'l', upper: 'L' }, rus: { lower: 'д', upper: 'Д' } },
  Semicolon: { eng: { lower: ';', upper: ':' }, rus: { lower: 'ж', upper: 'Ж' } },
  Quote: { eng: { lower: "'", upper: '"' }, rus: { lower: 'э', upper: 'Э' } },
  Enter: {
    eng: { lower: 'Enter', upper: 'Enter' },
    rus: { lower: 'Enter', upper: 'Enter' },
  },
  ShiftLeft: {
    eng: { lower: 'Shift', upper: 'Shift' },
    rus: { lower: 'Shift', upper: 'Shift' },
  },
  KeyZ: { eng: { lower: 'z', upper: 'Z' }, rus: { lower: 'я', upper: 'Я' } },
  KeyX: { eng: { lower: 'x', upper: 'X' }, rus: { lower: 'ч', upper: 'Ч' } },
  KeyC: { eng: { lower: 'c', upper: 'C' }, rus: { lower: 'с', upper: 'С' } },
  KeyV: { eng: { lower: 'v', upper: 'V' }, rus: { lower: 'м', upper: 'М' } },
  KeyB: { eng: { lower: 'b', upper: 'B' }, rus: { lower: 'и', upper: 'И' } },
  KeyN: { eng: { lower: 'n', upper: 'N' }, rus: { lower: 'т', upper: 'Т' } },
  KeyM: { eng: { lower: 'm', upper: 'M' }, rus: { lower: 'ь', upper: 'Ь' } },
  Comma: { eng: { lower: ',', upper: '<' }, rus: { lower: 'б', upper: 'Б' } },
  Period: { eng: { lower: '.', upper: '>' }, rus: { lower: 'ю', upper: 'Ю' } },
  Slash: { eng: { lower: '/', upper: '?' }, rus: { lower: '.', upper: ',' } },
  ArrowUp: { eng: { lower: '↑', upper: '↑' }, rus: { lower: '↑', upper: '↑' } },
  ShiftRight: {
    eng: { lower: 'Shift', upper: 'Shift' },
    rus: { lower: 'Shift', upper: 'Shift' },
  },
  ControlLeft: {
    eng: { lower: 'Ctrl', upper: 'Ctrl' },
    rus: { lower: 'Ctrl', upper: 'Ctrl' },
  },
  AltLeft: {
    eng: { lower: 'Alt', upper: 'Alt' },
    rus: { lower: 'Alt', upper: 'Alt' },
  },
  Space: { eng: { lower: ' ', upper: ' ' }, rus: { lower: ' ', upper: ' ' } },
  AltRight: {
    eng: { lower: 'Alt', upper: 'Alt' },
    rus: { lower: 'Alt', upper: 'Alt' },
  },
  ArrowLeft: { eng: { lower: '←', upper: '←' }, rus: { lower: '←', upper: '←' } },
  ArrowDown: { eng: { lower: '↓', upper: '↓' }, rus: { lower: '↓', upper: '↓' } },
  ArrowRight: { eng: { lower: '→', upper: '→' }, rus: { lower: '→', upper: '→' } },
  ControlRight: {
    eng: { lower: 'Ctrl', upper: 'Ctrl' },
    rus: { lower: 'Ctrl', upper: 'Ctrl' },
  },
};

let keys = [];
let textarea;
const BODY = document.querySelector('body');
let caps = false;
let capsPressed = false;
let shift = false;
let alt = false;
let lang = 'eng';

const getKey = (key) => KEYS[key][lang][caps === shift ? 'lower' : 'upper'];

const changeKeys = () => {
  keys.forEach((_key) => {
    const key = _key;
    key.innerHTML = getKey(key.dataset.key);
  });
};

const changeText = () => {
  document.querySelector('.title').innerHTML = lang === 'eng' ? 'Virtual keyboard' : 'Виртуальная клавиатура';
  document.querySelector('.changeLng').innerHTML = `${lang === 'eng' ? 'Made on a Windows keyboard. Change to Russian Language' : 'Сделано на клавиатуре Windows. Сменить на Английский язык'}: Shift + Alt`;
};

const checkLang = () => {
  if (shift && alt) {
    lang = lang === 'eng' ? 'rus' : 'eng';
    localStorage.setItem('lang', lang);
    changeText();
  }
};

const addText = (key) => {
  const pos = textarea.selectionStart;
  textarea.value = textarea.value.substr(0, textarea.selectionStart) + key
  + textarea.value.substr(textarea.selectionEnd);
  textarea.selectionStart = pos + 1;
  textarea.selectionEnd = pos + 1;
};

const pressKey = (key) => {
  if (key === 'CapsLock') {
    if (!capsPressed) {
      document.querySelector(`.${key}`).classList.toggle('active');
      caps = !caps;
      capsPressed = true;
      changeKeys();
    }
  } else {
    document.querySelector(`.${key}`).classList.add('active');
  }
  if (key.indexOf('Shift') > -1) {
    shift = true;
    checkLang();
    changeKeys();
  } else if (key.indexOf('Alt') > -1) {
    alt = true;
    checkLang();
    changeKeys();
  } else if (key === 'Backspace') {
    let start = textarea.selectionStart;
    if (textarea.selectionStart !== textarea.selectionEnd) start += 1;
    textarea.value = textarea.value.substr(0, start - 1)
    + textarea.value.substr(textarea.selectionEnd, textarea.value.length - textarea.selectionEnd);
    textarea.selectionStart = start - 1;
    textarea.selectionEnd = start - 1;
  } else if (key === 'Delete') {
    let end = textarea.selectionEnd;
    if (textarea.selectionStart !== textarea.selectionEnd) end -= 1;
    textarea.value = textarea.value.substr(0, textarea.selectionStart)
    + textarea.value.substr(end + 1, textarea.value.length - end - 1);
    textarea.selectionStart = end;
    textarea.selectionEnd = end;
  } else if (key === 'Tab') {
    addText('\t');
  } else if (key === 'Enter') {
    addText('\n');
  } else if (key === 'ArrowLeft') {
    if (textarea.selectionStart > 0) {
      textarea.selectionStart -= 1;
      textarea.selectionEnd = textarea.selectionStart;
    }
  } else if (key === 'ArrowRight') {
    if (textarea.selectionStart < textarea.value.length) {
      textarea.selectionStart += 1;
      textarea.selectionEnd = textarea.selectionStart;
    }
  } else if (key === 'ArrowUp') {
    const beforeEnter = textarea.value.substr(0, textarea.selectionStart).lastIndexOf('\n');
    const beforeEnter1 = textarea.value.substr(0, beforeEnter - 1).lastIndexOf('\n');
    let pos = textarea.selectionStart;
    if (beforeEnter > -1) {
      if (beforeEnter1 === -1) {
        pos = Math.min(beforeEnter, pos - beforeEnter - 1);
      } else {
        pos = beforeEnter1 + Math.min(beforeEnter - beforeEnter1, pos - beforeEnter);
      }
    }
    textarea.selectionStart = pos;
    textarea.selectionEnd = pos;
  } else if (key === 'ArrowDown') {
    let afterEnter = textarea.value.substr(textarea.selectionStart).indexOf('\n');
    let pos = textarea.selectionStart;
    if (afterEnter > -1) {
      afterEnter = afterEnter + textarea.selectionStart + 1;
      let beforeEnter = textarea.value.substr(0, afterEnter - 1).lastIndexOf('\n');
      beforeEnter = beforeEnter === -1 ? textarea.selectionStart
        : textarea.selectionStart - beforeEnter;
      const afterEnter2 = textarea.value.substr(afterEnter).indexOf('\n');

      if (afterEnter2 === -1) {
        pos = afterEnter + Math.min(textarea.value.length - afterEnter + 1, beforeEnter - 1);
      } else {
        pos = afterEnter + Math.min(afterEnter2, beforeEnter);
      }
    }
    textarea.selectionStart = pos;
    textarea.selectionEnd = pos;
  } else if (key.indexOf('Caps') === -1 && key.indexOf('Alt') === -1 && key.indexOf('Control') === -1) {
    addText(getKey(key));
  }
  textarea.focus();
};

const outClick = (key) => {
  if (key === 'CapsLock') {
    capsPressed = false;
    return;
  }
  document.querySelector(`.${key}`).classList.remove('active');
  if (key.indexOf('Shift') > -1) {
    shift = false;
    checkLang();
    changeKeys();
  }
  if (key.indexOf('Alt') > -1) {
    alt = false;
    checkLang();
    changeKeys();
  }
};

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  const key = document.querySelector(`.${e.code}`);
  if (key) {
    pressKey(e.code);
  }
});

document.addEventListener('keyup', (e) => {
  e.preventDefault();
  outClick(e.code);
});

const generateSite = () => {
  lang = localStorage.getItem('lang') || 'eng';

  const TITLE = document.createElement('h1');
  TITLE.classList.add('title');
  BODY.append(TITLE);

  textarea = document.createElement('textarea');
  textarea.classList.add('textarea');
  BODY.append(textarea);

  const KEYBOARD = document.createElement('div');
  KEYBOARD.classList.add('keyboard');
  BODY.append(KEYBOARD);

  Object.keys(KEYS).forEach((key) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.classList.add(key);
    div.dataset.key = key;
    div.innerHTML = key;
    KEYBOARD.append(div);

    div.addEventListener('click', () => {
      pressKey(key);
      setTimeout(() => outClick(key), 300);
    });
  });

  keys = document.querySelectorAll('.key');
  changeKeys();

  const LANGUAGE = document.createElement('h3');
  LANGUAGE.classList.add('changeLng');
  BODY.append(LANGUAGE);

  changeText();
};

generateSite();
