/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";

export default function Products() {
  const [packages, setPackages] = useState([]);
  const [fav, setFav] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setPackages(data))
      .catch(err => console.log(err));

    const saved = JSON.parse(localStorage.getItem("fav")) || [];
    setFav(saved);
  }, []);

  const addFav = async (pkg) => {
  const updated = [...fav, pkg];
  setFav(updated);
  localStorage.setItem("fav", JSON.stringify(updated));

  // MongoDB mein bhi save karo
  try {
    await fetch('http://localhost:5000/api/favorites', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: pkg.name, price: pkg.price, img: pkg.img }),
    });
  } catch (err) {
    console.log(err);
  }
};

  return (
    <div style={{
      minHeight: "100vh",
      backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "40px"
    }}>
      <h1 style={{ color: "white", textAlign: "center", fontSize: "70px", marginBottom: "40px" }}>
        TRAVEL PACKAGES
      </h1>

      <h2 style={{ color: "white" }}>Saved Trips: {fav.length}</h2>

      {/* Packages */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gap: "30px"
      }}>
        {packages.map((pkg) => (
          <div key={pkg._id} style={{
            background: "rgba(0,0,0,0.75)",
            borderRadius: "25px",
            padding: "20px"
          }}>
            <img src={pkg.img} alt={pkg.name} style={{
              width: "100%", height: "280px",
              objectFit: "cover", borderRadius: "20px"
            }} />
            <h2 style={{ color: "white" }}>{pkg.name}</h2>
            <h3 style={{ color: "#00ffcc" }}>{pkg.price}</h3>
            <button onClick={() => addFav(pkg)} style={{
              padding: "12px 20px", border: "none",
              borderRadius: "10px", cursor: "pointer"
            }}>
              Save Trip
            </button>
          </div>
        ))}
      </div>

      {/* Reviews Section */}
      <div style={{ marginTop: "70px" }}>
        <h1 style={{ color: "white", textAlign: "center", marginBottom: "30px" }}>
          Traveler Reviews
        </h1>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px"
        }}>
          <div style={{ background: "rgba(255,255,255,0.15)", padding: "25px", borderRadius: "20px", color: "white" }}>
            <h4>⭐⭐⭐⭐⭐</h4>
            <p>"Amazing experience! Switzerland trip was unforgettable."</p>
            <h4>- Sarah</h4>
          </div>
          <div style={{ background: "rgba(255,255,255,0.15)", padding: "25px", borderRadius: "20px", color: "white" }}>
            <h4>⭐⭐⭐⭐⭐</h4>
            <p>"Best travel agency. Everything was perfectly managed."</p>
            <h4>- Ali</h4>
          </div>
          <div style={{ background: "rgba(255,255,255,0.15)", padding: "25px", borderRadius: "20px", color: "white" }}>
            <h4>⭐⭐⭐⭐</h4>
            <p>"Loved the Maldives package. Highly recommended!"</p>
            <h5>- Areeba</h5>
          </div>
        </div>
      </div>
    </div>
  );
}