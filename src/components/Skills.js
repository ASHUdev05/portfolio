import { Box, Flex } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/media-query';
import Progressbar from './Progress_bar';
import React from 'react'

function Skills() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    
    <Box alignSelf="center" px="32" py="16" w="100%">
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
        <Progressbar bgcolor="#99ff66" text="Golang" progress='55'  height={30} />
        <Progressbar bgcolor="#99ff66" text="Java" progress='90'  height={30} />
        </Flex>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
        <Progressbar bgcolor="#99ff66" text="TypeScript" progress='90'  height={30} />
        <Progressbar bgcolor="#99ff66" text="C" progress='50'  height={30} />
        </Flex>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
        <Progressbar bgcolor="#99ff66" text="Python" progress='90'  height={30} />
        <Progressbar bgcolor="#99ff66" text="Node-js" progress='80'  height={30} />
        </Flex>
</Box>
        
  )
}

export default Skills