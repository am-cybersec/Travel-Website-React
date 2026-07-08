/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "../../App.css";

export default function Services() {
  const services = [
    {
      name: "Flight Booking",
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
    },
    {
      name: "Hotel Reservation",
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },
    {
      name: "Tour Guide",
      img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
    },
    {
      name: "Adventure Trips",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      name: "Cruise Travel",
      img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    },
    {
      name: "Travel Insurance",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "70px",
          marginBottom: "40px",
        }}
      >
        OUR SERVICES
      </h1>

      {/* Services Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              background: "rgba(0,0,0,0.7)",
              padding: "20px",
              borderRadius: "25px",
              textAlign: "center",
            }}
          >
            <img
              src={service.img}
              alt={service.name}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />

            <h2 style={{ color: "white", marginTop: "15px" }}>
              {service.name}
            </h2>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div style={{ marginTop: "80px" }}>
        <h1
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "50px",
          }}
        >
          Why Choose Us?
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              padding: "25px",
              borderRadius: "20px",
              color: "white",
              textAlign: "center",
            }}
          >
            <h2>24/7 Support ☎️</h2>
            <p>Our team is always available to assist you anytime.</p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              padding: "25px",
              borderRadius: "20px",
              color: "white",
              textAlign: "center",
            }}
          >
            <h2>Best Prices 💰</h2>
            <p>Affordable travel packages with great deals.</p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              padding: "25px",
              borderRadius: "20px",
              color: "white",
              textAlign: "center",
            }}
          >
            <h2>Safe Travel 🛡️</h2>
            <p>Your safety and comfort are our top priorities.</p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              padding: "25px",
              borderRadius: "20px",
              color: "white",
              textAlign: "center",
            }}
          >
            <h2>Trusted Guides 🗺️</h2>
            <p>Professional guides for memorable experiences.</p>
          </div>
        </div>
      </div>
    </div>
  );
}