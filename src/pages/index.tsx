import { useState } from 'react'
import CardSection from '../components/CardSection'
import { Container } from '../components/Container'
import CardContext from '../hooks/context/CardContext'

export default function Index() {
  const [cards, setCards] = useState([])

  return(
    <Container height="100vh">
      <CardContext.Provider value={[cards, setCards]}>
        <CardSection />
      </CardContext.Provider>
    </Container>
  )
}
