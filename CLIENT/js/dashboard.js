document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const searchBar = document.getElementById('search-bar');
    const searchResultsSection = document.getElementById('search-results');
    const resultsList = document.getElementById('results-list');

    // Example job data
    const jobData = [
        { title: 'Frontend Developer', company: 'Company A', location: 'New York', category: 'Development' },
        { title: 'Backend Developer', company: 'Company B', location: 'San Francisco', category: 'Development' },
        { title: 'UX Designer', company: 'Company C', location: 'Los Angeles', category: 'Design' },
        { title: 'Product Manager', company: 'Company D', location: 'Seattle', category: 'Management' },
        { title: 'Marketing Specialist', company: 'Company E', location: 'Chicago', category: 'Marketing' },
        { title: 'Full Stack Developer', company: 'Company F', location: 'Austin', category: 'Development' },
        { title: 'Data Scientist', company: 'Company G', location: 'Boston', category: 'Data Science' }
    ];

    // Handle search form submission
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const query = searchBar.value.trim().toLowerCase();
        
        if (query === '') {
            searchResultsSection.style.display = 'none';  // Hide results if search is empty
            return;
        }

        // Filter job data based on search query
        const filteredJobs = jobData.filter(job =>
            job.title.toLowerCase().includes(query) ||
            job.company.toLowerCase().includes(query) ||
            job.location.toLowerCase().includes(query) ||
            job.category.toLowerCase().includes(query)
        );

        // Clear previous results
        resultsList.innerHTML = '';

        // Show search results
        if (filteredJobs.length > 0) {
            filteredJobs.forEach(job => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <h3>${job.title}</h3>
                    <p><strong>Company:</strong> ${job.company}</p>
                    <p><strong>Location:</strong> ${job.location}</p>
                    <p><strong>Category:</strong> ${job.category}</p>
                `;
                resultsList.appendChild(li);
            });
            searchResultsSection.style.display = 'block';  // Show results if any
        } else {
            resultsList.innerHTML = '<li>No results found</li>';
            searchResultsSection.style.display = 'block';  // Show no results message
        }
    });
});
