import { Flex, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <Flex
            direction={"row"}
            justifyContent={"space-between"}
            padding={"14px"}
            alignItems={"center"}
        >
            <Text
                fontSize={"30px"}
                fontWeight={"700"}
                color={"#2c2c2c"}
            >
                AImage
            </Text>

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

                <Text
                    fontSize={"18px"}
                    color={"#2c2c2c"}
                    fontWeight={"600"}
                >
                    <NavLink to={"/showcase"}>
                        Showcase
                    </NavLink>
                </Text>
            </Flex>
        </Flex>
    );
};

export default Header;