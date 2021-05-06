import { ReactElement } from 'react'
import { Button } from '@chakra-ui/button'
import { MdAdd } from 'react-icons/md'
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from '@chakra-ui/modal'
import { Box, Stack } from '@chakra-ui/layout'
import { FormLabel } from '@chakra-ui/form-control'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { useDisclosure } from '@chakra-ui/hooks'



import { useForm } from 'react-hook-form'
import InpuHookForm from '../InpuHookForm'

export default function AddCard(): ReactElement {
  const { handleSubmit, errors, register, formState } = useForm()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onSubmit = values => {
    console.log(values)
  }

  return (
    <>
      <Button rightIcon={<MdAdd />} onClick={onOpen}>Add Card</Button>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        // initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Create a new account
        </DrawerHeader>
          <DrawerBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing="24px">
                <InpuHookForm {...{ register, labelText: 'Name in card', name: 'nameInCard'}} />
                <InpuHookForm {...{ register, labelText: 'Card Number', name: 'cardNumber'}} />
                <InpuHookForm {...{ register, labelText: 'Expiry date', name: 'expiryDate'}} />
                <InpuHookForm {...{ register, labelText: 'CVC (Security code)', name: 'cvc'}} />
              </Stack>
              <DrawerFooter borderTopWidth="1px">
                <Button isFullWidth type="submit">Confirm</Button>
              </DrawerFooter>
            </form>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}