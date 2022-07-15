import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';


function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
            <Box alignSelf="center" px="32" py="16">
                <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
                    ≈0 
                </Heading>
                <Text fontSize="2xl" color="gray.400">Years of Professional Experience</Text>
            </Box>
            <Box alignSelf="center" px="32" py="16">
                <Text fontWeight="bold" fontSize="2xl">Backend Developer, I mostly work with node-js.</Text>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    <Flex rounded="xl" direction="column" mt={4} bgGradient="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "orange.400", }}  onClick={() => window.open("https://github.com/ASHUdev05/ALPHA-BROWSER")}>
                        <Text color="black" p="1" fontSize="xl" fontWeight='hairline'>
                            This project is my entry to Visual Studio. [made with VB.net]
                        </Text>
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Alpha Browser
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.400", }} onClick={() => window.open("https://github.com/ASHUdev05/weather-app-advanced")}>
                        <Text color="black" p="1" fontSize="xl" fontWeight='hairline'>
                            This project is my entry to JS apis. [using open-weather api]
                        </Text>
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Weather App
                        </Text>
                    </Flex>
                    </Flex>
                    <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 0 : 0}
                        bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" h="30vh" w="30vh" justify="flex-end"
                        _hover={{ bg: "green.400", }} onClick={() => window.open("https://github.com/ASHUdev05/Pratham")}>
                        <Text color="black" p="1" fontSize="xl" fontWeight='hairline'>
                            This project is my entry to language compilers. 
                            Made with C.
                        </Text>
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Pratham
                        </Text>
                    </Flex>
                </Flex>

            </Box>
        </Flex>
    )
}

export default Profile