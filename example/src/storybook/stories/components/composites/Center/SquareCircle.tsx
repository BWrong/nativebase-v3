import React from 'react';
import { Circle, Square, Box, HStack, Icon } from 'native-base';
export default function () {
  return (
    <HStack>
      <Circle size={98} bg="tomato">
        <Icon
          name="audiotrack"
          type="MaterialIcons"
          color="white"
          boxSize={8}
        />
      </Circle>
      <Square size="lg" bg="blue.3">
        <Box fontWeight="bold" fontSize="lg" color="white">
          20
        </Box>
      </Square>
    </HStack>
  );
}
