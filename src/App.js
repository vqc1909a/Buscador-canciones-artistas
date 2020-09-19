import React, {Fragment} from 'react';
import Header from './components/Header';
import Artistas from './components/Artistas';
function App() {
  return (
    <Fragment>
      <Header title="Buscar Artista y Canción"></Header>
      <main>
        <Artistas></Artistas>
      </main>
    </Fragment>
  );
}

export default App;
