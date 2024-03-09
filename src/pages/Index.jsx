import { Box, Button, Container, Heading, Text, VStack, HStack, Image, Link, SimpleGrid, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaFacebookF, FaMusic, FaTicketAlt } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.800");

  return (
    <Container maxW="container.xl">
      <VStack spacing={8} py={10}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={2}>
            The Rocking Stones
          </Heading>
          <Text fontSize="lg" color="gray.500">
            Join us on our world tour!
          </Text>
        </Box>

        <Image borderRadius="lg" src="https://images.unsplash.com/photo-1516057747705-0609711c1b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5kJTIwb24lMjBzdGFnZXxlbnwwfHx8fDE3MDk5ODk5MDV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="The Rocking Stones on stage" />

        <HStack spacing={4} justify="center">
          <Link href="/tour-dates" _hover={{ textDecoration: "none" }}>
            <Button leftIcon={<Icon as={FaTicketAlt} />} colorScheme="purple" variant="solid">
              Tour Dates
            </Button>
          </Link>
          <Link href="/music" _hover={{ textDecoration: "none" }}>
            <Button leftIcon={<Icon as={FaMusic} />} colorScheme="yellow" variant="outline">
              Our Music
            </Button>
          </Link>
        </HStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <VStack bg={bg} p={5} borderRadius="lg" spacing={4} align="start">
            <Heading as="h3" size="md">
              About Us
            </Heading>
            <Text fontSize="sm" color="gray.500">
              Formed in 1980, The Rocking Stones have been on the forefront of the rock scene, thrilling audiences worldwide with their dynamic performances.
            </Text>
          </VStack>

          <VStack bg={bg} p={5} borderRadius="lg" spacing={4} align="start">
            <Heading as="h3" size="md">
              Latest Album
            </Heading>
            <Text fontSize="sm" color="gray.500">
              Check out our latest album "Rock Forever" featuring hit singles that are sure to get you on your feet!
            </Text>
          </VStack>

          <VStack bg={bg} p={5} borderRadius="lg" spacing={4} align="start">
            <Heading as="h3" size="md">
              Follow Us
            </Heading>
            <HStack>
              <Link href="https://twitter.com" isExternal>
                <Icon as={FaTwitter} boxSize={6} />
              </Link>
              <Link href="https://instagram.com" isExternal>
                <Icon as={FaInstagram} boxSize={6} />
              </Link>
              <Link href="https://facebook.com" isExternal>
                <Icon as={FaFacebookF} boxSize={6} />
              </Link>
            </HStack>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
