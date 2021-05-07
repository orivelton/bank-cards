import { Button } from '@chakra-ui/button'
import { Divider, List, ListIcon, ListItem } from '@chakra-ui/layout'
import { ImCreditCard } from 'react-icons/im'
import { MdEdit} from 'react-icons/md'

export default function CardList() {
  return(
    <List spacing={3}>
    <ListItem>
      <ListIcon as={ImCreditCard} />
      898989
      <Button rightIcon={<MdEdit />}>Edit</Button>
      <Divider />
    </ListItem>
  </List>
  )
}