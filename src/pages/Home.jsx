function Home() {
  return (
    <div
      className="container-fluid bg-image"
      style={{
        backgroundImage: "url('fondo3.jpg')",
        backgroundRepeat: "repeat-y",
        backgroundSize: "cover",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h2
        className="text-center display-6"
        style={{ fontWeight: "bold", fontFamily: "Georgia, serif", paddingTop: "100px" }}
      >
        ¡Bienvenido a nuestra plataforma artística en línea!
      </h2>

      {/* <img src="bombilla.png" alt="C&S" className="logo mx-auto d-block"  width={500} /> */}

      <div className="parraf mt-4" style={{   backgroundColor: "#E8E7E7",
    paddingTop: "20px",
    PaddingEnd: "20px",
    paddingRight:"20px",
    paddingLeft: "20px",
    border: "1px solid black",
    borderRadius: "2px",
    marginLeft:"250px",
    marginRight:"250px",
    color: "black" }}>
        <p 
          className="text-center mx-auto"
          style={{
            maxWidth: "600px",
            margin: "50 auto",
            fontFamily: "Georgia, serif",
            fontSize: "16px",
            lineHeight: "1.6",
          }}
        >
          Aquí, artistas de todas las disciplinas tienen la oportunidad de
          compartir sus obras con una comunidad creativa en constante
          crecimiento. Nuestro objetivo es proporcionar un espacio virtual donde
          la expresión artística se celebra y se conecta a través de fronteras
          geográficas y culturales.
        </p>
        <p
          className="text-center mx-auto"
          style={{
            maxWidth: "600px",
            margin: "50 auto",
            fontFamily: "Georgia, serif",
            fontSize: "16px",
            lineHeight: "1.6",
          }}
        >
          En esta plataforma, los artistas pueden exhibir su talento en forma de
          pinturas, esculturas, fotografías, ilustraciones y mucho más. Ya sea
          que seas un artista emergente en busca de visibilidad o un profesional
          establecido que desea ampliar su alcance, este es el lugar perfecto
          para dar a conocer tu trabajo.
        </p>
        <p
          className="text-center mx-auto"
          style={{
            maxWidth: "600px",
            margin: "50 auto",
            fontFamily: "Georgia, serif",
            fontSize: "16px",
            lineHeight: "1.6",
          }}
        >
          Explora nuestras galerías virtuales y descubre una amplia gama de
          estilos, técnicas y temas. Desde el arte clásico hasta las tendencias
          más vanguardistas, encontrarás una experiencia visual enriquecedora
          que te transportará a mundos imaginativos y emocionantes.
        </p>
        <p
          className="text-center mx-auto"
          style={{
            maxWidth: "600px",
            margin: "50 auto",
            fontFamily: "Georgia, serif",
            fontSize: "16px",
            lineHeight: "1.6",
          }}
        >
          Además, fomentamos la interacción y el intercambio de ideas entre
          artistas y amantes del arte. Nuestra plataforma cuenta con una
          comunidad vibrante y comprometida que está lista para apreciar y
          apoyar tu talento. Comenta, comparte y conecta con otros usuarios que
          comparten tu pasión por el arte.
        </p>
        <p
          className="text-center mx-auto"
          style={{
            maxWidth: "600px",
            margin: "50 auto",
            fontFamily: "Georgia, serif",
            fontSize: "16px",
            lineHeight: "1.6",
          }}
        >
          No importa si eres un aficionado al arte, un coleccionista o
          simplemente alguien que busca inspiración, estamos aquí para nutrir tu
          amor por la creatividad. ¡Únete a nuestra plataforma y descubre un
          mundo de belleza visual y expresión artística sin límites!
        </p>
      </div>
    </div>
  );
}

export default Home;
