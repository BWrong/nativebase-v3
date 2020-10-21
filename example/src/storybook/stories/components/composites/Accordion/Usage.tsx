import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
} from 'native-base';
export default function () {
  return (
    <Box m={3}>
      <Accordion>
        <AccordionItem id={2}>
          <AccordionButton>
            <Box>Section 1 title</Box>
            <Box>+</Box>
          </AccordionButton>
          <AccordionPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem id={9}>
          <AccordionButton>
            <Box>Section 2 title</Box>
            <Box>+</Box>
          </AccordionButton>
          <AccordionPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem id={7}>
          <AccordionButton>
            <Box>Section 2 title</Box>
            <Box>+</Box>
          </AccordionButton>
          <AccordionPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
