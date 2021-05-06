import { ReactElement } from 'react'
import { FormErrorMessage, FormControl } from '@chakra-ui/react'
import { FormLabel } from '@chakra-ui/form-control'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { FcCheckmark } from 'react-icons/fc'
import { CgClose } from 'react-icons/cg'

import { Icon } from '@chakra-ui/icons'

interface InpuHookFormInt {
  register: any,
  name: string,
  labelText: string
}

export default function InpuHookForm({register, name, labelText}: InpuHookFormInt): ReactElement {
  return(
    <FormControl isInvalid={false}>
      <FormLabel htmlFor={name}>{labelText}</FormLabel>
      <InputGroup size="md">
        <Input
          {...register(name, { required: true })}
          id={name}
          variant="flushed"
          placeholder="Please enter user name"
          name={name}
          />
        <InputRightElement width="4.5rem">
          { true ? <Icon as={FcCheckmark} color="green"/> : <Icon as={CgClose} color="red"/>}
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>Required</FormErrorMessage>
    </FormControl>
  )
}