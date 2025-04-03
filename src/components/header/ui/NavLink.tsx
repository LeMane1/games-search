import {Box, Typography} from "@mui/material";

interface INavLinkProps {
  url: string;
  name: string;
}

export default function NavLink({ url, name }: INavLinkProps) {
  return (
    <Box
      component='li'
      sx={{
        opacity: 0.9,
        '&:hover': {
          opacity: 1,
        }
      }}
    >
      <Typography variant="subtitle1" component='a' href={url}>
        {name}
      </Typography>
    </Box>
  )
}