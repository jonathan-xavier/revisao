import type { HTMLAttributes } from "react"
import { StyleCard } from "./styles"

type IDivProps = HTMLAttributes<HTMLDivElement> & {
    grau: string,
    imc: number
}

const Card = ({grau,imc, ...rest}: IDivProps) => {
    return (
        <StyleCard {...rest}>
            <h2>Grau:{grau} </h2>
            <span>IMC: {imc.toFixed(2)}</span>
        </StyleCard>
    )
}

export {Card}