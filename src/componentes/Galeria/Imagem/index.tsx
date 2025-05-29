import styled from "styled-components";

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

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const Imagem = ({fotos = []}:FotosProps) => {
    return(
        <>
            <Tags/>
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ul>
                        {fotos.map(foto => <li>{foto.titulo}</li>)}
                    </ul>
                </SecaoFluida>
                <Populares>

                </Populares>
                <Populares/>
            </GaleriaContainer>
        </>
    )
}

export default Imagem;