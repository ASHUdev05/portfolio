import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { React, useEffect, useState } from 'react'


const words = [
    "Ashutosh Kumar Jha", 
    "a backend dev", 
    "(not) a nerd", 
    "a coffee lover", 
    "a full time bug writer", 
    "a cat pic enjoyer", 
    "a certified noob",
    "."
];

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);

    // typeWriter
    useEffect(() => {
        if (index === words.length) return;

        else if (index === words.length - 1 && subIndex === words[index].length) {
            setSubIndex(0);
            setIndex(0);
            setReverse(false);
            return;
        }

        else if ( subIndex === words[index].length + 1 && 
            index !== words.length - 1 && !reverse ) {
            setReverse(true);
            return;
        }

        else if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => prev + 1);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
            150, parseInt(Math.random() * 350)));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    // blinker
    useEffect(() => {
        const timeout2 = setTimeout(() => {
        setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
    }, [blink]);

    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity={isNotSmallerScreen ? "0.1" : "0"}
                w="300px" h="300px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >{`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}> 
                    CSE student 💻| Constant Learner 🧑‍🎓| Professional Procrastinator 🫠
                    </Text>
                    <Text color={isDark ? "gray.200" : "gray.500"} fontSize="2xl">
                    I am based in Kolkata. Currently pursuing bachelors in Computer Science. I've been
                    coding since I was 7, only basic html+css+js websites, ms-dos stuff like that. Learning "real
                    tech stack" since I was 14. Proficient in writing bugs and making coffee. I enjoy sitting whole
                    day in front of my monitor (:    
                    </Text> 
                    <Button mt={8} colorScheme="blue" onClick={() =>
                        window.open("https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=amphoteric629@gmail.com&su=Saw%20your%20portfolio&body=Hello%2C%0A%0AI%20tried%20contacting%20you%20today.%0A%0A%0ATy%2C%0A%0A%0A%0A")
                    }>Hire Me</Button>

                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src='https://avatars.githubusercontent.com/u/84619413?v=4' />
            </Flex>

        </Stack>
    )
}

export default Header
