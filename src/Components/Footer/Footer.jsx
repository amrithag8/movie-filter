import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="box1">
        <p className="question">Questions? Call 1-844-505-2993</p>
        <p>FAQ</p>
        <p>Cookie Preferences</p>
        <div className="dropdown">
          <img src="./images/icon-park-outline_earth.png" />
          <select>
            <option value="English">English</option>
            <option value="Malayalam">Malayalam</option>
          </select>
        </div>
      </div>
      <div className="box1">
        <p>Help Center</p>
        <p>Corporate Information</p>
      </div>
      <div className="box1">
        <p>Terms of Use</p>
        <p>Privacy</p>
      </div>
      <div className="box1 box-icons">
        <img src="./images/fb icon.png" />
        <img src="./images/insta icon.png" />
        <img src="./images/twitter.png" />
        <img src="./images/youtube.png" />
      </div>
    </div>
  );
};

export default Footer;
