import React from 'react';
import { Flex, Text, Spacer, Center } from '@native-base/v3';

export const SpacerExample = () => {
  return (
    <Flex w="100%" direction="row">
      <Center w="100px" bg="tomato">
        <Text>Box 1</Text>
      </Center>
      <Spacer />
      <Center bg="green.500" h="100px" w="100px">
        <Text>Box 2</Text>
      </Center>
    </Flex>
  );
};
