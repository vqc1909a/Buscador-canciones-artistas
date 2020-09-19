import React, {useState, Fragment} from 'react';
import Formulario from '../components/Formulario';
import Letra from '../components/Letra';
import Informacion from '../components/Informacion';
import Spinner from '../components/Spinner';

const Artistas = () => {
     const [letra, changeLetra] = useState('');
     const [informacion, changeInformacion] = useState({});
     const [artista, changeArtista] = useState('');
     const [cancion, changeCancion] = useState('');
     const [spinner, changeSpinner] = useState(false);

     return (
          <section className="artistas">
               <Formulario changeLetra={changeLetra} changeInformacion={changeInformacion} changeArtista={changeArtista} changeCancion={changeCancion} changeSpinner={changeSpinner} ></Formulario>
               <div className="cancion py-3">
                    <div className="container">
                         <div className="row justify-content-center">
                              {!spinner 
                              ? 
                              <Fragment>
                                   <div className="col-md-6">
                                        <Informacion informacion={informacion} letra={letra}></Informacion>
                                   </div>
                                   <div className="col-md-6">
                                        <Letra title="Letra de la canción" letra={letra} artista={artista} cancion={cancion}></Letra>
                                   </div>
                              </Fragment>
                              :
                              <Spinner></Spinner>    
                              }
                         </div>
                    </div>
               </div>
          </section>
     );
}
 
export default Artistas;
