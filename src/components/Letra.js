import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
const Letra = ({title, letra, artista, cancion}) => {
     if(letra.trim() === '') return null;

     let component;
     if (letra === "No lyrics found"){
          component = <div className="card">
                         <div className="card-header">
                              <h2 className="card-title lead">No se encontró ninguna letra relacionada a la canción</h2>
                         </div>
                    </div>

     }else{
          component = <div className="card">
                         <div className="card-header border-danger border-bottom">
                              <div className="card-title"><h2>{title}</h2></div>
                         </div>
                         <div className="card-body">
                              <h3 className="font-weight-bolder text-capitalize">{cancion}</h3>
                              <h4 className="text-capitalize">{artista}</h4>
                              <p className="lead">{letra}</p>
                         </div>
                    </div>
     }
     return (
          <Fragment>
               {component}
          </Fragment>
     );
}
Letra.propTypes = {
     title: PropTypes.string.isRequired,
     letra: PropTypes.string.isRequired,
     artista: PropTypes.string.isRequired,
     cancion: PropTypes.string.isRequired
} 

export default Letra;