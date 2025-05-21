import styled from "styled-components"

interface Props {
    children:string,
    iconeAtivo:string,
    iconeInativo:string,
    ativo?:boolean
}

interface EstiloProps {
    $ativo?: boolean
}

const ItemListaEstilizado = styled.li<EstiloProps>`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${props => props.$ativo ? '#7b78e5' : '#d9d9d9'};
    font-family: ${props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
    display: flex;
    align-items: center;
    gap: 22px;
`

const ItemNavegacao = ({children, iconeAtivo, iconeInativo, ativo = false}:Props) => {
    return(
        <ItemListaEstilizado $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="icone menu" />
            {children}
        </ItemListaEstilizado>
    )
}

export default ItemNavegacao