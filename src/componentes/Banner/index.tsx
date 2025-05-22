import styled from "styled-components"

interface ImagemProps{
    $backgroundImage: string;
}

interface Props{
    backgroundImage: string;
    texto: string
}

const FigureEstilizada = styled.figure<ImagemProps>`
    background-image: ${props => `url(${props.$backgroundImage})`};
    //flex-grow: 1;
    background-repeat: no-repeat;
    display:flex;
    align-items: center;
    height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
`

const TextoEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #ffffff;
    max-width: 300px;
    padding: 0 64px;
`

const Banner = (props:Props) => {
    return(
        <FigureEstilizada $backgroundImage={props.backgroundImage}>
            <TextoEstilizado>{props.texto}</TextoEstilizado>
        </FigureEstilizada>
    )
}

export default Banner;