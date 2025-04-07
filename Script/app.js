/*  let input = document.querySelector("input");

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
        
        let hasResults = false;      // Flag to check if any results are found
        
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
}); */

const bookNames = [
  "The Silent Patient",
  "Atomic Habits",
  "The Psychology of Money",
  "Rich Dad Poor Dad",
  "The Subtle Art of NGAF",
  "Everything is Fucked",
  "2 States",
  "Alchemist"
];

const searchinput = document.querySelector("#searchinput");

// Add event listener to the "Buy Used Books" button
document.addEventListener('DOMContentLoaded', function() {
  const buyUsedBooksBtn = document.querySelector('.buy');
  const sellBooksBtn = document.querySelector('.sell');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  
  // Buy Used Books button
  if (buyUsedBooksBtn) {
    buyUsedBooksBtn.addEventListener('click', function() {
      alert('buy books functionality coming soon!');
    });
  }
  
  // Sell Books button
  if (sellBooksBtn) {
    sellBooksBtn.addEventListener('click', function() {
      // This would link to a sell books page in the future
      alert('Sell books functionality coming soon!');
    });
  }
  
  // Mobile menu toggle
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      const navMenu = document.querySelectorAll('#nav-menu');
      
      navMenu.forEach(item => {
        if (item.style.display === 'block') {
          item.style.display = 'none';
        } else {
          item.style.display = 'block';
        }
      });
    });
  }
  
  // Search functionality
  
  
  // Add animation to trending books section
  const bookCards = document.querySelectorAll('.book-card');
  if (bookCards.length > 0) {
    bookCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
      card.classList.add('fade-in');
      
      // Add click event to navigate to book details
      card.addEventListener('click', function() {
        const bookTitle = card.querySelector('h3').textContent;
        window.location.href = 'used-books.html?book=' + encodeURIComponent(bookTitle);
      });
    });
  }
  
  // Newsletter subscription
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      if (email && isValidEmail(email)) {
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
      } else {
        alert('Please enter a valid email address.');
      }
    });
  }
});



// Validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
