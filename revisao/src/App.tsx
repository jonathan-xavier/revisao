
import styled from 'styled-components'
import './App.css'
import { Button } from './design-system/components/Button/Button'
import { Input } from './design-system/components/Input/Input'
import { useMount } from './util/use-mount'
import { colors } from './design-system/tokens'
import { useState } from 'react'
import { Card } from './design-system/components/Card/Card'

const Container = styled.div`
  background-color: ${colors.gray800};
  width: 500px;
  height: 550px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  text-align: center;
  gap: 1.5rem;
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
  const [imc, setImc] = useState<number>()
  const [degree, setDegree] = useState<string>()

  const resultImc = () => {
    const nPeso = Number(peso)
    const nAltura = Number(altura)
    const calcIMC = (nPeso / (nAltura ** 2))
    setImc(calcIMC)

    if (imc) {
      setDegree(calculateIMC(imc))
    }
  }

  const calculateIMC = (imc: number): string => {
    let degree = ""
    if (imc < 18) {
      degree = "Magreza"
    } else if (imc >= 18.5 && imc <= 24.9) {
      degree = "Peso normal"
    } else if (imc >= 25 && imc <= 29.9) {
      degree = "Sobrepeso"
    } else if (imc >= 30 && imc <= 34.9) {
      degree = "Obesidade grau I"
    } else if (imc >= 35 && imc <= 39.9) {
      degree = "Obesidade grau II"
    } else if (imc >= 40) {
      degree = "Obesidade grau III"
    }
    return degree
  }


  // const identity = <T,>(value: T): T => {
  //   return value;
  // }

  // const click = (a: Partial<IUserIMC>) => {
  //   const b = identity("")
  //   console.log("dale", a, typeof b, b)
  // }


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

        {!!imc && degree && (
          <Card grau={degree} imc={imc} />
        )}
      </Container>
    </Main>
  )
}

export default App
