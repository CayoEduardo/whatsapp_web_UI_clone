import React from "react";

import { Flex, HStack, Avatar, Text, Badge, VStack } from "@chakra-ui/react";

const TabConversa = ({ name, lastMessage, avatar, ...rest }) => {
  return (
    <Flex
      w="100%"
      maxWidth={400}
      bg="white"
      h="70px"
      spacing={4}
      borderBottom="1px solid rgba(0,0,0,0.1)"
      alignItems="center"
      justifyContent="space-between"
      paddingX={4}
      {...rest}
      _hover={{
        backgroundColor: "gray.100",
        cursor: "pointer",
      }}
    >
      <HStack spacing={4}>
        <Avatar size="md" name={name} src={avatar} />
        <VStack display="flex" alignItems="flex-start" spacing={0}>
          <Text fontSize="lg">{name}</Text>
          <Text fontSize="small" isTruncated color="black">
            {lastMessage}
          </Text>
        </VStack>
      </HStack>

      <VStack display="flex" spacing={0} ml={8}>
        <Text fontSize="small">12:45</Text>
        <Badge
          colorScheme="green"
          fontSize={12}
          style={{ borderRadius: "50%" }}
        >
          99
        </Badge>
      </VStack>
    </Flex>
  );
};

export default TabConversa;
