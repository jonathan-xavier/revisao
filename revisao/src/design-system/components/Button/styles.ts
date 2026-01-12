import styled from "styled-components";
import { colors, spacing, typography } from "../../tokens"

export type IButton =
    "primay300"
    | "primay500"
    | "primay700"
    | "primay900"
    | "primay100";
 
export const StyledButton = styled.button<{
    variant: IButton
}>`
    font-family: ${typography.fontFamily};
    font-size: ${typography.fontSizeMd};
    font-weight: ${typography.fontSizeMd};

    padding: ${spacing.md} ${spacing.md};
    border-radius: 6px;
    border: none;
    cursor: pointer;

    background-color: ${({ variant }) => colors[variant]};
    color: ${colors.white};

    &:hover {
        opacity: .9;
    }
`