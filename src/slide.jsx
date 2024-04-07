//componente que devuelve con formato los datos pasados de cada tour, le pasamos informacion y las 3 propiedades para el estado del slide

   export   function SliderComponente({ categoria, src, img, actual, anterior, siguiente }) {  
    return (
      <div>
        <div className="slide-container">         
          <article className={`slide ${ actual ? 'activeSlide' : anterior ? 'lastSlide' : 'nextSlide'}`}        >
            <img src={src} alt={img} className="person-img"/>
            <h4>{img}</h4>
            <p className="title">{categoria}</p>
          </article>
        </div>
      </div> 
    );
  }
