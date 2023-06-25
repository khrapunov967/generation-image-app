import { Flex, Image } from "@chakra-ui/react";
import OpenAILogo from "../assets/logo.svg";

const Header: React.FC = () => {
    return (
        <Flex
            direction={"row"}
            justifyContent={"space-between"}
            padding={"18px"}
            alignItems={"center"}
            mb={"40px"}
            bgColor={"#fff"}
        >
            <Image
                src={OpenAILogo}
                alt={"Open AI"}
                w={"120px"}
            />
        </Flex>
    );
};

export default Header;