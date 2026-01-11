import { useEffect, useRef } from "react"

const useMount = (func: () => Promise<void>, condition = true) => {
    const firstFlow = useRef(true)

    useEffect(() => {
        if(condition && firstFlow.current){
            firstFlow.current = false
            func()
        }
    }, [func, condition])
}

export { useMount }
