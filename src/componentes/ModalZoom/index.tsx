import styled from "styled-components";
import Imagem from "../Galeria/Imagem";

interface Foto {
  titulo: string;
  fonte: string;
  path: string;
  id: string;
  tagId: number;
}

interface ImagemProps {
    foto:Foto | null;
    clickFotoSelecionada?: (foto: Foto) => void;
} 

const Overlay = styled.div`
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
`

const ModalZoom = ({foto, clickFotoSelecionada}:ImagemProps) => {
    //{!!foto} = true > false > true
    //js transforma obj foto em true se ela existir!!
    //se eu nao tenho um obj retornando em foto ele nega duas vezes e retorna false
    return(
        <>
           {foto && <>
            <Overlay/>
                <DialogEstilizado open={!!foto}>
                    <Imagem foto={foto} expandida={true} clickZoom = {clickFotoSelecionada}/>
                    <form method="dialog">
                        <button>OK</button>
                    </form>
                </DialogEstilizado>
           </>} 
        </>
    )
}

export default ModalZoom