//componente que devuelve con formato el titulo
export const BotonComponente = ({ titulo,dataid,onClick }) => {  
    return (     
      <button type="button" className="filter-btn" data-id={dataid} onClick={onClick} >{titulo}</button>
     );

   }

  
        