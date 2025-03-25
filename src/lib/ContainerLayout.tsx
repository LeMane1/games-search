import {Box, Container, Stack} from "@mui/material";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface IContainerLayoutProps {
  showExtraLayout?: boolean;
  children: React.ReactNode;
}

export default function ContainerLayout(
  {
    showExtraLayout = true,
    children
  }: IContainerLayoutProps){
  return (
    <Stack direction="column"
           sx={{
             minHeight: '100vh',
             justifyContent: 'space-between',
           }}
    >
      <Container
        maxWidth="lg"
        sx={{
          padding: 2,
        }}>
        <Stack>
          {showExtraLayout && <Header/>}
          <Box sx={{ height: 24 }} />
          {children}
        </Stack>
      </Container>
      
      {showExtraLayout && <Footer/>}
    </Stack>
  )
}