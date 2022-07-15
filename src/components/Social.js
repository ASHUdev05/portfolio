import Icon from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { FaDiscord, FaTwitter, FaEnvelope } from 'react-icons/fa'

function Social() {
    return (
        <HStack spacing="24">
            <Icon as={FaDiscord} boxSize="50" onClick={() => window.open("https://discordapp.com/users/877804982689234994")} />
            <Icon as={FaEnvelope} boxSize="50" onClick={() => window.open("https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=amphoteric629@gmail.com&su=Saw%20your%20portfolio&body=Hello%2C%0A%0AI%20tried%20contacting%20you%20today.%0A%0A%0ATy%2C%0A%0A%0A%0A")} />
            <Icon as={FaTwitter} boxSize="50" onClick={() => window.open("https://twitter.com/ASHUTOS07412708")} />
        </HStack>
    )
}

export default Social