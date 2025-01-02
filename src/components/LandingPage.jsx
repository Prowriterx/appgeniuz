import React from 'react';

    function LandingPage({ rate, images }) {
      return (
        <div className="landing-page">
          <header>
            <img className="logo" src={images.logo} alt="AppGenius Logo" />
            <h1>AppGenius</h1>
          </header>
          <section>
            <h2>About Us</h2>
            <p>
              At AppGenius, we specialize in customizing applications tailored to meet the unique needs of businesses. Our goal is to provide a seamless experience that allows businesses to showcase their products and services effectively. With our user-friendly interface, even non-technical users can manage their app with ease. Our team of experts is dedicated to helping you succeed by providing ongoing support and guidance.
            </p>
            <img className="about-image" src={images.about} alt="About Us" />
          </section>
          <section>
            <h2>Benefits</h2>
            <p>
              Our app enhances business operations in several ways:
            </p>
            <ul>
              <li><strong>Increased Visibility:</strong> Showcase your products and services to a wider audience.</li>
              <li><strong>24/7 Support:</strong> Our chatbot is available around the clock to assist customers.</li>
              <li><strong>User-Friendly Interface:</strong> Easy for both business owners and customers to navigate.</li>
              <li><strong>Editable Content:</strong> Business owners can easily update images, prices, and contact details without technical knowledge.</li>
              <li><strong>Real-Time Updates:</strong> Changes made in the admin area reflect immediately on the landing page.</li>
            </ul>
          </section>
          <section>
            <h2>Real-life Examples</h2>
            <div className="example">
              <h3>Example 1: Retail Store</h3>
              <p>A retail store can use the app to manage inventory and showcase products. Customers can view the latest arrivals and promotions.</p>
              <img className="example-image" src={images.example1} alt="Retail Store Example" />
            </div>
            <div className="example">
              <h3>Example 2: Restaurant</h3>
              <p>A restaurant can display its menu, daily specials, and allow customers to make reservations directly through the app.</p>
              <img className="example-image" src={images.example2} alt="Restaurant Example" />
            </div>
            <div className="example">
              <h3>Example 3: Service Provider</h3>
              <p>A service provider can showcase their services, customer testimonials, and allow clients to book appointments online.</p>
              <img className="example-image" src={images.example3} alt="Service Provider Example" />
            </div>
            <div className="example">
              <h3>Example 4: Online Shop</h3>
              <p>An online shop can display products, manage orders, and provide customer support through the integrated chatbot.</p>
              <img className="example-image" src={images.example4} alt="Online Shop Example" />
            </div>
          </section>
          <section>
            <h2>Contact Us</h2>
            <p>WhatsApp: 0732729485</p>
            <p>Email: prodigitalworks@proton.me</p>
          </section>
          <section>
            <h2>Rate per Hour</h2>
            <p>R{rate}</p>
          </section>
        </div>
      );
    }

    export default LandingPage;
