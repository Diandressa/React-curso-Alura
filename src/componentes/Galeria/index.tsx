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
interface Foto {
  titulo: string;
  fonte: string;
  path: string;
  id: string;
  tagId: number;
}

interface FotosProps {
    fotos:Foto[];
}

const Galeria = ({fotos = [] }:FotosProps) => {
    return (
        <>
            <Tags/>
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ul>
                        {fotos.map(foto => <li>{foto.titulo}</li>)}
                    </ul>
                </SecaoFluida>
                <Populares/>
            </GaleriaContainer>
        </>
    )
}

export default Galeria;