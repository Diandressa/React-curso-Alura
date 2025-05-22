//Component React sem estilo
/*
const FundoGradiente = () => {
  return (<h1>Componente React</h1>)
}
*/

import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import Galeria from "./componentes/Galeria";
import fotos from "./fotos.json";
import { useState } from "react";

const AppContainer = styled.div`
  width: 1140px;
  max-width: 100%;
  margin: 0 auto;
`

//Componente React Estilizado
//depois do ponto colocamos a tag que queremos estilizar e abrimos a crase para passar o estilo
const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);

  return (
    <>
      <FundoGradiente>
        {/*<!-- Normalize importado como Component Style */}
        <EstilosGlobais/>
        <AppContainer>
          <Cabecalho/>
          <MainContainer>
            <BarraLateral/>
            <ConteudoGaleria>
              <Banner backgroundImage={"./src/assets/banner.png"} texto={"A galeria mais completa de fotos do espaço!"}/>
              <Galeria fotos={fotosDaGaleria}/>
            </ConteudoGaleria>
          </MainContainer>
        </AppContainer>
      </FundoGradiente>
    </>
  )
}

export default App
