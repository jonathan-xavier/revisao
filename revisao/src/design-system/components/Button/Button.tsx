import type { ButtonHTMLAttributes } from "react"
import { StyledButton, type IButton } from "./styles"

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: IButton,
    title: string
}

const Button = ({variant="primay300", title, ...rest }: IButtonProps) => {
    return(
        <StyledButton variant={variant} {...rest} >
          {title}
        </StyledButton>    
    )
}

export {Button}