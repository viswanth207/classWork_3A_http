const http = require('http')

const server = http.createServer((req, res)=>{

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hospital Management System</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        *{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
}

header {
    background-color: white;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
}

body {
    margin-top: 60px; 
}

.header-container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
}

.logo {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 100px auto;
    flex-wrap: wrap;
  }
  
  .logo .image {
    text-align: center;
    align-self: center;
    color: #007bff;
  }
  
  .logo .heading {
    align-content: center;
    font-family: Garamond, serif;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 36px;
    color: #007bff;
  }
  
  .logo .subheading {
    font-family: "Lucida Handwriting", cursive;
    font-weight: 500;
    font-size: 10px;
    color:#007bff;
  }

.sub {
    margin-left: auto;
}

nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex; 
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    color: black;
    text-decoration: none;
    font-size: 1.2em;
    display: flex;
    justify-content: center;
}
.sub #log {
    background-color: #007bff;
    border-radius: 20px;
    width: 150px;
    height: 25px;
    padding: 1px;
}
.sub #log1 {
    color: white;
}
nav ul li a:hover {
    color: royalblue;
}

main {
    padding: 50px;
    background-color: #007bff;
}

.intro {
    display: flex;
    align-items: center; 
    justify-content: space-between; 
    background-color: #007bff;
}

.text-content {
    max-width: 60%; 
    color: white;
}
.text-content h2{
    font-size: 50px;
}
.text-content p{
    font-size: 15px;
    width: 500px;
    margin-left: 20px;
}

.image-content {
    display: flex;
    gap: 20px;
}

.intro-img {
    width: 200px;
    height: auto;
    border-radius: 8px; 
}
.carousel {
    position: relative;
    width: 80%; 
    margin: auto; 
}

.carousel-wrapper {
    overflow: hidden;
    width: 100%;
    height: 300px; 
    position: relative;
}

.carousel-images {
    display: flex;
    width: 100%;
    transition: transform 0.5s ease-in-out; 
}

.carousel-slide {
    flex: 0 0 100%;
    height: 100%;
    box-sizing: border-box; 
}

.carousel-img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
}

.prev-btn,
.next-btn {
    position: absolute;
    top: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
    font-size: 1.5em;
    transform: translateY(-50%);
    z-index: 10;
}

.prev-btn {
    left: 10px;
}

.next-btn {
    right: 10px;
}

.prev-btn:hover,
.next-btn:hover {
    background-color: rgba(0, 0, 0, 0.8);
}

.services {
    padding: 40px 20px;
    background-color: #f9f9f9; 
    text-align: center;
}

.services h2 {
    font-size: 2em;
    margin-bottom: 20px;
}

.service-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-content: center;
}

.service-item {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    opacity: 0; 
    transform: translateY(20px); 
    animation: slide-in 0.6s forwards;
}


@keyframes slide-in {
    to {
        opacity: 1;
        transform: translateY(0); 
    }
}

.service-item:hover {
    transform: translateY(-10px); 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
}

.service-item i {
    font-size: xx-large; 
    color: #007bff; 
    margin-bottom: 15px;
}

.service-item h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
}

.service-item p {
    font-size: 1em;
    color: #555;
}



.features {
    padding: 40px 20px;
    text-align: center;
}

.features h2 {
    font-size: 2em;
    margin-bottom: 20px;
}

.features-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    background-color: #007bff;
}

.feature-info {
    flex: 1; 
    text-align: left; 
}

.feature-info h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
    color: white;
    margin-left: 40px;
}

.feature-info p {
    font-size: 1em;
    color: white;
    margin-bottom: 20px;
    margin-left: 40px;

}

.feature-icons {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
}

.icon-container {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 50%;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 80px; 
    height: 80px;
    margin-left: 40px;
}

.icon-container i {
    font-size: 2em; 
    color: #007bff;
    margin-bottom: 10px;
}

