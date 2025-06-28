import styled from "styled-components";

interface buttonProps{
    src:string;
    alt:string;
    expandir?:boolean
}

interface expandirProps {
    $expandir?:string
}

const Button = styled.button`
    background: transparent;
    border: none;
    padding: 0;
    margin-inline: 5px;

    img{
        margin-left: 5px;
    }
`
const ButtonImage = ({src, alt}:buttonProps) => {
    return(
        <Button>
            <img src={src} alt={alt} /> 
        </Button>
    )
}

export default ButtonImage;