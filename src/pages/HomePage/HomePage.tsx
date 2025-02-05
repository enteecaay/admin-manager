import React from "react";
import "./HomePage.scss";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <section className="intro-section">
        <h1>Welcome to Admin Manager</h1>
        <p>
          Your one-stop solution for managing all your administrative tasks
          efficiently.
        </p>
      </section>
      <section className="features-section">
        <h2>Features</h2>
        <div className="features">
          <div className="feature">
            <h3>CRUD for Posts</h3>
            <p>Create, Read, Update, and Delete posts with ease.</p>
          </div>
          <div className="feature">
            <h3>CRUD for Users</h3>
            <p>Manage user information and permissions effortlessly.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