.icon-container p {
    font-size: 0.9em;
    color: #555;
    margin: 0;
}

.feature-image {
    flex: 1;
    text-align: center;
}

.feature-image img {
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto; 
}







.doctors-info {
    padding: 40px 20px;
    background-color: #f9f9f9; 
    text-align: center;
}

.doctors-info h2 {
    font-size: 2em;
    margin-bottom: 20px;
}

.doctor-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 20px;
    justify-content: center;
}

.doctor-item {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease; 
    opacity: 0;
    transform: translateY(20px); 
    position: relative; 
}

.doctor-item:hover {
    transform: translateY(-10px); 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.doctor-item.visible {
    opacity: 1;
    transform: translateY(0); 
}

.doctor-img {
    width: 100%;
    margin-bottom: 15px;
}

.doctor-item h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
    transition: color 0.3s ease;
}

.doctor-item p {
    font-size: 1em;
    color: #555;
    transition: color 0.3s ease; 
}

.appointment-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 20px;
    background-color: #f7faff;
}

.appointment-container {
    display: flex;
    max-width: 1200px;
    width: 100%;
    gap: 20px;
}

.appointment-details {
    flex: 1;
    padding: 20px;
}

.appointment-tag {
    background-color: #e0ebfc;
    padding: 5px 10px;
    border-radius: 10px;
    display: inline-block;
    margin-bottom: 10px;
    color: #007bff;
}

.appointment-details h2 {
    font-size: 2em;
    color: #1e2a40;
    margin-bottom: 20px;
}

.appointment-details p {
    color: #8f8f8f;
    margin-bottom: 40px;
}

.sub-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.contact-item {
    display: flex;
    align-items: center;
    background-color: #f0f4fd;
    padding: 20px;
    border-radius: 10px;
}

.icon-container1 {
    background-color: #fff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
}

.icon-container1 i {
    color: #007bff;
    font-size: 1.5em;
}

.contact-info p {
    margin: 0;
    color: #1e2a40;
}

.contact-info strong {
    color: #1e2a40;
}

.appointment-form-container {
    flex: 1;
    padding: 20px;
    background-color: #f0f4fd;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
}

.appointment-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%; 
    width: 400px;
}

.form-group {
    display: flex;
    gap: 20px;
    width: 100%; 
}

.form-group input, 
form select, 
textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1em;
}

textarea {
    resize: none;
    height: 100px;
}

.book-btn {
    background-color: #007bff;
    color: #fff;
    padding: 15px;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
    width: 100%;
    max-width: 200px; 
    align-self: center;
}

.book-btn:hover {
    background-color: #0056b3;
}

.social-media {
    margin-top: 10px;
    display: none;
}

.doctor-item:hover .social-media {
    display: flex; 
    justify-content: center; 
}

.social-icon {
    font-size: 1.5em; 
    color: #007bff;
    margin: 0 10px; 
    text-decoration: none;
    transition: background-color 0.3s ease, color 0.3s ease; 
    display: inline-block; 
    width: 40px;
    height: 40px;
    border-radius: 50%; 
    background-color: #fff; 
    line-height: 40px;
    text-align: center;
    border: 2px solid #007bff; 
}

.social-icon:hover {
    background-color:#007bff ;
    color:white ;
}

.social-icon:hover {
    background-color: #007bff; 
}

.about-container {
    width: 90%;
    margin: 50px auto;
    background-color: #fff;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    margin-top: 100px;
}

h1 {
    text-align: center;
    color: #007BFF;
    margin-bottom: 30px;
}

.about-text {
    line-height: 1.8;
    color: #555;
    font-size: 18px;
    text-align: justify;
}

.mission, .vision, .team {
    margin-top: 50px;
}

