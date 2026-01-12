
import styled from 'styled-components'
import './App.css'
import { Button } from './design-system/components/Button/Button'
import { Input } from './design-system/components/Input/Input'
import { useMount } from './util/use-mount'
import { colors } from './design-system/tokens'
import { useState } from 'react'

const Container = styled.div`
  background-color: ${colors.gray800};
  width: 500px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  text-align: center;
  gap: 1rem;
  border-radius: 6px;
  color: ${colors.white};
`

const Main = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  
`

function App() {

  const [peso, setPeso] = useState<string>()
  const [altura, setAltura] = useState<string>()
  const [result, setResult] = useState<number>()

  // const identity = <T,>(value: T): T => {
  //   return value;
  // }

  // const click = (a: Partial<IUserIMC>) => {
  //   const b = identity("")
  //   console.log("dale", a, typeof b, b)
  // }

  const resultImc = () => {
    const nPeso = Number(peso)
    const nAltura = Number(altura)
    const calcIMC = (nPeso / (nAltura ** 2))
    setResult(calcIMC)

  }

  useMount(async () => {
    console.log("carregou a tela")
  })
  return (
    <Main>
      <Container>
        <h1>Calculo de IMC</h1>
        <Input inputLabel='Insira o seu peso' inputSize='md' placeholder='ex: 90'
          onChange={(e) => setPeso(e.target.value)} />

        <Input inputLabel='Insira sua altura' inputSize='md' placeholder='ex: 1.66'
          onChange={(e) => setAltura(e.target.value)} />
        <Button variant='primay100' title='Calcular' onClick={resultImc} />

        { !!result && (
          <>
            <h2>Resultado do imc: {result.toFixed(2)}</h2>
          </>
        )}
      </Container>
    </Main>
  )
}

export default App
