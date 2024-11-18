document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const query = document.getElementById('query').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(query)}`);
        const data = await response.json();

        if (data.result.length === 0) {
            resultsDiv.innerHTML = '<p>No jokes found.</p>';
        } else {
            data.result.forEach(joke => {
                const article = document.createElement('article');
                const jokeParagraph = document.createElement('p');
                jokeParagraph.textContent = joke.value;
                article.appendChild(jokeParagraph);
                resultsDiv.appendChild(article);
            });
        }
    } catch (error) {
        console.error('Error fetching jokes:', error);
    }
});
