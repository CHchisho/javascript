document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const query = document.getElementById('query').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
        const data = await response.json();

        data.forEach(tvShow => {
            const article = document.createElement('article');


            const title = document.createElement('h2');
            title.textContent = tvShow.show.name;
            article.appendChild(title);


            const link = document.createElement('a');
            link.href = tvShow.show.url;
            link.textContent = 'View details';
            link.target = '_blank';
            article.appendChild(link);


            const imageSrc = tvShow.show.image?.medium
                ? tvShow.show.image.medium
                : 'https://via.placeholder.com/210x295?text=Not%20Found';

            const image = document.createElement('img');
            image.src = imageSrc;
            image.alt = tvShow.show.name;
            article.appendChild(image);


            const summary = document.createElement('div');
            summary.innerHTML = tvShow.show.summary;
            article.appendChild(summary);

            resultsDiv.appendChild(article);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
