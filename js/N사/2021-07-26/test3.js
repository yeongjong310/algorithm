'use strict';

/* global $, jQuery */

const getData = async function (url) {
  if (!url || (typeof url) !== 'string') throw new Error('Wrong url');

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) throw new Error('Network response was not ok');

  return response.json();
};

async function solution() {
  function generateAricle(title, content) {
    const $article = document.createElement('div');
    $article.className = 'article';

    const $title = document.createElement('div');
    $title.className = 'article-title';
    $title.textContent = title;

    const $content = document.createElement('div');
    $content.className = 'article-content';
    $content.textContent = content;

    [$title, $content].forEach(element => {
      $article.appendChild(element);
    });

    return $article;
  }

  const url = "http://example.com/articles";

  try {
    const articles = await getData(url);
    const fragment = document.createDocumentFragment();

    articles.forEach(({ title, content }) => {
      fragment.appendChild(generateAricle(title, content));
    });

    document.querySelector('.articles-list').appendChild(fragment);
  } catch (e) {
    console.error(e.message);
  }
}
