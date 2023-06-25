import { Flex, Text, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
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

            <Flex
                direction={"row"}
                gap={"17px"}
            >
                <Text
                    fontSize={"18px"}
                    color={"#2c2c2c"}
                    fontWeight={"600"}
                >
                    <NavLink to={"/"}>
                        Generate
                    </NavLink>
                </Text>

                {/* <Text
                    fontSize={"18px"}
                    color={"#2c2c2c"}
                    fontWeight={"600"}
                >
                    <NavLink to={"/showcase"}>
                        Showcase
                    </NavLink>
                </Text> */}
            </Flex>
        </Flex>
    );
};

export default Header;