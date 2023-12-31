import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
const LoginPage = () => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    return <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
        <Box>
      <Typography
         fontWeight="bold"
         fontSize="35px"
         color="primary"
         
         
         >
          TravelMedia  
        </Typography>
        </Box>


        <Box
          width={isNonMobileScreens ? "50%" : "93%"}
          p="2rem"
          m="2rem auto"
          borderRadius="1.5rem"
          backgroundColor={theme.palette.background.alt} >
           <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem"}}>
            Welcome to TravelMedia , the social media for Travellers community!
           </Typography>
           <Form />
        </Box>
    </Box>;
}

export default LoginPage;