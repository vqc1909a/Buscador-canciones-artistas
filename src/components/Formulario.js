import React, {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
const Formulario = ({changeLetra, changeArtista, changeCancion, changeSpinner, changeInformacion}) => {
     const [data, changeData] = useState({
          artista: '',
          cancion: '',
     })
     const [error, changeError] = useState(false);

     const {artista, cancion} = data;
     const handleData = (e) => {
          changeData({
               ...data,
               [e.target.name]: e.target.value
          })
     }
     const handleSubmit = async (e) => {
          e.preventDefault();
          changeSpinner(true);
          if(artista.trim() === '' || cancion.trim() === ''){
              changeError(true);
               changeSpinner(false);
              return null;               
          }
          changeError(false);
          try{
               const url1 = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
               const url2 = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

               const [letra, informacion] = await Promise.all([axios.get(url1), axios.get(url2)]);
               changeLetra(letra.data.lyrics);
               changeInformacion({...informacion.data.artists[0]});
               changeArtista(artista);
               changeCancion(cancion);
               changeData({
                    artista: '',
                    cancion: ''
               })
               changeSpinner(false);
          }catch(err){
               const {data} = err.response;
               changeLetra(data.error);
               changeInformacion({});
               changeSpinner(false);
          }
     }
     return (
         <div className="formulario pb-3">
                    <div className="container">
                         <div className="row justify-content-center">
                              <div className="col text-white">
                                   <form className="row" onSubmit={handleSubmit}>
                                        <div className="col-md-6">
                                             <div className="form-group">
                                                  <label htmlFor="artista" className="text-uppercase">Artista</label>
                                                  <input value={artista} type="text" className="form-control form-control-lg" placeholder="Nombre Artista" name="artista" onChange={handleData} />
                                             </div>
                                        </div>
                                        <div className="col-md-6">
                                             <div className="form-group">
                                                  <label htmlFor="cancion" className="text-uppercase">Canción</label>
                                                  <input value={cancion} type="text" className="form-control form-control-lg" placeholder="Nombre Canción" name="cancion" onChange={handleData}/>
                                             </div>
                                        </div>
                                        <div className="col-md-12">
                                             <button type="submit" className="btn btn-secondary btn-lg btn-block">Buscar</button>
                                        </div>
                                   </form>   
                                   {error ? <div className="alert alert-danger my-3">Todos los campos son requeridos</div>: null}
                              </div>
                         </div>
                    </div>
               </div>  
     );
}

Formulario.propTypes = {
     changeLetra: PropTypes.func.isRequired,
     changeArtista: PropTypes.func.isRequired,
     changeCancion: PropTypes.func.isRequired,
     changeSpinner: PropTypes.func.isRequired,
     changeInformacion: PropTypes.func.isRequired
}
export default Formulario;