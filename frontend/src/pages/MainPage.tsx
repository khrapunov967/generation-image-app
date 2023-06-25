import { Box, Flex, Heading, Input, Button, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { OpenAI } from "../services/openai";
import Header from "../components/Header";
import Loader from "../components/Loader";
import * as types from "../types/data";
import { useNotification } from "../hooks/useNotification";

const MainPage: React.FC = () => {

    const [imageForm, setImageForm] = useState<types.ImageForm>({
        prompt: "",
        isGenerating: false
    });

    const [imageUrl, setImageUrl] = useState("");

    const { errorNotification, warningNotification } = useNotification();

    const generate = async () => {

        if (!imageForm.prompt.trim().length) {
            warningNotification("Prompt is required!");
            return;
        }
        
        setImageForm({
            ...imageForm,
            isGenerating: true
        });

        setImageUrl("");

        try {
            await OpenAI.generateImage(imageForm.prompt)
                .then((url) => {
                    setImageUrl(url)
                })
                .catch((reason) => {
                    errorNotification(reason.response.data)
                });


        } catch (error) {
            setImageUrl("");
            errorNotification("Something went wrong!")

        } finally {
            setImageForm({
                ...imageForm,
                isGenerating: false
            });
        }
    };

    return (
        <Box
            backgroundColor={"#fafafa"}
            minH={"100vh"}
        >
            <Header />

            <Flex
                width={"100%"}
                direction={"column"}
                alignItems={"center"}
            >
                <Heading
                    mb={"20px"}
                    color={"#000"}
                    textAlign={"center"}
                >
                    Let's Create Your Image!
                </Heading>

                <Flex
                    gap={"4px"}
                    mb={"16px"}
                >
                    <Input
                        placeholder="Prompt"
                        bgColor={"#fff"}
                        value={imageForm.prompt}
                        color={"#000"}
                        rounded={"none"}
                        _hover={{
                            bgColor: "#fff"
                        }}
                        _focus={{
                            bgColor: "#fff"
                        }}
                        border={"solid 2px black"}
                        focusBorderColor={"#000"}
                        variant={"filled"}
                        onChange={(e) => setImageForm({...imageForm, prompt: e.target.value})}
                    />

                    <Button
                        onClick={generate}
                        bgColor={"#000"}
                        rounded={"none"}
                        color={"#fff"}
                        border={"solid 2px black"}
                        _hover={{
                            bgColor: "inherit",
                            color: "#000"
                        }}
                    >
                        Generate
                    </Button>
                </Flex>

                <Box
                    w={"95%"}
                    h={"1px"}
                    bg={"#f2f2f2"}
                    mb={"20px"}
                />

                {
                    imageUrl ? 
                        <Image
                            src={imageUrl}
                            alt="Whoops! Can not be able to display your image!"
                            w={"500px"}
                            shadow={"md"}
                            mb={"20px"}
                            rounded={"md"}
                        /> 
                    :
                    imageForm.isGenerating ? 
                        <Loader />
                    :
                        <Text
                            fontWeight={600}
                            fontSize={"20px"}
                        >
                            You're image will be here!
                        </Text>
                }
            </Flex>
        </Box>
    );
};

export default MainPage;