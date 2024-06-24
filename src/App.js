import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
   <div className= "justify-content-center ">
   <nav className="navbar">
        <div className="navbar-container">
            <div className="menu-left">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Rooms</a>
            </div>
            <div className="logo">
                <img src="./1.png" alt="Logo"/>
            </div>
            <div className="menu-right">
                <a href="/">Agents </a>
                <a href="/">Blog</a>
                <a href="/">Contact</a>
            </div>
            <div className="burger-menu" id="burger-menu">
                &#9776;
            </div>
        </div>
        <div className="dropdown-menu" id="dropdown-menu">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Services</a>
            <a href="/">Portfolio</a>
            <a href="/">Blog</a>
            <a href="/">Contact</a>
        </div>
    </nav>
    </div>
    
    <section className="section-one">
        <img src="./lhaki-banner.jpg" alt=""/>
    </section>
    <section className="section-two">
       <div className="para-container">
       <div className="section-two-left">
            <h1>3 countries <br></br>12+ destinations</h1>
            <div className="border-line-one"></div>
            <p>Crimson Hotels Private Limited is a Hotel Management Company started by 
experienced hoteliers having significant experience in the finest hotel chains. We own  five Hotel Brands in Luxury, Upscale, Midscale, Lower Midscale and Budget Segments. These brands are available on Management Agreement and Franchise Model.
</p>
<p>As a Hotel Operator / Franchiser Crimson Hotels takes care of the interest of the 
ownership in mind while providing the top class hospitality to the guests with a 
commitment to pace setting innovation, modern design and memorable service 
experience. Combine these attributes with dedicated team support, and dynamic sales  and distribution systems we promise to bring unparalleled success for the hotel owners.
</p>
<div className="border-line-two"></div>
        </div>
        <div className="section-two-right">
        <div class="grid-container">
        <div class="grid-item item-1"></div>
        <div class="grid-item item-2"></div>
        <div class="grid-item item-3"></div>
        <div class="grid-item item-4"></div>
        <div class="grid-item item-5"></div>
        <div class="grid-item item-6"></div>
        <div class="grid-item item-7"></div>
        <div class="grid-item item-8"></div>
        <div class="grid-item item-9"></div>
        <div class="grid-item item-10"></div>
        <div class="grid-item item-11"></div>
        <div class="grid-item item-12"></div>
        <div class="grid-item item-13"></div>
        <div class="grid-item item-14"></div>
        <div class="grid-item item-15"></div>
        <div class="grid-item item-16"></div>
        <div class="grid-item item-17"></div>
        <div class="grid-item item-18"></div>
        <div class="grid-item item-19"></div>
        <div class="grid-item item-20"></div>
        <div class="grid-item item-21"></div>
        <div class="grid-item item-22"></div>
        <div class="grid-item item-23"></div>
        <div class="grid-item item-24"></div>
        <div class="grid-item item-25"></div>
    </div>
        </div>
        
       </div>

    </section>
   <div className="card-line">
   <div className="card1 card-box">
    <div className="left-content">
    <h4>Select Destinations</h4>
    <p>Thimpu , Bhutan </p>
    </div>
     <span class="material-symbols-outlined drop">
stat_minus_1
</span>
   </div>
   <div className="line-border1"></div>
   <div className="card2 card-box">
   <div className="left-content">
    <h4>Duration</h4>
    <p>10 / 6 / 2024 - 18 / 6 / 2024 </p>
    </div>
    <span class="material-symbols-outlined">
