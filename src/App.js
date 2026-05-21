import "./App.css";

import { useState } from "react";

import ImageCard from "./components/ImageCard";

import imageData from "./data/imageData";

function App() {

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [darkMode, setDarkMode] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);

  // Categories

  const categories = ["All", "Nature", "Animals", "City", "Travel"];

  // Filter Logic

  const filteredImages = imageData.filter((image) => {

    const matchesSearch =
      image.title.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      image.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className={darkMode ? "dark app" : "app"}>

      {/* Navbar */}

      <nav className="navbar">

        <h1>Image Gallery</h1>

        <button
          className="dark-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

      </nav>

      {/* Search */}

      <div className="search-box">

        <input
          type="text"
          placeholder="Search images..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* Filter Buttons */}

      <div className="filter-buttons">

        {
          categories.map((category) => (

            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>

          ))
        }

      </div>

      {/* Gallery */}

      <div className="gallery">

        {
          filteredImages.map((image) => (

            <ImageCard
              key={image.id}
              imageUrl={image.url}
              title={image.title}
              description={image.description}
              onClick={() => setSelectedImage(image)}
            />

          ))
        }

      </div>

      {/* Modal */}

      {
        selectedImage && (

          <div
            className="modal"
            onClick={() => setSelectedImage(null)}
          >

            <div className="modal-content">

              <img
                src={selectedImage.url}
                alt={selectedImage.title}
              />

              <h2>{selectedImage.title}</h2>

              <p>{selectedImage.description}</p>

            </div>

          </div>

        )
      }

      {/* Footer */}

      <footer className="footer">

  <h3>Dynamic Image Gallery</h3>

  <p>
    Built with React JS 🚀
  </p>

  <p>
    Explore beautiful images with modern UI
  </p>

  <div className="footer-icons">

    <span>🌍</span>
    <span>📸</span>
    <span>❤️</span>

  </div>

</footer>

    </div>
  );
}

export default App;