import React, { useState, useEffect } from 'react'
import "./Udemyc.css"
import pic1 from "./components/assests/logo-udemy.png"
import pic2 from "./components/assests/cart.png"
import pic3 from "./components/assests/globe.jpg"
// import pic4 from "./components/assests/card image.webp"
import slide1 from "./components/assests/slide1.jpeg"
import slide2 from "./components/assests/slide2.jpg"

const Udemy = () => {

    const images = [slide1, slide2]
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(intervalId);
        
      }, [images.length]);
    
      const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };
    
      const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
  return (
    <>
      {/* navbar */}
      <div id="navbar">
        <div id="logo"><img src={pic1} alt="Logo" /></div>
        <div id="navcontent">
          <ul>
            <li><a href="#">Categories</a></li>
            <li><input type="text" placeholder='Search for anything' id='search'/></li>
            <li><a href="#">Plans & Pricing</a></li>
            <li><a href="#">Udemy Business</a></li>
            <li><a href="#">Teach On Udemy</a></li>
          </ul>
        </div>
        <div id="others">
          <img src={pic2} alt="Cart" id='cart'/> 
          <button id='login'>Log In</button>
          <button id='signup'>Signup</button>
          <img src={pic3} alt="Globe" id='globe'/>
        </div>
      </div>

      {/* {main page} */}

      <div id="mainpage">
        <div id="Carousels">
          <button className="carousel-button left" onClick={handlePrevClick}>&#9664;</button>
          <img src={images[currentIndex]} alt="Carousel Slide" className="carousel-image" />
          <button className="carousel-button right" onClick={handleNextClick}>&#9654;</button>
        </div>

        <div className='merge-container'>
            <h1>Skills that drive you forward</h1>
            <p className='merge-para'>Technology and the world of work change fast - with us, you're faster. Get the skills to achieve goals and stay competitive</p><br />
            <h3 className='merge-head'>Plan for Organisation</h3>
        </div>
        
        <div id="mainpagedescription">
          <h1>All the skills you need in one place</h1>
          <h3>From critical skills to technical topics, Udemy supports your professional development.</h3>
        </div>

        <div className='links-container'>
            <a  className= "anchor" href=''>Web Development</a>
            <a className= "anchor" href="">IT Certifications</a>
            <a className= "anchor" href="">Leadership</a>
            <a className= "anchor" href="">Data Science</a>
            <a className= "anchor" href="">Communication</a>
            <a className= "anchor" href="">Business Analytics & Intelligence</a>
        </div>
{/* {card section} */}
        <div id="card">
          <div className="card-item">
            <img src="https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg" alt="Card 1" />
            <h3>The Complete 2024 Web Development Bootcamp</h3>
            <p>By Dr. Angela Hu</p>
          </div>
          <div className="card-item">
            <img src="https://img-c.udemycdn.com/course/240x135/625204_436a_3.jpg" alt="Card 2" />
            <h3>The Complete 2024 Web Development Bootcamp</h3>
            <p>By Dr. Angela Hu</p>
          </div>
          <div className="card-item">
            <img src= "https://img-c.udemycdn.com/course/240x135/965528_737d_7.jpg" alt="Card 3" />
            <h3>The Complete 2024 Web Development Bootcamp</h3>
            <p>By Dr. Angela Hu</p>
          </div>
          <div className="card-item">
            <img src="https://img-c.udemycdn.com/course/240x135/1415652_ad99_4.jpg" alt="Card 4" />
            <h3>The Complete 2024 Web Development Bootcamp</h3>
            <p>By Dr. Angela Hu</p>
          </div>
        </div>
    </div>

    <footer className="footer">

    <div className='footer-logo'>
        <h1>Top companies choose Udemy Business to build in-demand career skills.</h1>
        <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="logo-1" />
        <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="logo-2" />
        <img src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" alt="logo-3" />
        <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="logo-4" />
        <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="logo-5" />
    </div>
            <div className="container">
                <div className="footer-top">
                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Press</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Community</h4>
                        <ul>
                            <li><a href="#">Students</a></li>
                            <li><a href="#">Instructors</a></li>
                            <li><a href="#">Developers</a></li>
                            <li><a href="#">Partners</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Teaching</h4>
                        <ul>
                            <li><a href="#">Teach on Udemy</a></li>
                            <li><a href="#">Get Support</a></li>
                            <li><a href="#">Resources</a></li>
                            <li><a href="#">Tech Requirements</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                            <li><a href="#">Sitemap</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-copyright">
                        &copy; {new Date().getFullYear()} Udemy, Inc.
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Udemy



//css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

#navbar {
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

#logo > img {
  height: 35px;
}

#navcontent {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

