import { ReactElement } from 'react'
import { Text } from '@chakra-ui/layout'
import AddCard from '../AddCard'

export default function CardList(): ReactElement {
  return(
    <>
      <Text fontSize="xl">Your cards</Text>
      <Text fontSize="md">Add, edit or delete your card any time</Text>
      <AddCard />
    </>
  )
}