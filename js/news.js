	
const newsData = [
  {
    title: "Emerging Tech Expo 2025",
    date: "May 5, 2025",
    content: "Our annual expo brought together 50+ industry leaders to explore AI, blockchain, and quantum computing breakthroughs."
  },
  {
    title: "Women in Tech Leadership Panel",
    date: "April 18, 2025",
    content: "A discussion with women executives from Microsoft, Nvidia, and Intel on ethical tech leadership and STEM inclusion."
  },
  {
    title: "Hackathon 48: Build for Impact",
    date: "March 30, 2025",
    content: "Students collaborated on real-world challenges including a climate-data dashboard and multilingual chatbot for aid services."
  }
];

const container = document.getElementById('news-container');

newsData.forEach(news => {
  const col = document.createElement('div');
  col.className = 'col-md-4 mb-4';

  col.innerHTML = `
    <div class="card-cont h-100 shadow-sm">
      <div class="card-body">
        <h4 class="">${news.title}</h4>
        <h5 class=" mb-2 text-muted">${news.date}</h5>
        <p class="card-text">${news.content}</p>
        <a href="#" class="read-more">Read more</a>
      </div>
    </div>
  `;

  container.appendChild(col);
});
