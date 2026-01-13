import styled from "styled-components";
import { colors } from "../../tokens";

const StyleCard = styled.div`
    border: 1px solid ${colors.primay200};
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: .5rem;
    border-radius: 6px;
`

export {StyleCard}