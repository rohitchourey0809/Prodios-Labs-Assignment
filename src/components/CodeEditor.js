import React, { useState } from "react";
import { Box, Textarea } from "@chakra-ui/react";
import { Highlight, themes, Prism } from "prism-react-renderer";

(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-jsx.min");

const CodeEditor = () => {
  const [code, setCode] = useState("");

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <Box width="100%" maxWidth="800px" mx="auto" my={4}>
      <Highlight code={code} language="jsx" theme={themes.nightOwl}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Box
            as="pre"
            className={className}
            style={style}
            padding="16px"
            borderRadius="8px"
            overflowX="auto"
          >
            {tokens.map((line, i) => (
              <Box key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </Box>
            ))}
          </Box>
        )}
      </Highlight>
      <Textarea
        mt={2}
        height="200px"
        value={code}
        onChange={handleChange}
        placeholder="Type your code here..."
        fontFamily="monospace"
        borderColor="gray.300"
      />
    </Box>
  );
};

export default CodeEditor;
