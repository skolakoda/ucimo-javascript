// https://api.lyrics.ovh/v1/shakira/waka-waka

fetch('telefonski-imenik.json')
  .then(response => response.json())
  .then(text => console.log(text))
