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

const ModalZoom = ({foto, clickFotoSelecionada}:ImagemProps) => {
    //{!!foto} = true > false > true
    //js transforma obj foto em true se ela existir!!
    //se eu nao tenho um obj retornando em foto ele nega duas vezes e retorna false
    return(
        <>
           {foto && <dialog open={!!foto}>
                <Imagem foto={foto} expandida={true} clickZoom = {clickFotoSelecionada}/>
                <form method="dialog">
                    <button>OK</button>
                </form>
            </dialog>} 
        </>
    )
}

export default ModalZoom