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

// Array of book information based on the books in buy.html
const books = [
  {
    id: 1,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 299,
    originalPrice: 499,
    discount: "40% off",
    category: "Thriller",
    description: "A psychological thriller about a woman who stops speaking after murdering her husband",
    coverImage: "../Assets/book1.jpg",
    inStock: true,
    rating: 4.5
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: 399,
    originalPrice: 599,
    discount: "33% off",
    category: "Self-Help",
    description: "A guide to building good habits and breaking bad ones",
    coverImage: "../Assets/book2.jpg",
    inStock: true,
    rating: 4.8
  },
  {
    id: 3,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 249,
    originalPrice: 399,
    discount: "38% off",
    category: "Finance",
    description: "Timeless lessons on wealth, greed, and happiness",
    coverImage: "../Assets/book3.jpg",
    inStock: true,
    rating: 4.6
  },
  {
    id: 4,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 199,
    originalPrice: 349,
    discount: "43% off",
    category: "Finance",
    description: "What the rich teach their kids about money that the poor and middle class do not",
    coverImage: "../Assets/book4.jpg",
    inStock: true,
    rating: 4.7
  },
  {
    id: 5,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    price: 299,
    originalPrice: 449,
    discount: "33% off",
    category: "Self-Help",
    description: "A counterintuitive approach to living a good life",
    coverImage: "../Assets/book5.jpg",
    inStock: true,
    rating: 4.4
  },
  {
    id: 6,
    title: "Everything Is F*cked",
    author: "Mark Manson",
    price: 199,
    originalPrice: 249,
    discount: "20% off",
    category: "Self-Help",
    description: "A book about hope in the modern world",
    coverImage: "../Assets/book6.webp",
    inStock: true,
    rating: 4.2
  },
  {
    id: 7,
    title: "2 States",
    author: "Chetan Bhagat",
    price: 150,
    originalPrice: 250,
    discount: "40% off",
    category: "Fiction",
    description: "A story about inter-cultural marriage in modern India",
    coverImage: "../Assets/book7.jpg",
    inStock: true,
    rating: 4.0
  },
  {
    id: 8,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 180,
    originalPrice: 299,
    discount: "40% off",
    category: "Fiction",
    description: "A magical story about following your dreams",
    coverImage: "../Assets/book8.jpg",
    inStock: true,
    rating: 4.5
  },
  {
    id: 9,
    title: "Ikigai",
    author: "Héctor García & Francesc Miralles",
    price: 220,
    originalPrice: 350,
    discount: "37% off",
    category: "Self-Help",
    description: "The Japanese secret to a long and happy life",
    coverImage: "../Assets/ikigai.jpg",
    inStock: true,
    rating: 4.5
  },
  {
    id: 10,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: 175,
    originalPrice: 250,
    discount: "30% off",
    category: "Finance",
    description: "A personal development and self-improvement book",
    coverImage: "../Assets/think.jpg",
    inStock: true,
    rating: 4.7
  },
  {
    id: 11,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: 350,
    originalPrice: 599,
    discount: "42% off",
    category: "Non-Fiction",
    description: "A brief history of humankind",
    coverImage: "../Assets/book11.jpg",
    inStock: true,
    rating: 4.7
  },
  {
    id: 12,
    title: "1984",
    author: "George Orwell",
    price: 150,
    originalPrice: 220,
    discount: "32% off",
    category: "Dystopian",
    description: "A chilling portrayal of a totalitarian future society",
    coverImage: "../Assets/book12.jpg",
    inStock: true,
    rating: 4.6
  },
  {
    id: 13,
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    price: 199,
    originalPrice: 299,
    discount: "33% off",
    category: "Fiction",
    description: "A story of friendship, betrayal, and redemption set in Afghanistan",
    coverImage: "../Assets/book13.jpg",
    inStock: true,
    rating: 4.6
  },
  {
    id: 14,
    title: "A Thousand Splendid Suns",
    author: "Khaled Hosseini",
    price: 210,
    originalPrice: 350,
    discount: "40% off",
    category: "Fiction",
    description: "A breathtaking story set against the volatile events of Afghanistan's last thirty years",
    coverImage: "../Assets/book14.jpg",
    inStock: true,
    rating: 4.7
  },
  {
    id: 15,
    title: "The Power of Your Subconscious Mind",
    author: "Joseph Murphy",
    price: 120,
    originalPrice: 199,
    discount: "40% off",
    category: "Self-Help",
    description: "A guide to unlocking the power of your subconscious mind",
    coverImage: "../Assets/book15.jpg",
    inStock: true,
    rating: 4.4
  },
  {
    id: 16,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 180,
    originalPrice: 250,
    discount: "28% off",
    category: "Classic",
    description: "A powerful story of growing up amid racial injustice",
    coverImage: "../Assets/book16.jpg",
    inStock: true,
    rating: 4.8
  },
  {
    id: 17,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 120,
    originalPrice: 180,
    discount: "33% off",
    category: "Classic",
    description: "A tale of wealth, love and the American Dream",
    coverImage: "../Assets/book17.jpg",
    inStock: true,
    rating: 4.3
  },
  {
    id: 18,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 140,
    originalPrice: 200,
    discount: "30% off",
    category: "Classic",
    description: "A romantic novel of manners set in early 19th century England",
    coverImage: "../Assets/book18.jpg",
    inStock: true,
    rating: 4.5
  },
  {
    id: 19,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 280,
    originalPrice: 450,
    discount: "38% off",
    category: "Fiction",
    description: "A novel about all the choices that go into a life well lived",
    coverImage: "../Assets/book19.jpg",
    inStock: true,
    rating: 4.4
  },
  {
    id: 20,
    title: "Educated: A Memoir",
    author: "Tara Westover",
    price: 320,
    originalPrice: 499,
    discount: "36% off",
    category: "Memoir",
    description: "A memoir about a woman who leaves her survivalist family and goes on to earn a PhD",
    coverImage: "../Assets/book20.jpg",
    inStock: true,
    rating: 4.7
  }
];

// Function to check if email is valid
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

