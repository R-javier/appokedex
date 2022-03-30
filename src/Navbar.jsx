import React, { useState } from "react";
import { Stack, Heading, Text, Button, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Navbar() {
  const { toggleColorMode } = useColorMode();
  const [cambia, setCambia] = useState(false);

  function handleChangeColor() {
    toggleColorMode();
    setCambia(!cambia);
  }

  return (
    <Stack my={5}>
      <Stack direction="row" justify="space-around" display="flex">
        <Link to="/">
          <Heading>AppokedeX</Heading>
        </Link>
        <Stack direction="row">
          {" "}
          {/* <Link to="/info">
            <Button>1</Button>
          </Link>
          <Button>2</Button>
          <Button>3</Button> */}
        </Stack>

        <Button onClick={() => handleChangeColor()}>
          {cambia ? <Text>🌞</Text> : <Text>🌙</Text>}
        </Button>
      </Stack>
    </Stack>
  );
}

export default Navbar;
