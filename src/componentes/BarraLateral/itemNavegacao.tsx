import styled from "styled-components"

interface Props {
    children:string,
    iconeAtivo:string,
    iconeInativo:string,
    ativo?:boolean
}

const ItemListaEstilizado = styled.li``

const ItemNavegacao = ({children, iconeAtivo, iconeInativo, ativo = false}:Props) => {
    return(
        <ItemListaEstilizado>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="icone menu" />
            {children}
        </ItemListaEstilizado>
    )
}

export default ItemNavegacao