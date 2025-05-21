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

//Componente React Estilizado
//depois do ponto colocamos a tag que queremos estilizar e abrimos a crase para passar o estilo
const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24;
`

function App() {

  return (
    <>
      <FundoGradiente>
        {/*<!-- Normalize importado como Component Style */}
        <EstilosGlobais/>
        <Cabecalho/>
        <MainContainer>
          <BarraLateral/>
          <Banner backgroundImage={"./src/assets/banner.png"} texto={"A galeria mais completa de fotos do espaço!"}/>
        </MainContainer>
      </FundoGradiente>
    </>
  )
}

export default App
