import Image from "next/image";
const Footer = () => {
  const footerItems = [
    "Home",
    "All Products",
    "Featured Products",
    "Contact",
    "About Us",
  ];
  return (
    <footer className="footer-container">
      <div className="logo-container">
        <span className="h-logo">
          <span className="fade-logo">RIGHT</span>FIT.COM
        </span>
      </div>
      <div className="footer-content">
        <ul className="nav-list">
          {footerItems.map((item, index) => (
            <li key={index} className="item-list">
              {item}
            </li>
          ))}
        </ul>
        <div className="footer-middle-container">
          <p>
            We are a registered E-Commerce seller and we support a variety of
            Local and International payment modes
          </p>
          <Image
            src="/assets/footer.png"
            alt="Footer Image"
            width={100}
            height={100}
          />
        </div>
        <div className="footer-right">
          <span>Website protected by</span>
          <Image
            src="/assets/footer-right.png"
            alt="Footer Image"
            width={100}
            height={100}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
