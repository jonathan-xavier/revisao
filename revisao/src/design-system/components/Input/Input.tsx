import type { InputHTMLAttributes } from "react"
import { StyledInput, Main, type ISizeInput } from "./styles"

type IInputProps = InputHTMLAttributes<HTMLInputElement> & {
    inputSize?: ISizeInput,
    inputLabel: string,
}

const Input = ({ inputSize = "md", inputLabel = "", ...rest }: IInputProps) => {
    return (
        <Main>
            <label> {inputLabel} </label>
            <StyledInput inputSize={inputSize} {...rest} />
        </Main> 
    )
}

export { Input }