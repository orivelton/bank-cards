import { ReactElement, useRef } from 'react'
import { Button } from '@chakra-ui/button'
import { MdAdd } from 'react-icons/md'
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from '@chakra-ui/modal'
import { Box, Stack } from '@chakra-ui/layout'
import { FormLabel } from '@chakra-ui/form-control'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { useDisclosure } from '@chakra-ui/hooks'

export default function AddCard(): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = useRef()

  return (
    <>
      <Button rightIcon={<MdAdd />} onClick={onOpen}>Add Card</Button>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Create a new account
        </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
              <InputGroup size="md">
                <FormLabel htmlFor="username">Name in card</FormLabel>
                <Input
                  ref={firstField}
                  id="username"
                  variant="flushed"
                  placeholder="Please enter user name"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm">
                    {true ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              </Box>

              <Box>
                <FormLabel htmlFor="username">Card Number</FormLabel>
                <Input
                  isInvalid
                  errorBorderColor="red.400"
                  id="username"
                  variant="flushed"
                  placeholder="Please enter user name"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="username">Expiry date</FormLabel>
                <Input
                  id="username"
                  variant="flushed"
                  placeholder="Please enter user name"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="username">CVC {`(Security code)`}</FormLabel>
                <Input
                  id="username"
                  variant="flushed"
                  placeholder="Please enter user name"
                />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button isFullWidth>Confirm</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}