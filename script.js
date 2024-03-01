function searchCharacters() {
    const searchInput = document.getElementById('search-input').value;
    const apiUrl = `https://rickandmortyapi.com/api/character/?name=${searchInput}`;

    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const characterList = document.getElementById('character-list');
            characterList.innerHTML = '';

            data.results.forEach(character => {
                const characterCard = document.createElement('div');
                characterCard.classList.add('character-card');
                characterCard.innerHTML = `
                    <img src="${character.image}" alt="${character.name}">
                    <p>${character.name}</p>
                    <p>${character.species}</p>
                `;
                characterList.appendChild(characterCard);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}



