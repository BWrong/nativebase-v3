import React from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
  Center,
  Input,
} from 'native-base';

export default function () {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <Center>
      <Modal
        justifyContent="center"
        isOpen={modalVisible}
        onClose={setModalVisible}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader mt={-2} size={'2xl'}>
            Hello World
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi
            cupiditate expedita, ipsa corporis officia totam similique delectus!
            Debitis esse, ea blanditiis iste enim iure at odit fugiat autem.
            Accusamus?
            <Input mt={4} placeholder="Lorem ipsum dolor sit" />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="muted" mr={1}>
              Save
            </Button>
            <Button
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Button
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      >
        Open Modal
      </Button>
    </Center>
  );
}
