const express = require('express');
const axios = require('axios');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000 || 3001;

app.use(cors());
app.use(express.json());



app.get('/api/projects', async (req, res) => {
  const { name = 'open source', sort = 'stars', order = 'desc', per_page = 60, page = 1 } = req.query;

  const query = 'stars:>100'; // Fetch repositories with more than 100 stars
  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&name=${name}&sort=${sort}&order=${order}&per_page=${per_page}&page=${page}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    });

    const projects = response.data.items.map((repo) => ({
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      stargazers_count: repo.stargazers_count,
      language: repo.language,
      open_issues_count: repo.open_issues_count,
    }));

    res.json(projects);
  } catch (error) {
    console.error('Error fetching data from GitHub API:', error.message);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
