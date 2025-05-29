import styled from "styled-components";
import ButtonImage from "../Button";

interface Foto {
  titulo: string;
  fonte: string;
  path: string;
  id: string;
  tagId: number;
}

interface ImagemProps {
    foto:Foto;
} 

const Figure = styled.figure`
    background-color: #fff;
    border-radius: 20px;
    max-width: 100%;

    figcaption{
        background-color: #001634;
        color: #fff;
        border-radius: 0 0 20px 20px;
        padding: 1rem;
        display: flex;
        align-items: end;
        justify-content: space-between;

        p {
            margin-bottom: 10px;
            margin-top: 0px;
        }
    }

    h3{
        margin: 0;
        color: #fff;
        font-size: 1rem;
        font-weight: bold;
    }
`  

const Img = styled.img`
    width: 100%;
    border-radius: 20px 20px 0 0;
    display: block;
`

const Rodape = styled.footer`
    
`
const Div = styled.div`
    
`


const Imagem = ({foto}:ImagemProps) => {
    return(
        <Figure>
            <Img src={foto.path} alt={foto.titulo} />
            <figcaption>
                <Div>
                    <h3>{foto.titulo}</h3>
                    <p>{foto.fonte}</p>
                </Div>
                <Rodape>
                    <ButtonImage src="./icones/favorito.png" alt="Icone favorito"/>
                    <ButtonImage src="./icones/expandir.png" alt="Icone expandir"/>
                </Rodape>
            </figcaption>
        </Figure>
    )
}

export default Imagem;