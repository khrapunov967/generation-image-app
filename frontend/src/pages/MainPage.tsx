import { Box, Flex, Heading, Input, Button, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { OpenAI } from "../services/openai";
import Header from "../components/Header";
import Loader from "../components/Loader";
import * as types from "../types/data";

const MainPage: React.FC = () => {

    const [imageForm, setImageForm] = useState<types.ImageForm>({
        prompt: "",
        isGenerating: false
    });

    const [imageUrl, setImageUrl] = useState("");

    const generate = async () => {
        setImageForm({
            ...imageForm,
            isGenerating: true
        });

        setImageUrl("");

        try {
            const url = await OpenAI.generateImage(imageForm.prompt)
            setImageUrl(url)

        } catch (error) {
            setImageUrl("")

        } finally {
            setImageForm({
                ...imageForm,
                isGenerating: false
            });
        }
    };

    return (
        <Box
            backgroundColor={"#fefefe"}
        >
            <Header />

            <Flex
                width={"100%"}
                direction={"column"}
                alignItems={"center"}
            >
                <Heading
                    mb={"20px"}
                >
                    Let's generate your image!
                </Heading>

                <Flex
                    gap={"4px"}
                    mb={"16px"}
                >
                    <Input
                        placeholder="Prompt"
                        value={imageForm.prompt}
                        onChange={(e) => setImageForm({...imageForm, prompt: e.target.value})}
                    />

                    <Button
                        onClick={generate}
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