---
layout: base
title: Searchbar and Canvas Demo
permalink: /navigation/searchbar
---

<link rel="stylesheet" href="{{site.baseurl}}/assets/css/styles.css">

<style>
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  #gameContainer {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white; /* Ensure it has a white background */
  }

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0; /* Ensure canvas is behind the search input */
    border: 1px solid black; /* Optional: to see the boundaries of the canvas */
  }

  #search {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    font-size: 16px;
    z-index: 2; /* Make sure the search input is on top */
    width: 80%;
    max-width: 400px;
    background-color: white;
    border: 2px solid #ccc;
    border-radius: 5px;
    color: black; /* Set text color to black */
  }

  #suggestions {
    list-style-type: none;
    padding: 0;
    margin: 0;
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    max-width: 400px;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    z-index: 3;
  }

  #suggestions li {
    padding: 8px;
    cursor: pointer;
    color: black; /* Set text color of suggestions to black */
  }

  #suggestions li:hover {
    background-color: #f0f0f0;
  }

  #errorMessage {
    color: blue;
    padding: 20px;
    font-family: monospace;
    white-space: pre-wrap;
    z-index: 1000;
    position: relative;
  }
</style>

<div id="gameContainer">
    <canvas id="gameCanvas"></canvas>
    <div id="errorMessage"></div>
    <input type="text" id="search" placeholder="Search..." />
    <ul id="suggestions"></ul>
</div>

<script>
  const searchInput = document.getElementById('search');
  const suggestions = document.getElementById('suggestions');
  let history = JSON.parse(localStorage.getItem('searchHistory')) || [];

  // Show suggestions
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    suggestions.innerHTML = '';
    if (query) {
      const matches = history.filter(term => term.toLowerCase().includes(query));
      if (matches.length === 0) {
        const noMatch = document.createElement('li');
        noMatch.textContent = 'No matches found';
        suggestions.appendChild(noMatch);
      }
      matches.forEach(term => {
        const li = document.createElement('li');
        li.textContent = term;
        li.addEventListener('click', () => {
          searchInput.value = term;
          suggestions.innerHTML = '';
        });
        suggestions.appendChild(li);
      });
    }
  });

  // Save search term
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const term = searchInput.value.trim();
      if (term && !history.includes(term)) {
        history.push(term);
        localStorage.setItem('searchHistory', JSON.stringify(history));
      }
      suggestions.innerHTML = '';
    }
  });

  // Canvas setup
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');

  // Set the canvas size before drawing
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 100; // Adjusting for your layout

  // Clear the canvas (no red rectangle)
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Error handling
  const errorMessage = document.getElementById('errorMessage');
  try {
    // Example code that could cause an error
    throw new Error('Custom error');
  } catch (e) {
    errorMessage.textContent = e.message;
  }
</script>
