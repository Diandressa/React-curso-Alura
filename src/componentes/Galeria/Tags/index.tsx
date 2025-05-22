import tags from './tags.json'

const Tags = () => {
    return(
        <>
            <p>Busque por tags:</p>
            <div>
                
            </div>
            {tags.map(tag => <button key={tag.id}>{tag.titulo}</button>)}
        </>
    )
}

export default Tags;