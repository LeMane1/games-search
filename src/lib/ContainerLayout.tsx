import {Box, Container, Stack} from "@mui/material";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {Suspense} from "react";
import {HeaderSkeleton} from "@/components/skeletons";

export default function ContainerLayout(
  {
    children
  }: Readonly<{children: React.ReactNode}>){
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
          <Suspense fallback={<HeaderSkeleton/>}>
            <Header/>
          </Suspense>
          <Box sx={{ height: 24 }} />
          {children}
        </Stack>
      </Container>
      
      <Footer/>
    </Stack>
  )
}