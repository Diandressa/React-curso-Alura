import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Polulares";
import Tags from "./Tags";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
    display:flex;
    justify-content: space-between;
`

const ImagemContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    gap: 1rem;
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
                    <ImagemContainer>
                        {
                            fotos.map(foto => <Imagem key={foto.id} foto={foto}/>)
                            //manda foto, e cada foto é um objeto do json
                        }
                    </ImagemContainer>
                </SecaoFluida>
                <Populares/>
            </GaleriaContainer>
        </>
    )
}

export default Galeria;