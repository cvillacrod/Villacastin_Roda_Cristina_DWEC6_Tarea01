import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data';
import { TituloComponente } from './titulo.jsx';
import { BotonComponente } from './boton.jsx';
import { SliderComponente } from './slide.jsx';


function App() {

  //estados del componente
  const [slideActual, setSlideActual] = useState(0);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todo');
  const [slides, setSlides] = useState(data);
 
  //llamada al hacer clic en el boton
  const handleCategoriaClick = (categoria) => {
   // console.log('CATEGORIDA SELECCIONADA:', categoria);
    setCategoriaSeleccionada(categoria); //cambia el estado
    //fitro segun la categoria
    if (categoria === 'todo') {
      setSlides(data);
    } else {
      const slidesFiltrados = data.filter(slide => slide.categoria === categoria);
      setSlides(slidesFiltrados);
    }
    setSlideActual(0); //reiniciamos el slide actual al cambiar la categoría
 //
  };

  //cambiar el slide cada 2 segundos
  useEffect(() => {
    // actualiza el estado slideActual para pasar al siguiente slide en la lista, si es igual al ultimo vuelve al primero
    const cambiarSlide = () => {
      setSlideActual(siguienteSlide => (siguienteSlide === slides.length - 1 ? 0 : siguienteSlide + 1));
    };
    const intervalo = setInterval(cambiarSlide, 2000); 
    return () => clearInterval(intervalo);
  }, [slides]);


  return (
    <section className="section">    

        <TituloComponente titulo={"slider DWEC"} />   

        <div className="btn-container">  
          <BotonComponente titulo="Todas las categorías" dataid="todo" onClick={() => handleCategoriaClick('todo')} />
          <BotonComponente titulo="Naturaleza" dataid="cat1" onClick={() => handleCategoriaClick('naturaleza')} />
          <BotonComponente titulo="Mar" dataid="cat2" onClick={() => handleCategoriaClick('mar')} />
          <BotonComponente titulo="Parapente" dataid="cat3" onClick={() => handleCategoriaClick('parapente')} />
        </div>
     

        <div className="section-center">
          
            {slides.map((slide, index) => (
              <SliderComponente
                key={index}
                categoria={slide.categoria}
                src={slide.src}
                img={slide.img}
                actual={index === slideActual}
              />
            ))}
          </div>     

    </section>


  )
}

export default App
