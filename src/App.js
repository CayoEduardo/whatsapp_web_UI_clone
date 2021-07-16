import React, { useState, useEffect } from "react";
import faker from "faker";
import {
  ChakraProvider,
  Flex,
  Box,
  Avatar,
  HStack,
  Input,
  Text,
  Icon,
} from "@chakra-ui/react";
import { HiOutlineSearch } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { VscSmiley } from "react-icons/vsc";
import { FiPaperclip } from "react-icons/fi";
import { FaMicrophone } from "react-icons/fa";

import Sidebar from "./components/Sidebar";
import bg from "./assets/images/Desktop.png";

import { ChatContext } from "./contexts/ChatContext";

import theme from "./styles/theme";

function App() {
  const [activeChat, setActiveChat] = useState({ name: "teste" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log(activeChat);
  }, [activeChat]);

  const addMessage = (message) => {
    if (message === "") return;
    else {
      let newMessage = {
        time: faker.datatype.datetime(),
        content: message,
        sentBy: "user",
      };
      activeChat.messages.push(newMessage);
    }
  };

  console.log(activeChat);

  return (
    <ChakraProvider theme={theme}>
      <ChatContext.Provider value={{ activeChat, setActiveChat }}>
        <Flex
          h="100vh"
          w="100vw"
          // bg="#c3c3c3"
          p={4}
          backgroundImage={`url(${bg})`}
        >
          <Box
            maxWidth={1440}
            w="100%"
            h="100%"
            bg="#fff"
            margin="0 auto"
            display="flex"
            border="1px solid rgba(0,0,0,0.1)"
            boxShadow="md"
          >
            <Flex flexGrow={1} w="100%">
              <Sidebar />
              <Flex id="char" flexDirection="column" flex={10}>
                <Flex
                  w="100%"
                  h="56px"
                  bg="gray.300"
                  alignItems="center"
                  justifyContent="space-between"
                  p={4}
                  borderLeft="1px solid rgba(0,0,0,0.1)"
                  borderBottom="1px solid rgba(0,0,0,0.1)"
                >
                  <HStack>
                    <Avatar
                      w="38px"
                      h="38px"
                      name={activeChat.name}
                      src={activeChat.avatar}
                    />
                    <Text>{activeChat.name}</Text>
                  </HStack>
                  <HStack>
                    <Icon fontSize={20} as={HiOutlineSearch} />
                    <Icon fontSize={20} as={BsThreeDotsVertical} />
                  </HStack>
                </Flex>
                <Flex
                  height="100%"
                  bg="#c5c5c5"
                  backgroundImage="url('https://a-static.mlcdn.com.br/618x463/papel-de-parede-3d-preto-e-dourado-geometrico-autocolante-lrp/lojariopreto/9822961328/b53157dfd57618fc547c844299f23ce0.jpg')"
                  backgroundSize="cover"
                  // opacity={0.3}
                  flexDirection="column"
                  padding={8}
                  overflow="auto"
                >
                  {activeChat.messages ? (
                    activeChat.messages.map((message) => {
                      if (message.sentBy === "contact") {
                        return (
                          <Box
                            mt={1}
                            mb={1}
                            bg="white"
                            borderRadius={16}
                            padding={2}
                            alignSelf="flex-start"
                          >
                            <Flex>
                              <Text color="black">{message.content}</Text>
                              <Text
                                ml={4}
                                alignSelf="flex-end"
                                fontSize="xx-small"
                              >
                                {message.time.toString().split(" ")[4]}
                              </Text>
                            </Flex>
                          </Box>
                        );
                      } else {
                        return (
                          <Box
                            mt={1}
                            mb={1}
                            bg="lightgreen"
                            borderRadius={16}
                            padding={2}
                            alignSelf="flex-end"
                            maxWidth={350}
                          >
                            <Flex>
                              <Text color="black">{message.content}</Text>
                              <Text
                                ml={4}
                                alignSelf="flex-end"
                                fontSize="xx-small"
                              >
                                {message.time.toString().split(" ")[4]}
                              </Text>
                            </Flex>
                          </Box>
                        );
                      }
                    })
                  ) : (
                    <></>
                  )}
                </Flex>
                <HStack
                  spacing={4}
                  w="100%"
                  h="56px"
                  bg="gray.300"
                  alignItems="center"
                  justifyContent="space-around"
                  paddingX={4}
                  borderLeft="1px solid rgba(0,0,0,0.1)"
                  borderBottom="1px solid rgba(0,0,0,0.1)"
                >
                  <Icon fontSize={24} as={VscSmiley} />
                  <Icon fontSize={24} as={FiPaperclip} />
                  <Flex
                    as="label"
                    bg="white"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius={16}
                    w="100%"
                    h="60%"
                  >
                    <Icon
                      color="black"
                      as={HiOutlineSearch}
                      style={{ marginLeft: 12 }}
                    />
                    <Input
                      ml={4}
                      color="black"
                      variant="unstyled"
                      placeholder="Digite sua mensagem"
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyUp={(event) => {
                        if (event.key === "Enter") {
                          addMessage(message);
                          setMessage("");
                        }
                      }}
                      value={message}
                    />
                  </Flex>
                  <Icon fontSize={20} as={FaMicrophone} />
                </HStack>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </ChatContext.Provider>
    </ChakraProvider>
  );
}

export default App;
