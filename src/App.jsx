import React, { useState } from 'react';
    import LandingPage from './components/LandingPage.jsx';
    import AdminPage from './components/AdminPage.jsx';

    function App() {
      const [isAdmin, setIsAdmin] = useState(false);
      const [rate, setRate] = useState(500); // Default rate
      const [images, setImages] = useState({
        logo: '/logo.png',
        about: '/src/about-image.jpg',
        example1: '/src/example1.jpg',
        example2: '/src/example2.jpg',
        example3: '/src/example3.jpg',
        example4: '/src/example4.jpg',
      });

      return (
        <div>
          <nav>
            <button onClick={() => setIsAdmin(false)}>Home</button>
            <button onClick={() => setIsAdmin(true)}>Admin</button>
          </nav>
          {isAdmin ? <AdminPage setRate={setRate} setImages={setImages} images={images} /> : <LandingPage rate={rate} images={images} />}
        </div>
      );
    }

    export default App;
