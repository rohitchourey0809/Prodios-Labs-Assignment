import React from "react";
import { ChakraProvider, Box, Heading } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

const App = () => {
  return (
    <ChakraProvider>
      <Box p={4}>
        <Heading as="h1" size="xl" textAlign="center" my={6}>
          Code Editor
        </Heading>
        <CodeEditor />
      </Box>
    </ChakraProvider>
  );
};

export default App;
