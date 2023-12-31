import { Box } from "@chakra-ui/react";

const RootLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <Box
            width={"100%"}
            maxWidth={"1440px"}
            margin={"0 auto"}
        >
            {children}
        </Box>
    );
};

export default RootLayout;