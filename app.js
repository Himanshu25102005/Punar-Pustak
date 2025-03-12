agit /* let input = document.querySelector("input");

input.addEventListener("keydown", () => {
  if ((event.key = "enter")) {
    let query = formatSearchQuery(input.value.trim());

    if (query === "") return; // Avoid unnecessary API calls

    let url = "https://openlibrary.org/search.json?q=" + query;

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        for(let i =0;i<data.docs.length;i++){
            console.log(data.docs[i].title);
        }
        console.log(url);
      });
  }
});

function formatSearchQuery(query) {
  return query.replace(/\s+/g, "+");
}
 */
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('#search input');
    const searchResults = document.querySelector('.search-results');
    
    // Show results when input is focused
    searchInput.addEventListener('focus', function() {
        searchResults.classList.add('active');
    });
    
    // Hide results when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('active');
        }
    });
    
    // Filter results as user types
    searchInput.addEventListener('input', function(e) {
        const value = e.target.value.toLowerCase();
        const resultItems = document.querySelectorAll('.search-result-item');
        const noResults = document.querySelector('.no-results');
        
        let hasResults = false;
        
        resultItems.forEach(item => {
            const title = item.querySelector('.search-result-title').textContent.toLowerCase();
            const author = item.querySelector('.search-result-author').textContent.toLowerCase();
            
            if (title.includes(value) || author.includes(value)) {
                item.style.display = 'flex';
                hasResults = true;
            } else {
                item.style.display = 'none';
            }
        });
        
        noResults.style.display = hasResults ? 'none' : 'block';
    });
});