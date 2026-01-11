import styled from "styled-components";
import { colors, spacing } from "../../tokens";

export type ISizeInput =
    "xs"
    | "sm"
    | "md"
    | "lg"
export const StyledInput = styled.input<{
    inputSize: ISizeInput
}>`
    
    border-radius: ${colors.gray400};
    padding: ${({inputSize}) => spacing[inputSize]} ${spacing.md};
    border-radius: 6px;
    outline: none;
    border: 1px solid ${colors.gray500};
    background-color: ${colors.gray900};

    &:focus {
        border: 1px solid ${colors.primay200};
    }
    &::placeholder {
        color: ${colors.gray400};
    }

`

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: .8rem;

`