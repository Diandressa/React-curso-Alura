import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Polulares";
import Tags from "./Tags";

const GaleriaContainer = styled.div`
    display:flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const Galeria = () => {
    return (
        <>
            <Tags/>
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                </SecaoFluida>
                <Populares>

                </Populares>
            </GaleriaContainer>
        </>
    )
}

export default Galeria;