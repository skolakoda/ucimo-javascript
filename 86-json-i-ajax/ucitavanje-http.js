const http = new XMLHttpRequest()

http.open("GET", "./telefonski-imenik.json")
http.send()

http.onload = () => console.log(http.responseText)
