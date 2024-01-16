import Header from "./header";
import Image from "next/image";

interface HeroProps {
  cartItemCount: number;
}

const Hero: React.FC<HeroProps> = ({ cartItemCount }) => {
  return (
    <section className="hero-banner">
      <Image
        src="/assets/hero.jpg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
      />
      <Header cartItemCount={cartItemCount} />
      <div className="hero-content">
        <h1>Latest Styles</h1>
        <span>At Yesterday’s Prices</span>
        <button>BROWSE ALL STYLES</button>
      </div>
    </section>
  );
};

export default Hero;
