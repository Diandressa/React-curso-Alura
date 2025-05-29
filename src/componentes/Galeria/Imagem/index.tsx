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
const Imagem = ({foto}:ImagemProps) => {
    return(
        <figure>
            <img src={foto.path} alt={foto.titulo} />
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