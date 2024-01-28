import logo from '../images/Logo.svg'


function Footer() {
  return (
    <footer>
      <section className="footer-section">
        <div className="company-info">
          <img src={logo} alt="logo" />
          <p>We are a family owned Mediterranean Restaurant, focused on traditional recipes served with a modern twist</p>
        </div>

        <div className="navigation">
          <h3>Navigation</h3>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Menu</a></li>
            <li><a href='/'>Reservations</a></li>
            <li><a href='/'>Order Online</a></li>
            <li><a href='/'>Login</a></li>
          </ul>
        </div>

        <div>
          <h3>Contact Info</h3>
          <ul>
            <li>Address: <br />345 City, USA</li>
            <li>Phone: <br />+4455 4564 2467</li>
            <li>Email: <br />little@lemon.com</li>
          </ul>
        </div>

        <div className="social-media">
          <h3>Social Media Links</h3>
          <ul>
            <li><a href='/'>Facebook</a></li>
            <li><a href='/'>Twitter</a></li>
            <li><a href='/'>Instagram</a></li>
          </ul>
        </div>
      </section>
    </footer>
  );
}


export default Footer;
