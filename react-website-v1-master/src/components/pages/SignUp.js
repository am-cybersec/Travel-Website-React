import React, { useState } from 'react';
import '../../App.css';

export default function SignUp() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('✅ Account created successfully!');
        setFormData({ name: '', email: '', password: '' });
      } else {
        setMessage('❌ ' + data.error);
      }
    } catch (err) {
      setMessage('❌ Server se connect nahi ho saka');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        background: 'rgba(0,0,0,0.75)',
        padding: '40px',
        borderRadius: '25px',
        width: '400px',
      }}>
        <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '30px' }}>Sign Up</h1>

        {message && <p style={{ color: message.startsWith('✅') ? '#00ffcc' : 'red', textAlign: 'center' }}>{message}</p>}

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '10px', border: 'none', fontSize: '16px' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '10px', border: 'none', fontSize: '16px' }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '10px', border: 'none', fontSize: '16px' }}
        />
        <button
          onClick={handleSubmit}
          style={{
            width: '100%', padding: '14px', background: '#00ffcc',
            border: 'none', borderRadius: '10px', fontSize: '18px',
            fontWeight: 'bold', cursor: 'pointer'
          }}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}