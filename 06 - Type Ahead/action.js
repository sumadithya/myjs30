const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data))

function findMatches(input, cities){
    return cities.filter(place => {
        const regex = new RegExp(input, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    });
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        cityName = place.city.replace(regex,`<span class='hl'>${this.value}</span>`);
        stateName = place.state.replace(regex,`<span class='hl'>${this.value}</span>`); 
        return `
        <li>
            <span class='name'>${cityName}, ${stateName}</span>
            <span class='population'>${place.population}</span>            
        </li>
        `;
    }).join('');
    suggestions.innerHTML= html;
}

const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

search.addEventListener('keyup', displayMatches);