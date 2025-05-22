interface FotoProps {
    foto:string
}
const Imagem = ({foto}) => {
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