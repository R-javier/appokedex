import React from "react";
import { Stack, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Navbar() {
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
      </Stack>
    </Stack>
  );
}

export default Navbar;
