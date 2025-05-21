import styled from "styled-components";
import img from '../../assets/banner.png';

const ContainerEstilizado = styled.div`
    width: 70vw;
    position: absolute;
    right: 0;
`

const BannerEstilizado = styled.img`
    width: 100%;
    position: relative;
    border-radius: 10px;
`

const TextoEstilizado = styled.p`
    position: absolute;
    top: 0;
    color: #fff;
    padding: 1.5rem;
    font-size: 2em;
    width: 30%;
`

const Banner = () => {
    return(
        <ContainerEstilizado>
            <BannerEstilizado src={img} alt="Banner imagem"/>
            <TextoEstilizado>A galeria mais completa de fotos do espaço!</TextoEstilizado>
        </ContainerEstilizado>
    )
}

export default Banner;