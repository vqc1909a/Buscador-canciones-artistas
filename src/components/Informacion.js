import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
const Informacion = ({informacion, letra}) => {
     if(letra === '') return null;

     const {strArtistThumb, strArtist, strGenre, strBiographyES, strBiographyEN, strFacebook, strTwitter, strLastFMChart} = informacion;

     let component;
     if(Object.keys(informacion).length === 0 && !letra){
          component =    <div className="card-header bg-danger">
                              <h2 className="card-title text-white">No se encontraron información acerca del artista</h2>
                         </div>
     }else if (Object.keys(informacion).length === 0 && letra === "No lyrics found"){
          component =  null;
     }else{
          
          component = <div className="card border-light">
                         <div className="card-header bg-danger">
                              <h2 className="card-title text-white">Información artista</h2>
                         </div>
                         <div className="card-body">
                              <img src={strArtistThumb} alt={strArtist} className="img-fluid"/>
                              <p className="card-text text-muted my-3">Género: {strGenre}</p>
                              <h3 className="pb-3 border-bottom border-danger font-weight-bolder">Biografía:</h3>
                              <p className="card-text">{strBiographyES ?  strBiographyES : strBiographyEN}</p>
                         </div>
                         <div className="card-header d-flex justify-content-around">
                              <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook fa-2x"></i></a>
                              <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-2x"></i></a>
                              <a href={`https://${strLastFMChart}`} target="_blank" rel="noopener noreferrer"><i className="fab fa-lastfm fa-2x"></i></a>
                         </div>
                    </div>
     };

     return (
          <Fragment>
               {component}
          </Fragment>
     );
}

Informacion.propTypes = {
     informacion: PropTypes.object.isRequired
}
export default Informacion;