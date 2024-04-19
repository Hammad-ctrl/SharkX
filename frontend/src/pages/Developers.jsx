import React from 'react';
import { Box, Flex, Image, Text, Fade, Link as ChakraLink } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiUser, FiMessageCircle } from "react-icons/fi";

const Developers = () => {
  const developers = [
    {
      name: "Hazim Bhat",
      image: "https://imgs.search.brave.com/p55fiUBDKE3yvt-8jaLXZ5CxLIPjUMoncD_P9I2yMp0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2EzLzMw/LzU3L2EzMzA1N2E3/ODI5ZDM0YmU2NGZi/NDMzZDIwOGI5YTc5/LmpwZw",
      contactInfo: "bhathazim230@gmail.com",
      profileLink: "#",
      whatsappLink: "https://api.whatsapp.com/send?phone=7889341638",
    },
    {
      name: "Umer Iqbal",
      image: "https://imgs.search.brave.com/p55fiUBDKE3yvt-8jaLXZ5CxLIPjUMoncD_P9I2yMp0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2EzLzMw/LzU3L2EzMzA1N2E3/ODI5ZDM0YmU2NGZi/NDMzZDIwOGI5YTc5/LmpwZw",
      contactInfo: "UmerIqbal@gmail.com",
      profileLink: "#",
      whatsappLink: "https://api.whatsapp.com/send?phone=phoneNumber", 
    },
    {
      name: "Muzamil Maqbool",
      image: "https://imgs.search.brave.com/p55fiUBDKE3yvt-8jaLXZ5CxLIPjUMoncD_P9I2yMp0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2EzLzMw/LzU3L2EzMzA1N2E3/ODI5ZDM0YmU2NGZi/NDMzZDIwOGI5YTc5/LmpwZw",
      contactInfo: "muzamilbhat@gmail.com",
      profileLink: "#",
      whatsappLink: "https://api.whatsapp.com/send?phone=phoneNumber",
    },
    {
      name: "Ubaid Abdullah",
      image: "https://imgs.search.brave.com/p55fiUBDKE3yvt-8jaLXZ5CxLIPjUMoncD_P9I2yMp0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2EzLzMw/LzU3L2EzMzA1N2E3/ODI5ZDM0YmU2NGZi/NDMzZDIwOGI5YTc5/LmpwZw",
      contactInfo: "ubaidubdullah@gmail.com",
      profileLink: "#",
      whatsappLink: "https://api.whatsapp.com/send?phone=phoneNumber", 
    },
  ];

  return (
    <Flex direction="column" alignItems="center" justifyContent="center" height={"100%"}>
      <Text fontSize="3xl" fontWeight="bold" mb={8} textAlign="center">Meet Developers</Text>
      <Flex flexWrap="wrap" justifyContent="center" gap={8}>
        {developers.map((developer, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }}>
            <Fade in>
              <Box textAlign="center" borderWidth="1px" borderRadius="lg" p={4} boxShadow="lg">
                <Image src={developer.image} alt={developer.name} borderRadius="full" boxSize="150px" mb={4} />
                <Text fontSize="xl" fontWeight="bold">{developer.name}</Text>
                <Text fontSize="sm" color="gray.600">{developer.contactInfo}</Text>
                <Flex justifyContent="space-between" mt={2}>
                  <ChakraLink href={developer.profileLink} isExternal>
                    <Box as={FiUser} fontSize="xl" color="blue.500" cursor="pointer" />
                  </ChakraLink>
                  <ChakraLink href={developer.whatsappLink} isExternal>
                    <Box as={FiMessageCircle} fontSize="xl" color="green.500" cursor="pointer" />
                  </ChakraLink>
                </Flex>
              </Box>
            </Fade>
          </motion.div>
        ))}
      </Flex>
    </Flex>
  );
}

export default Developers;