.team {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.team-member {
    text-align: center;
    margin: 20px;
    width: 250px;
    margin-right: 50px;
}

.team-member img {
    width: 300px;
    height: 250px;
    border-radius: 10%;
    margin-bottom: 15px;
}

.team-member h3 {
    margin: 10px 0;
    color: #333;
}

.team-member p {
    color: #777;
}


.footer {
    background-color: #007BFF; 
    color: #ecf0f1;
    padding: 40px 0;
    font-family: Arial, sans-serif;
}

.footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.footer-section {
    flex: 1;
    min-width: 220px;
    margin: 20px;
}
.footer-section :hover{
    color: black;
}

.footer-section h4 {
    color: #ecf0f1;
    font-size: 18px;
    margin-bottom: 15px;
    text-transform: uppercase;
}
.footer-section h4 :hover{
    color: black;
}

.footer-section p, 
.footer-section ul {
    font-size: 14px;
    line-height: 1.8;
    color: white;
}

.footer-section ul {
    list-style: none;
    padding: 0;
}

.footer-section ul li {
    margin-bottom: 10px;
}

.footer-section ul li a {
    color: #ecf0f1;
    text-decoration: none;
}
.footer-section ul li:hover {
    color: black;
}

.footer-section a {
    color: #3498db;
    text-decoration: none;
}

.footer-section a:hover {
    text-decoration: underline;
}

.footer-section.social-media a {
    display: inline-block;
    margin-right: 10px;
}

.footer-section.social-media img {
    width: 30px;
    height: 30px;
    transition: transform 0.3s ease;
}

.footer-section.social-media img:hover {
    transform: scale(1.1); 
}

.footer-bottom {
    text-align: center;
    padding: 10px 0;
    background-color: #007BFF;
    color: #bdc3c7;
    font-size: 12px;
    margin-top: 30px;
}

.footer-bottom p {
    margin: 0;
    color: white;
}

@media (max-width: 768px) {
    .footer-content {
        flex-direction: column;
        align-items: center;
    }
    
    .footer-section {
        text-align: center;
    }

    .footer-section.social-media a {
        margin: 0 5px;
    }
}

@media (max-width: 480px) {
    .footer-section {
        min-width: 100%;
    }
}


.footer a:hover {
    text-decoration: underline;
}


    </style>
</head>
<body>
    <header>
        <div class="header-container" id="head">
                <div class="logo">
                    <div class="image"><i class='fas fa-hospital' style='font-size:60px'></i></div>
                    <div class="heading">PULSECARE
                      <div class="subheading">Where Every Beat Matters</div>
                    </div>
                </div>
            <div class="sub">
                <nav>
                    <ul>
                        <li><a href="#head">Home</a></li> 
                        <li><a href="#doctor">Doctor</a></li> 
                        <li><a href="#appointment">Appointment</a></li>
                        <li><a href="#about">About us</a></li>
                        <li id="log"><a id="log1" href="./login.html">Login/Register</a></li>  
                    </ul>
                </nav>
                
            </div>
        </div>
    </header>
    
    <main>
        <section class="intro">
            <div class="text-content">
                <h2>Welcome to Our Hospital Management System</h2>
                <p>We provide a comprehensive solution for managing hospital operations, from patient registration to staff management. Explore our features and services to learn more.</p>
            </div>
            <div class="carousel">
                <div class="carousel-wrapper">
                    <div class="carousel-images">
                        <div class="carousel-slide"><img src="./assests/images/cardi.jpg" alt="Hospital Image 1" class="carousel-img"></div>
                        <div class="carousel-slide"><img src="./assests/images/neuro.jpeg" alt="Hospital Image 2" class="carousel-img"></div>
                        <div class="carousel-slide"><img src="./assests/images/pulmo.webp" alt="Hospital Image 3" class="carousel-img"></div>
                    </div>
                </div>
                <button class="prev-btn" onclick="prevImage()">&#10094;</button>
                <button class="next-btn" onclick="nextImage()">&#10095;</button>
            </div>
        </section>
    </main>

        <section class="services">
            <h2>Our Services</h2>
            <div class="service-list">
                <div class="service-item">
                    <i class="fas fa-clinic-medical"></i> 
                    <h3>Emergency Care</h3>
                    <p>Providing immediate and effective care for emergencies.</p>
                </div>
                <div class="service-item">
                    <i class="fas fa-stethoscope"></i> 
                    <h3>General Checkups</h3>
                    <p>Routine examinations and health checkups for all patients.</p>
                </div>
                <div class="service-item">
                    <i class="fas fa-prescription-bottle-alt"></i> 
                    <h3>Pharmacy Services</h3>
                    <p>On-site pharmacy with a wide range of medications and prescriptions.</p>
                </div>
                <div class="service-item">
                    <i class="fas fa-flask"></i> 
                    <h3>Laboratory Services</h3>
                    <p>Comprehensive lab tests and diagnostics to support accurate diagnoses.</p>
                </div>
                <div class="service-item">
                    <i class="fas fa-brain"></i> 
                    <h3>Neurology</h3>
                    <p>Expert care for neurological conditions and disorders.</p>
                </div>
                <div class="service-item">
                    <i class="fas fa-heartbeat"></i> 
                    <h3>Cardiology</h3>
                    <p>Comprehensive care for cardiovascular health and diseases.</p>
                </div>
            </div>            
        </section>

        <section class="features">
            <h2>Why Choose Us</h2>
            <div class="features-container">
                <div class="feature-info">
                    <h3>Why Choose Us</h3>
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.</p>
                    
                    <div class="feature-icons">
                        <div class="icon-container">
                            <i class="fas fa-stethoscope"></i>
                            <p>Experience</p>
                        </div>
                        <div class="icon-container">
                            <i class="fas fa-tachometer-alt"></i>
                            <p>Quality</p>
                        </div>
                        <div class="icon-container">
                            <i class="fas fa-smile-beam"></i>
                            <p>Positive</p>
                        </div>
                        <div class="icon-container">
                            <i class="fas fa-clock"></i>
                            <p>24 Hours</p>
                        </div>
                    </div>
                </div>
                <div class="feature-image">
                    <img src="./assests/images/fea.jpg" alt="Feature Image">
                </div>
            </div>
        </section>

        <section  class="doctors-info" id="doctor">
            <h2>Our Doctors</h2>
            <div class="doctor-list">
                <div class="doctor-item">
                    <img src="./assests/images/doc1.jpeg" alt="Dr. Chaya Patil" class="doctor-img">
                    <h3>Dr. Chaya Patil</h3>
                    <p>Specialist in Cardiology</p>
                    <div class="social-media">
                        <a href="https://www.twitter.com/in/dr-chaya-patil" target="_blank" class="social-icon"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.facebook.com/dr-chaya-patil" target="_blank" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/dr-chaya-patil" target="_blank" class="social-icon"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="doctor-item">
                    <img src="./assests/images/doc2.jpeg" alt="Dr. Jane Smith" class="doctor-img">
                    <h3>Dr. Jane Smith</h3>
                    <p>Neurologist</p>
                    <div class="social-media">
                        <a href="https://www.twitter.com/in/dr-jane-smith" target="_blank" class="social-icon"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.facebook.com/dr-jane-smith" target="_blank" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/dr-jane-smith" target="_blank" class="social-icon"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="doctor-item">
                    <img src="./assests/images/doc3.jpeg" alt="Dr. Elena" class="doctor-img">
                    <h3>Dr. Elena</h3>
                    <p>General Practitioner</p>
                    <div class="social-media">
                        <a href="https://www.twitter.com/in/dr-elena" target="_blank" class="social-icon"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.facebook.com/dr-elena" target="_blank" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/dr-elena" target="_blank" class="social-icon"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </section>
        <section class="appointment-section" id="appointment">
            <div class="appointment-container">
            
                <div class="appointment-details">
                    <div class="appointment-tag">Appointment</div>
                    <h2>Make An Appointment To Visit Our Doctor</h2>
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    
                    
                    <div class="sub-container">
                        <div class="contact-item">
                            <div class="icon-container1">
                                <i class="fas fa-phone-alt"></i>
                            </div>
                            <div class="contact-info">
                                <p>Call Us Now</p>
                                <p><strong>+012 345 6789</strong></p>
                            </div>
                        </div>
        
                        <div class="contact-item">
                            <div class="icon-container1">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="contact-info">
                                <p>Mail Us Now</p>
                                <p><strong>Pulsecare@hospitalmanagement.com</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
        
              
                <div class="appointment-form-container">
                    <form class="appointment-form">
                        <div class="form-group">
                            <input type="text" placeholder="Your Name" required>
                            <input type="email" placeholder="Your Email" required>
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Your Mobile" required>
                            <select required>
                                <option value="">Choose Doctor</option>
                                <option value="1">Doctor 1</option>
                                <option value="2">Doctor 2</option>
                                <option value="2">Doctor 3</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <input type="date" required>
                            <input type="time" required>
                        </div>
                        <textarea placeholder="Describe your problem" required></textarea>
                        <button type="submit" class="book-btn">Book Appointment</button>
                    </form>
                </div>
            </div>
        </section>
    </header>
    <div class="about-container" id="about">
        <h1>About Us</h1>
        <div class="about-text">
            <p>
                Welcome to Pulse Care, where our mission is to provide high-quality healthcare services to the community. Our hospital has been a cornerstone in providing medical excellence, focusing on patient-centric care, advanced technology, and comprehensive treatment options. 
            </p>
            <p>
                At Pulse Care, we believe that every patient deserves the best medical attention, and we are committed to delivering it with care, compassion, and professionalism. Our team of highly skilled doctors, nurses, and healthcare professionals work tirelessly to ensure that each patient receives personalized treatment tailored to their needs.
            </p>
        </div>

        <div class="mission">
            <h2>Our Mission</h2>
            <p class="about-text">
                Our mission is to enhance the health and well-being of the communities we serve by providing the highest quality medical services in a compassionate and caring environment.
            </p>
        </div>

        <div class="vision">
            <h2>Our Vision</h2>
            <p class="about-text">
                To be a leading healthcare provider known for delivering excellent and innovative care, while promoting a healthier future for all.
            </p>
        </div>
    </div>


    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section hospital-info">
                <h4>Hospital Management System</h4>
                <p>&copy; 2024 Hospital Management System. All rights reserved.</p>
                <p>Providing quality healthcare and services for all your medical needs.</p>
            </div>

            <div class="footer-section contact-info">
                <h4>Contact Us</h4>
                <p>Email: info@hospitalmanagement.com</a></p>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 123 Health Street, City, State, 12345</p>
            </div>
    
            <div class="footer-section quick-links">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="/services">Our Services</a></li>
                    <li><a href="/departments">Departments</a></li>
                    <li><a href="/appointments">Book an Appointment</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </div>
    
      
            <div class="footer-section social-media">
                <h4>Follow Us</h4>
                <a href="#"><img src="facebook-icon.png" alt="Facebook"></a>
                <a href="#"><img src="twitter-icon.png" alt="Twitter"></a>
                <a href="#"><img src="linkedin-icon.png" alt="LinkedIn"></a>
                <a href="#"><img src="instagram-icon.png" alt="Instagram"></a>
            </div>
    
      
            <div class="footer-section working-hours">
                <h4>Working Hours</h4>
                <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                <p>Saturday: 9:00 AM - 5:00 PM</p>
                <p>Sunday: Closed</p>
            </div>
        </div>
    
      
        <div class="footer-bottom">
            <p>Terms of Service | Privacy Policy | Accessibility</p>
        </div>
    </footer>
    

      
</body>
</html>
`)
   
    res.end()
})

server.listen(9000, ()=>{
    console.log("Server is running @ http://localhost:9000")
})