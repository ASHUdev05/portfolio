import { Flex, Heading, IconButton, Spacer, useColorMode, VStack } from "@chakra-ui/react";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Social from "./components/Social";
import LargeWithAppLinksAndSocial from "./components/Footer"


function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading
          ml="8" size="md" fontWeight='semibold' color="cyan.400">ashu05</Heading>
      
      <Spacer></Spacer>
      <IconButton icon={<FaLinkedin />} isRound="true" onClick={() => window.open("https://in.linkedin.com/in/ashutosh-kumar-jha-0116ab215?trk=people-guest_people_search-card")}></IconButton>
      <IconButton ml={2} icon={<FaGithub />} isRound="true" onClick={() => window.open("https://github.com/ASHUdev05")}></IconButton>
      <IconButton ml={2} icon={<FaInstagram />} isRound="true" onClick={() => window.open("https://www.instagram.com/__legend05__")}></IconButton>
      <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Skills></Skills>
      <Profile></Profile>
      <LargeWithAppLinksAndSocial></LargeWithAppLinksAndSocial>
    </VStack>
  );
}

export default App;
