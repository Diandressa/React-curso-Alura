import styled from 'styled-components';
import tags from './tags.json'

const ContainerSection = styled.section`
    display: flex;
    align-items: center;
    color: #fff;
    width: 100%;
`
const ContainerTags = styled.section`
    button{
        margin: 0 .5rem;
        border: 1px solid #7b78e5;
        border-radius: 10px;
        padding: .3rem 1rem;
        background: rgba(255, 255, 255, 0.336);
        color: #fff;
        cursor: pointer;
    }
`

const Tags = () => {
    return(
        <ContainerSection>
            <p>Busque por tags:</p>
            <ContainerTags>
                {tags.map(tag => <button key={tag.id}>{tag.titulo}</button>)}
            </ContainerTags>
        </ContainerSection>
    )
}

export default Tags;