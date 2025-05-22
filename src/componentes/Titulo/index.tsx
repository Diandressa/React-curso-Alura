import type { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  alinhamento?: string;
  children:ReactNode;
}

interface EstilizadoProps {
  $alinhamento?: string;
}

const TituloEstilizado = styled.h2<EstilizadoProps>`
    color: #7b78e6;
    font-size: 32px;
    text-align: ${props => props.$alinhamento ? props.$alinhamento : 'left'};
`

const Titulo = ({ alinhamento, children }: Props) => {
  return <TituloEstilizado $alinhamento={alinhamento}>{children}</TituloEstilizado>;
};


export default Titulo;