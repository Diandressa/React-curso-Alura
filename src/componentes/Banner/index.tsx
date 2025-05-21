import styled from "styled-components"
import img from '../../assets/banner.png'

const BannerEstilizado = styled.img`
    width: 60vw;
`

const Banner = () => {
    return(
        <BannerEstilizado src={img} alt="Banner Home">
            
        </BannerEstilizado>
    )
}

export default Banner;