calendar_month
</span>
   </div>
   <div className="line-border2"></div>
   <div className="card3 card-box">
   <div className="left-content">
    <h4>Guests </h4>
    <div className="plus-minus">
        <p className='minus'>-</p><h5>2</h5><p className='plus'>+</p>
    </div>
    </div>
   <button className='btn1'>Check Availbility</button>
   </div>
    
   </div>
    
    <section className="section-three">
        <div className="heading-container">
            <h1>Our Network Hotels: Our Top Picks</h1>
            <p>These lifestyle luxury hotels will be located at gateway cities and tourist destinations. Each hotel will be a <br />destination in itself where Japanese finesse meets Indian hospitality creating a personal experience for our <br />guests.
            </p>
        </div>
       
       <div class="container">
      <div class="slider-wrapper">
       
        <ul class="image-list">
          <img class="image-item" src="./western-woman-having-teatime-cafe-udaipur.jpg" alt="img-1" />          
          <img class="image-item" src="./Apq9uk1669091740.jpeg" alt="img-2" />
          <img class="image-item" src="./220125115416-08-trans-bhutan-trail-reopens-intl-hnk.jpg" alt="img-3" />
          <img class="image-item" src="./pashupatinath-hero.jpg" alt="img-4" />
        </ul>
      
      </div>
     
    </div>
     
    </section>
    <section class="section-four">
            <div class="section-four-heading"><h1>Our Branded Hotels</h1></div>
            <div class="section-four-logos">
                <div class="logos-container">
                    
                       <div class="logo-box">
                        <h5>Luxury Lifestyle Hotels</h5>
                        <img src="./logo1.png" alt="" width="150px"/>
                        <div class="logo-box"> </div>
                       </div>
                       <div class="logo-box"> <h5>Upscale Full Service Hotels</h5>
                        <img src="./1.png" alt="" width="150px"/>
                        <div class="logo-box">  <img src="./logo3.png" alt="" width="150px"/></div>
                      </div>
                       <div class="logo-box">
                        <h5>Midscale Hotels & Resorts</h5>
                        <div class="logo-box"><img src="./log.png" alt="" width="150px"/></div>
                            <img src="/logo6.png" alt="" width="150px"/></div>
                       <div class="logo-box"><h5>Full Service Economy Hotel</h5>
                        <img src="./logo4.png" alt="" width="150px"/>
                        <div class="logo-box"> <img src="./logo7.jpeg" alt="" width="150px"/></div></div>
                        </div>
                </div>
            
         </section> 
         <section class="section-five">
        <div class="bacground-clip">
            <h1><span>Rejoice with</span> great comfort and unparalleled hospitality!
            </h1>
            <video src="./banner-video.mp4" width="100%" min-height="70vh"/>
            
            
        </div>
         </section>
       
         
         <section class="section-six">
            <div className='container'>
            <div class="section-six-description">
   
    
  </div>
                <div className='row'>
                    <div className='col-md-6'>
                    <div class="section-six-left">
      <h1>Our Expertise</h1>
      <p>As a Hotel Operator / Franchiser, Crimson Hotels takes care of the interests of the ownership in mind while providing top-class hospitality to the guests with a commitment to pace-setting innovation, modern design, and memorable service experience. Combine these attributes with dedicated team support, and dynamic sales and distribution systems, we promise to bring unparalleled success for the hotel owners.</p>
      <button class="btn2">Be Our Franchise</button>
    </div>
                    </div>
                    <div className='col-md-6'>
                    <div class="section-six-right">
      <div class="grid-container-six">
        <div class="grid-item-six grid-item-box1">
          <p>HOTEL OPERATIONS MANAGEMENT</p>
          <img src="./icon-4 (1).png" alt="Hotel Operations Management" width="100px"/>
        </div>
        <div class="grid-item-six grid-item-box2">
          <p>HOTEL DEVELOPMENT</p>
          <img src="./icon-3.png" alt="Hotel Development" width="100px"/>
        </div>
        <div class="grid-item-six grid-item-box3">
          <p>PRE OPENING SERVICES</p>
          <img src="./icon-1.png" alt="Pre Opening Services" width="100px"/>
        </div>
        <div class="grid-item-six grid-item-box4">
          <p>RENOVATION AND RE BRANDING</p>
          <img src="./icon-2 (1).png" alt="Renovation and Rebranding" width="100px"/>
        </div>
      </div>
    </div>
                        </div>
                </div>
            </div>
  
