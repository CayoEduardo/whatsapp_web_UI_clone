import React, { useState, useEffect, useContext } from "react";
import {
  Flex,
  Avatar,
  Icon,
  HStack,
  VStack,
  Text,
  Input,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";

import { BiLoaderCircle } from "react-icons/bi";
import { GrChat } from "react-icons/gr";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaBellSlash } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";

import TabConversa from "../TabConversa";
import DrawerWpp from "../DrawerWpp";

import { ChatContext } from "../../contexts/ChatContext";
import { listaConversas } from "../../utils/conversa";

const Sidebar = () => {
  const [conversas, setConversas] = useState([...listaConversas]);
  const [search, setSearch] = useState("");
  const { setActiveChat } = useContext(ChatContext);

  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    if (search !== "") {
      let conversasFiltradas = conversas.filter((conversa) => {
        return (
          conversa.name.includes(search) ||
          conversa.lastMessage.includes(search)
        );
      });
      setConversas(conversasFiltradas);
    } else {
      setConversas(listaConversas);
    }
  }, [search]);

  return (
    <>
      <Flex id="sidebar" flex={4} flexDirection="column">
        <Flex
          w="100%"
          h="56px"
          bg="gray.300"
          alignItems="center"
          justifyContent="space-between"
          paddingX={4}
        >
          <DrawerWpp isOpen={isOpen} onClose={onClose} />

          <Avatar
            as="button"
            w={10}
            h={10}
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            onClick={onOpen}
          />
          <HStack spacing={8}>
            <Icon fontSize={22} as={BiLoaderCircle} />
            <Icon fontSize={22} as={GrChat} />
            <Icon fontSize={22} as={BsThreeDotsVertical} />
          </HStack>
        </Flex>
        <Flex w="100%" h="80px" bg="lightblue" paddingX={4}>
          <HStack spacing={4}>
            <Flex
              w="50px"
              h="50px"
              bg="white"
              borderRadius="50%"
              alignItems="center"
              justifyContent="center"
            >
              <Icon color="lightblue" fontSize={24} as={FaBellSlash} />
            </Flex>
            <VStack spacing={0}>
              <Text>Receba notificações de novas mensagens</Text>
              <Text fontSize="sm">
                Ativar notificações na área de trabalho {">"}
              </Text>
            </VStack>
          </HStack>
        </Flex>
        <Flex
          w="100%"
          h="48px"
          bg="#c4c4c4"
          p={2}
          // alignItems="center"
        >
          <Flex
            as="label"
            bg="white"
            alignItems="center"
            justifyContent="center"
            borderRadius={12}
            w="100%"
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
              placeholder="Pesquisar ou começar uma nova conversa"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Flex>
        </Flex>
        {conversas.map((conversa) => (
          <TabConversa
            name={conversa.name}
            lastMessage={conversa.lastMessage}
            avatar={conversa.avatar}
            onClick={() => setActiveChat(conversa)}
          />
        ))}
      </Flex>
    </>
  );
};

export default Sidebar;
