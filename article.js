// Sample article data (you can fetch this from a server or define it locally)
const articles = [
  {
    date: 'July 15, 2024',
    author: 'John Doe',
    imageSrc: 'assets/article1.jpeg',
    altText: 'Article 1',
    heading: 'Article Heading 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nisi neque. Sed euismod felis et odio placerat malesuada.',
    link: '#article1' // Add a link for each article
  },
  {
    date: 'July 15, 2024',
    author: 'John Doe',
    imageSrc: 'assets/article2.jpeg',
    altText: 'Article 2',
    heading: 'Article Heading 2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nisi neque. Sed euismod felis et odio placerat malesuada.',
    link: '#article2'
  },
  {
    date: 'July 15, 2024',
    author: 'John Doe',
    imageSrc: 'assets/article3.jpeg',
    altText: 'Article 3',
    heading: 'Article Heading 3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nisi neque. Sed euismod felis et odio placerat malesuada.',
    link: '#article3'
  },
  {
    date: 'July 15, 2024',
    author: 'John Doe',
    imageSrc: 'assets/article4.jpeg',
    altText: 'Article 4',
    heading: 'Article Heading 4',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nisi neque. Sed euismod felis et odio placerat malesuada.',
    link: '#article4'
  },
  {
    date: 'July 15, 2024',
    author: 'John Doe',
    imageSrc: 'assets/article3.jpeg',
    altText: 'Article 5',
    heading: 'Article Heading 5',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nisi neque. Sed euismod felis et odio placerat malesuada.',
    link: '#article5'
  },
  {
    date: 'July 15, 2024',
    author: 'John Doe',
    imageSrc: 'assets/article4.jpeg',
    altText: 'Article 6',
    heading: 'Article Heading 6',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nisi neque. Sed euismod felis et odio placerat malesuada.',
    link: '#article6'
  },
  {
    date: 'July 15, 2024',
    author: 'John Doe',
    imageSrc: 'assets/article2.jpeg',
    altText: 'Article 7',
    heading: 'Article Heading 7',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nisi neque. Sed euismod felis et odio placerat malesuada.',
    link: '#article7'
  },
  {
    date: 'July 15, 2024',
    author: 'John Doe',
    imageSrc: 'assets/article1.jpeg',
    altText: 'Article 8',
    heading: 'Article Heading 8',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nisi neque. Sed euismod felis et odio placerat malesuada.',
    link: '#article8'
  },
];

// Function to generate HTML for articles
function generateArticles() {
  const articleContainer = document.getElementById('article-container');

  articles.forEach(article => {
    const articleElement = document.createElement('div');
    articleElement.classList.add('article-container');

    articleElement.innerHTML = `
      <a href="${article.link}" class="article-link">
        <div class="article-preview">
          <img src="${article.imageSrc}" alt="${article.altText}" onclick="expandImage(this)">
          <h2>${article.heading}</h2>
          <p>${article.content}</p>
        </div>
        <div class="article-details">
          <p>By ${article.author}</p>
        </div>
      </a>
    `;

    articleContainer.appendChild(articleElement);
  });
}

// Function to expand image
function expandImage(img) {
  img.classList.toggle('expanded');
}

// Generate articles when the page loads
window.onload = function() {
  generateArticles();
};