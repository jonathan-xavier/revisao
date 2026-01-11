
import styled from 'styled-components'
import './App.css'
import { Button } from './design-system/components/Button/Button'
import { Input } from './design-system/components/Input/Input'
import { useMount } from './util/use-mount'
import { colors } from './design-system/tokens'

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

const App = () => {

  const click = () => {
    alert("auuuuuuu")
  }

  useMount(async () => {
    console.log("carregou a tela")
  })
  return (
    <Main>

      <Container>
        <p>Oi doguinho</p>
        <Input inputLabel='Insira o seu peso' inputSize='md' placeholder='ex: 90' />
        <Input inputLabel='Insira sua altura' inputSize='md' placeholder='ex: 1.66' />
        <Button variant='primay100' title='Calcular' onClick={click} />

      </Container>
    </Main>
  )
}

export default App
