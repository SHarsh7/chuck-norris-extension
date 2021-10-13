fetch('https://api.chucknorris.io/jokes/random').
    then(data => data.json())
    .then(data => {
        const joke = data.value;
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = joke;
    });