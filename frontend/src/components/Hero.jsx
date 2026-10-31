function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Happy pets <span className="accent">happy home</span>
        </h1>
        <p>Discover everything they need to feel loved, happy and cared for.</p>
        <a href="#products" className="hero-btn">Shop now</a>
      </div>

      <img src="/images/hero.png" alt="Dog, cat, rabbit, parrot and bulldog" />
    </section>
  );
}

export default Hero;