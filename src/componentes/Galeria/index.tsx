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
    clickFotoSelecionada: (foto: Foto) => void;
}

const Galeria = ({fotos = [], clickFotoSelecionada }:FotosProps) => {
    return (
        <>
            <Tags/>
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagemContainer>
                        {
                            fotos.map(foto => 
                            <Imagem 
                                clickZoom = {clickFotoSelecionada}
                                key={foto.id} 
                                foto={foto}
                            />)
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