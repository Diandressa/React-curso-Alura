import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Polulares";
import Tags from "./Tags";
import Imagem from "./Imagem";

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
                    {
                        fotos.map(foto => <Imagem key={foto.id} foto={foto}/>)
                        //manda foto, e cada foto é um objeto do json
                    }
                </SecaoFluida>
                <Populares/>
            </GaleriaContainer>
        </>
    )
}

export default Galeria;