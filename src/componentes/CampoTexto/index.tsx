import styled from "styled-components";
import search from './search.png';

const ContainerEstilizado = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`

const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #c98cf1;
    box-sizing: border-box;
    color: #d9d9d9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    background: transparent;
    display: flex;
    align-items: center;
`

const IconeLupa = styled.img`
    position: absolute;
    right: 10px;
    width: 38px;
    height: 38px;
`

const CampoTexto = () => {
    return(
        <ContainerEstilizado>
            <CampoTextoEstilizado placeholder="O que você procura?"/>
            <IconeLupa src={search} alt="ícone de lupa"/>
        </ContainerEstilizado>
    )
}

export default CampoTexto;