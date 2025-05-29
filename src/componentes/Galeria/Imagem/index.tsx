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
const Imagem = ({foto}:FotosProps) => {
    return(
        <figure>
            <img src="" alt="" />
            <figcaption>
                <h3>Título</h3>
                <footer>
                    <p>fonte</p>
                    <button>favorito</button>
                    <button>expandir</button>
                </footer>
            </figcaption>
        </figure>
    )
}

export default Imagem;