#navcontent > ul {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

#navcontent > ul > li {
  list-style-type: none;
  margin: 0 10px;
}

#navcontent > ul > li > a {
  text-decoration: none;
  color: black;
  font-size: 16px;
}

#search {
  height: 35px;
  width: 100%;
  max-width: 600px;
  padding: 10px 20px;
  border-radius: 30px;
  border: 1px solid black;
  font-size: 15px;
  margin: 10px 0;
}

#others {
  display: flex;
  align-items: center;
  gap: 10px;
}

#others img,
#others button {
  height: 35px;
}

#login,
#signup {
  height: 40px;
  width: 80px;
  font-size: 16px;
  font-weight: bold;
  border: none;
}

#login {
  background-color: white;
}

#signup {
  background-color: black;
  color: white;
}

#Carousels {
  width: 1350px;
  height: 380px;
  margin: 20px 0px 0px 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  transition: opacity 1s ease-in-out;
  opacity: 0;
}

.carousel-image:nth-child(2) {
  opacity: 1;
}

.carousel-button {
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 2rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.5rem 1rem;
  cursor: pointer;
  z-index: 10;
}

.carousel-button.left {
  left: 0;
}

.carousel-button.right {
  right: 0;
}

#mainpagedescription {
  margin: 50px 20px;
  /* text-align: center; */
  margin-left: 15vh;
}

#card {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
}

.card-item {
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: calc(100% - 40px);
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.card-item img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  margin-bottom: 0px;
}

.card-item h3 {
  margin: 20px 0px 10px 0;
  font-size: 18px;
}

.card-item p {
  font-size: 14px;
  color: #666;
}

.merge-container {
  width: 400px; 
  height: 250px;
  border: 1px solid black;
  padding: 20px;
  position: absolute;
  top: 150px;
  left: 160px;
  background-color: #e9ecef;
}

.merge-head {
  width: 240px;
  height: 50px;
  border: 1px solid black;
  padding: 20px;
  background-color: #000;
  color: #f4f4f4;
}

.links-container {
  display: flex;
  gap: 20px;
  margin-left: 15vh;
  text-size-adjust: 3rem; 
}

.anchor {
  color: black;
  /* text-decoration: none; */
  font-size: 16px;
}

.anchor :first-child {
  text-decoration: underline;
}

.footer {
  background: #191818;
  padding: 40px 20px;
  color: #eef2f6;
  font-size: 14px;
  text-align: center;
}

.footer-logo {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  align-items: center;
  margin-bottom: 30px;
  border-bottom: 1px solid white;
  padding-bottom: 25px;
}

.footer .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
}

.footer-top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
}

.footer-column {
  flex: 1;
  padding: 0 20px;
  min-width: 200px;
}

.footer-column h4 {
  font-size: 16px;
  margin-bottom: 20px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column ul li {
  margin-bottom: 10px;
}

.footer-column ul li a {
  color: #f7f8f9;
  text-decoration: none;
}

.footer-column ul li a:hover {
  text-decoration: underline;
}

.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
  border-top: 1px solid #e9ecef;
  padding-top: 20px;
}

.footer-social {
  display: flex;
  gap: 15px;
}

.footer-social a {
  color: #f7f8f9;
  font-size: 20px;
}

.footer-social a:hover {
  color: #007bff;
}

.footer-copyright {
  color: #6c757d;
  text-align: center;
  margin-top: 20px;
}

@media (max-width: 1024px) {
  #Carousels {
    width: 100%;
    margin-left: 0;
  }

  .merge-container {
    width: 80%; 
    left: 10%; 
  }

  .links-container {
    margin-left: 0; 
    justify-content: center;
  }
}

@media (max-width: 768px) {
  #navbar {
    padding: 10px;
  }

  #search {
    max-width: 100%; 
  }

  #navcontent > ul {
    justify-content: center; 
  }

  .merge-container {
    width: 90%; 
    left: 5%; 
  }

  .footer-top {
    flex-direction: column; 
    align-items: center; 
  }
}

@media (max-width: 480px) {
  #navbar {
    height: auto; 
    flex-direction: column;
  }

  #logo > img {
    margin-bottom: 10px; 
  }

  #navcontent > ul > li {
    margin: 5px 0; 
  }

  #search {
    margin: 10px 0; 
  }

  #others {
    flex-direction: column; 
    align-items: center;
  }

  .merge-container {
    width: 90%;
    left: 5%; 
    top: auto; 
  }

  .merge-head {
    width: 100%;
    text-align: center; 
  }

  .links-container {
    margin: 20px 0; 
    justify-content: center; 
  }

  .footer-top {
    margin-bottom: 20px
  }
}
