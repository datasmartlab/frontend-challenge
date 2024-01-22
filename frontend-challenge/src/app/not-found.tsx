import { Typography,Box } from "@mui/material"
 const PageNotFound = () =>{
    return(
        <>
        <Box sx={{
            backgroundColor: 'black',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh'
        }}>
            <Typography variant={"h2"} color={'white'}>
                Sorry
            </Typography>
            <Typography variant={"h2"} color={'white'}>
               Page not found
            </Typography>
            
        </Box>
        </>
    )
}
export default PageNotFound;