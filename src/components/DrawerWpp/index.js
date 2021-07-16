import React from "react";

import {
  Drawer,
  DrawerOverlay,
  DrawerBody,
  Input,
  DrawerCloseButton,
  DrawerContent,
  Button,
  DrawerHeader,
  DrawerFooter,
} from "@chakra-ui/react";

const DrawerWpp = ({ isOpen, onClose }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      w="100%"
      trapFocus={false}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create your account</DrawerHeader>

        <DrawerBody>
          <Input placeholder="Type here..." />
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerWpp;
