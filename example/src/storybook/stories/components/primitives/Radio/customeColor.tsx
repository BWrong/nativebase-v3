import React from 'react';
import { Radio, RadioGroup, Text } from '@native-base/v3';

export default function () {
  return (
    <RadioGroup defaultValue="1">
      <Radio colorScheme="red" value="1">
        <Text mx={2}>red</Text>
      </Radio>
      <Radio colorScheme="black" value="2">
        <Text mx={2}>black</Text>
      </Radio>
      <Radio colorScheme="success" value="3">
        <Text mx={2}>success</Text>
      </Radio>
    </RadioGroup>
  );
}