</section>
{/* <section class="section-seven">
      <h1 class="section-seven-heading">News & Updates</h1>
      <div class="wrapper">
        <div class="carosel">
          <div class="card">
            <div class="img-container1 img-container"></div>
            <div class="img-discription">
              <p>
                Crimson Hotels to start operationalising own brands starting
                this year <br />
                Economic Times | 12 June, 2023
              </p>
              <p>
                Crimson Hotels, a hospitality consultancy and management company
                based in Delhi NCR will be rolling out hotels under its own
                brand portfolio starting this year. .
              </p>
              <button class="btn3">Read More</button>
            </div>
          </div>
          <div class="card">
            <div class="img-container2 img-container"></div>
            <div class="img-discription">
              <p>
                Crimson Hotels appointed as Hotel operator for “Darbar-E-Khas”
                Bareilly <br />
                Hospitality Biz India | 14 March, 2023
              </p>
              <p>
                Crimson Hotels Private Limited, a luxury to boutique Hotel
                Operator, Brand Franchisor & Greenfield Project conceptualiser,
                has taken over the management of …
              </p>
              <button class="btn3">Read More</button>
            </div>
          </div>
          <div class="card">
            <div class="img-container3 img-container"></div>
            <div class="img-discription"></div>
          </div>
        </div>
        <div class="arrow-container"></div>
      </div>
    </section> */}
    <section className="section-mid">
            <div class="section-four-heading"><h1>News & Updates</h1></div>
        <div className="boxes-container">
        <div className="middle">
            <div className="img-content img11"></div>
            <div className="discription-content"><p>
                Crimson Hotels to start operationalising own brands starting
                this year <br />
                Economic Times | 12 June, 2023
              </p>
              <p>
                Crimson Hotels, a hospitality consultancy and management company
                based in Delhi NCR will be rolling out hotels under its own
                brand portfolio starting this year. .
              </p>
              <button class="btn3">Read More</button></div>
        </div>
        <div className="middle"> <div className="img-content img22"></div>
        <div className="discription-content">
        <p>
                Crimson Hotels appointed as Hotel operator for “Darbar-E-Khas”
                Bareilly <br />
                Hospitality Biz India | 14 March, 2023
              </p>
              <p>
                Crimson Hotels Private Limited, a luxury to boutique Hotel
                Operator, Brand Franchisor & Greenfield Project conceptualiser,
                has taken over the management of …
              </p>
              <button class="btn3">Read More</button></div></div>
        <div className="middle"> <div className="img-content img33"></div>
        <div className="discription-content"></div></div>
        </div>
    </section>

    <footer class="footer">
  <div class="footer-container">
    <div class="footer-box">
      <img src="./crimson-removebg-preview.png" alt="" width="170px"/>
    </div>
    <div class="footer-box">
      <div class="footer-links">
        <h4>Quick Links</h4>
        <div class="links">
          <a href="">ABOUT US</a>
          <a href="">CONTACT US</a>
          <a href="">CRIMSON PLUS ++</a>
          <a href="">CAREERS</a>
          <a href="">OUR MANAGEMENT</a>
        </div>
      </div>
    </div>
    <div class="footer-box">
      <h3>Follow Us On</h3>
      <div class="footer-icons">
        <ul>
          <li><img src="./facebook.png" alt="Facebook" width="20px"/></li>
          <li><img src="./instagram.png" alt="Instagram" width="20px"/></li>
          <li><img src="./twitter.png" alt="Twitter" width="20px"/></li>
          <li><img src="./linkedin (2).png" alt="LinkedIn" width="20px"/></li>
          <li><img src="./youtube (1).png" alt="YouTube" width="20px"/></li>
        </ul>
      </div>
      <div class="footer-line-box"></div>
      <h3>Our Brands</h3>
      <div class="footer-icons">
        <ul>
          <li><img src="./logo1.png" alt="Brand 1" width="60px"/></li>
          <li><img src="./crimson-removebg-preview.png" alt="Brand 2" width="60px"/></li>
          <li><img src="./log.png" alt="Brand 3" width="60px"/></li>
          <li><img src="./logo6.png" alt="Brand 4" width="60px"/></li>
          <li><img src="./logo3.png" alt="Brand 5" width="60px"/></li>
          <li><img src="./logo4.png" alt="Brand 6" width="60px"/></li>
        </ul>
      </div>
      <div class="footer-line-box"></div>
    </div>
    <div class="footer-box">
      <div class="contact-information">
        <ul>
          <li>
            <div class="icon-container">
              <span class="material-symbols-outlined">location_on</span>
              <p>190B, Pocket 12, Jasola, 110025, New Delhi, India</p>
            </div>
          </li>
          <li>
            <div class="icon-container">
              <span class="material-symbols-outlined">call</span>
              <p>+91-9717216222 | +91-9717266332</p>
            </div>
          </li>
          <li>
            <div class="icon-container">
              <span class="material-symbols-outlined">mail</span>
              <p>info@crimsonhotels.in</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-box">
      <h5>OUR HOTELS</h5>
      <h5>INDIA</h5>
      <ul class="footer-link2">
        <li>DELICE HOTEL, BHILWARA</li>
        <li>CITRON, LUCKNOW</li>
        <li>AAUREUM, BHILWARA</li>
        <li>ECONOSTAY, DAHEJ</li>
        <li>CITRON, BHILWARA</li>
        <li>AKATSUKII COLLECTION, UDAIPUR</li>
        <li>RESORT & CONVENTION CENTER, JAIPUR</li>
        <li>DARBAR E KHAS BOUTIQUE HOTEL, BAREILLY</li>
      </ul>
    </div>
    <div class="footer-box">
      <h5>NEPAL</h5>
      <p>
        NEPALIRIKA HOTEL, DAMAK<br/>
        NEPALIRIKA HOTEL, BIRATCHOWK
      </p>
      <h5>BHUTAN</h5>
      <p>
        T&K HOTEL, THIMPHU<br/>
        ECONOSTAY LHAKI YANGCHAK RESIDENCY, THIMPHU<br/>
        ECONOSTAY LHAKI YANGCHAK RESIDENCY, PARO
      </p>
    </div>
  </div>
</footer>
<div class="bottom-line-conatiner"> <div class="bottom-line"></div>
   <div class="bottom-links"><p>© 2024 Crimson Hotels Private Limited | All Rights Reserved.  
  </p><div class="uls"><ul><li><a href="">Trems Of Service</a><a href="">Partner</a><a href="">Privacy Policy</a><a href="">Cookies Policy</a></li></ul></div></div>
  </div>


    
    


    </>
  );
}


export default App;
