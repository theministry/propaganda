import React from 'react'

import { Box, Flex, Button } from 'rebass'
import { Label, Input, Textarea } from '@rebass/forms'

const ContactForm = () => {
    return (
        <Box
            as='form'
            mb={4}
        >
            <Label htmlFor='name'>Name:</Label>
            <Input id='name' name='name' placeholder='Nikolai'></Input>
            <Label htmlFor='email'>Email:</Label>
            <Input id='email' name='email' type='email' placeholder='nikolai@theministry.co'></Input>
            <Label htmlFor='message'>Message:</Label>
            <Textarea placeholder="Let's discuss something cool!">
            </Textarea>
            <Flex flexDirection='row-reverse'>
                <Button type='submit' variant='outline' mt={3}>Send</Button>
            </Flex>
        </Box>
    )
}

export default ContactForm
