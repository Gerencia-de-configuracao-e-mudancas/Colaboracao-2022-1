let Searchbar = document.getElementById('SearchBar');

Searchbar.addEventListener('focus', () => {
    Searchbar.style.boxShadow = "2px 2px 20px rgba(17, 2, 26, 0.5)";
});

Searchbar.addEventListener('focusout', () => {
    Searchbar.style.boxShadow = "none";
});

