# Boss&Blade
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Boss&Blade - Gaming Channel</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  <style>
    /* Reset and basics */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Roboto', sans-serif;
      background-color: #121212;
      color: #f0f0f0;
      line-height: 1.6;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    img {
      max-width: 100%;
      display: block;
    }

    /* Header */
    header {
      background-color: #1f1f1f;
      padding: 20px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    header h1 {
      font-size: 2rem;
      color: #ff4c4c;
    }

    nav a {
      margin-left: 20px;
      color: #f0f0f0;
      font-weight: 500;
      transition: color 0.3s;
    }

    nav a:hover {
      color: #ff4c4c;
    }

    /* Hero Section */
    .hero {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 70vh;
      background: url('https://images.unsplash.com/photo-1604079628443-1f4d0f4c67c2') center/cover no-repeat;
      text-align: center;
      position: relative;
    }

    .hero::after {
      content: "";
      position: absolute;
      top: 0; left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.6);
    }

    .hero-content {
      position: relative;
      z-index: 1;
      color: #fff;
    }

    .hero-content h2 {
      font-size: 3rem;
      margin-bottom: 20px;
    }

    .hero-content p {
      font-size: 1.2rem;
      margin-bottom: 30px;
    }

    .hero-content a {
      padding: 12px 25px;
      background-color: #ff4c4c;
      border-radius: 5px;
      font-weight: bold;
      color: #fff;
      transition: background 0.3s;
    }

    .hero-content a:hover {
      background-color: #e03a3a;
    }

    /* Videos Section */
    .videos {
      padding: 60px 40px;
    }

    .videos h2 {
      text-align: center;
      margin-bottom: 40px;
      color: #ff4c4c;
      font-size: 2.5rem;
    }

    .video-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }

    .video-card {
      background-color: #1f1f1f;
      border-radius: 10px;
      overflow: hidden;
      transition: transform 0.3s;
    }

    .video-card:hover {
      transform: scale(1.05);
    }

    .video-card iframe {
      width: 100%;
      height: 200px;
    }

    .video-card h3 {
      padding: 15px;
      font-size: 1.2rem;
    }

    /* About Section */
    .about {
      padding: 60px 40px;
      background-color: #1f1f1f;
    }

    .about h2 {
      text-align: center;
      margin-bottom: 20px;
      color: #ff4c4c;
      font-size: 2.5rem;
    }

    .about p {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
      font-size: 1.1rem;
    }

    /* Footer */
    footer {
      background-color: #121212;
      text-align: center;
      padding: 20px;
      border-top: 1px solid #2c2c2c;
    }

    footer p {
      color: #aaa;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .hero-content h2 {
        font-size: 2rem;
      }

      .hero-content p {
        font-size: 1rem;
      }
    }

  </style>
</head>
<body>

  <header>
    <h1>Boss&Blade</h1>
    <nav>
      <a href="#hero">Home</a>
      <a href="#videos">Videos</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section class="hero" id="hero">
    <div class="hero-content">
      <h2>Welcome to Boss&Blade</h2>
      <p>Your ultimate gaming adventure starts here!</p>
      <a href="#videos">Watch Now</a>
    </div>
  </section>

  <section class="videos" id="videos">
    <h2>Latest Videos</h2>
    <div class="video-grid">
      <div class="video-card">
        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
        <h3>Epic Boss Battle #1</h3>
      </div>
      <div class="video-card">
        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
        <h3>Blade Master Tips</h3>
      </div>
      <div class="video-card">
        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
        <h3>Gaming Highlights</h3>
      </div>
    </div>
  </section>

  <section class="about" id="about">
    <h2>About Boss&Blade</h2>
    <p>Boss&Blade is your go-to gaming channel for epic battles, tips, and tricks. We explore the gaming world with thrilling gameplay and insightful commentary. Join our community and level up your gaming experience!</p>
  </section>

  <footer id="contact">
    <p>© 2025 Boss&Blade | Follow us on <a href="#" style="color:#ff4c4c;">YouTube</a></p>
  </footer>

</body>
</html>
