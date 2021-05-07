import { ReactElement } from 'react'
import { Text } from '@chakra-ui/layout'
import AddCard from '../AddCard'
import CardList from '../CardList'

export default function CardSection(): ReactElement {
  return(
    <>
      <Text fontSize="xl">Your cards</Text>
      <Text fontSize="md">Add, edit or delete your card any time</Text>
      <CardList />
      <AddCard />
    </>
  )
}
