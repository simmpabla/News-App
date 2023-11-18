const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayNews(data.articles);
    } catch (error) {
        console.error('There was an error!', error);
    }
}

fetchNews();

function displayNews(articles) {
    const newsDiv = document.querySelector('#news');
    for(const article of articles) {
        const articleDiv = document.createElement('div');
        articleDiv.className = 'card border-info';
        const title = document.createElement('h4');
        title.textContent = article.title;
        title.className = 'card-header';
        articleDiv.appendChild(title);
        const author = document.createElement('h6');
        author.textContent = article.author;
        author.className = 'card-text';
        articleDiv.appendChild(author);
        const content = document.createElement('p');
        content.textContent = article.content;
        content.className = 'card-text';
        articleDiv.appendChild(content);
        
        newsDiv.appendChild(articleDiv);
    }
}