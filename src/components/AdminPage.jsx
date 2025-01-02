import React, { useState } from 'react';

    function AdminPage({ setRate, images, setImages }) {
      const [password, setPassword] = useState('');
      const [isAuthenticated, setIsAuthenticated] = useState(false);
      const [newRate, setNewRate] = useState(500); // Default rate
      const [saveMessage, setSaveMessage] = useState('');

      const handleLogin = (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
          if (password === 'admin123') {
            setIsAuthenticated(true);
          }
        }
      };

      const handleImageChange = (e, key) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImages((prev) => ({ ...prev, [key]: reader.result }));
            setSaveMessage('Image updated successfully!');
            setTimeout(() => setSaveMessage(''), 3000); // Clear message after 3 seconds
          };
          reader.readAsDataURL(file);
        }
      };

      const handleRateChange = () => {
        setRate(newRate);
        setSaveMessage('Rate updated successfully!');
        setTimeout(() => setSaveMessage(''), 3000); // Clear message after 3 seconds
      };

      return (
        <div>
          {!isAuthenticated ? (
            <div>
              <h2>Admin Login</h2>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                onKeyDown={handleLogin}
              />
              <button onClick={handleLogin}>Login</button>
            </div>
          ) : (
            <div>
              <h2>Admin Area</h2>
              <p>Edit images, contact details, and rate per hour here.</p>
              <h3>Change Logo Image</h3>
              <input type="file" onChange={(e) => handleImageChange(e, 'logo')} />
              <img src={images.logo} alt="Logo Preview" style={{ width: '150px', marginTop: '10px' }} />
              <h3>Change About Us Image</h3>
              <input type="file" onChange={(e) => handleImageChange(e, 'about')} />
              <img src={images.about} alt="About Us Preview" style={{ width: '200px', marginTop: '10px' }} />
              <h3>Change Example Images</h3>
              {Object.keys(images).filter(key => key !== 'logo' && key !== 'about').map((key) => (
                <div key={key}>
                  <input type="file" onChange={(e) => handleImageChange(e, key)} />
                  <img src={images[key]} alt={`${key} Preview`} style={{ width: '200px', marginTop: '10px' }} />
                </div>
              ))}
              <h3>Edit Rate per Hour</h3>
              <input
                type="number"
                value={newRate}
                onChange={(e) => setNewRate(e.target.value)}
                placeholder="Enter new rate"
              />
              <button onClick={handleRateChange}>Update Rate</button>
              {saveMessage && <p style={{ color: 'green' }}>{saveMessage}</p>}
            </div>
          )}
        </div>
      );
    }

    export default AdminPage;
