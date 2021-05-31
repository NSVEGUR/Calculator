'use strict';

let exp = document.querySelector('.exp').textContent;

exp = '';

let store = '';

let value = '';


document.querySelector('.btn-0').addEventListener
  ('click', function () {
    exp = '';
    store += 0;
    value += 0;
    document.querySelector('.exp').textContent = store;
  }
  );

document.querySelector('.btn-1').addEventListener
  ('click', function () {
    exp = '';
    store += 1;
    value += 1;
    document.querySelector('.exp').textContent = store;
  }
  );

document.querySelector('.btn-2').addEventListener
  ('click', function () {
    exp = '';
    store += 2;
    value += 2;
    document.querySelector('.exp').textContent = store;
  }
  );

document.querySelector('.btn-3').addEventListener
  ('click', function () {
    exp = '';
    store += 3;
    value += 3;
    document.querySelector('.exp').textContent = store;
  }
  );

document.querySelector('.btn-4').addEventListener
  ('click', function () {
    exp = '';
    store += 4;
    value += 4;
    document.querySelector('.exp').textContent = store;
  }
  );

document.querySelector('.btn-5').addEventListener
  ('click', function () {
    exp = '';
    store += 5;
    value += 5;
    document.querySelector('.exp').textContent = store;
  }
  );

document.querySelector('.btn-6').addEventListener
  ('click', function () {
    exp = '';
    store += 6;
    value += 6;
    document.querySelector('.exp').textContent = store;
  }
  );

document.querySelector('.btn-7').addEventListener
  ('click', function () {
    exp = '';
    store += 7;
    value += 7;
    document.querySelector('.exp').textContent = store;
  }
  );

document.querySelector('.btn-8').addEventListener
  ('click', function () {
    exp = '';
    store += 8;
    value += 8;
    document.querySelector('.exp').textContent = store;
  }
  );

document.querySelector('.btn-9').addEventListener
  ('click', function () {
    exp = '';
    store += 9;
    value += 9;
    document.querySelector('.exp').textContent = store;
  }
  );

document.querySelector('.btn-back').addEventListener
  ('click', function () {
    exp = '';
    store = store.slice(0, -1);
    value = value.slice(0, -1);
    document.querySelector('.exp').textContent = store;
  }
  );

document.querySelector('.btn-ac').addEventListener
  ('click', function () {
    exp = '';
    store = '';
    value = '';
    document.querySelector('.exp').textContent = store;
  }
  );

document.querySelector('.btn-open').addEventListener
  ('click', function () {
    exp = '';
    store += '(';
    value += '(';
    document.querySelector('.exp').textContent = store;
  }
  );

document.querySelector('.btn-close').addEventListener
  ('click', function () {
    exp = '';
    store += ')';
    value += ')';
    document.querySelector('.exp').textContent = store;
  }
  );

document.querySelector('.btn-div').addEventListener
  ('click', function () {
    exp = '';
    store += '÷';
    value += '/';
    document.querySelector('.exp').textContent = store;
  }
  );

document.querySelector('.btn-mul').addEventListener
  ('click', function () {
    exp = '';
    store += '×';
    value += '*';
    document.querySelector('.exp').textContent = store;
  }
  );

document.querySelector('.btn-add').addEventListener
  ('click', function () {
    exp = '';
    store += '+';
    value += '+';
    document.querySelector('.exp').textContent = store;
  }
  );

document.querySelector('.btn-sub').addEventListener
  ('click', function () {
    exp = '';
    store += '-';
    value += '-';
    document.querySelector('.exp').textContent = store;
  }
  );

document.querySelector('.btn-dot').addEventListener
  ('click', function () {
    exp = '';
    store += '.';
    value += '.';
    document.querySelector('.exp').textContent = store;
  }
  );

document.querySelector('.btn-equal').addEventListener
  ('click', function () {
    exp = '';
    value = String(eval(value));
    document.querySelector('.exp').textContent = value;
    store = '';
    value = '';
  }
  );


