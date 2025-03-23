import {Accordion, AccordionDetails, AccordionSummary, Stack, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IGameSystemRequirementProps {
  minimum?: string;
  recommended?: string;
  platformName: string;
}

export default function GameSystemRequirement({ minimum, recommended, platformName }: IGameSystemRequirementProps) {
  return (
    <>
      <Accordion disabled={!(minimum || recommended)} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography component="span" variant='h6'>
            {platformName}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="column" spacing={2}>
            {
              minimum && <Stack direction='column'>
                <Typography component="span" variant='subtitle1' fontWeight='bold'>
                  Minimum
                </Typography>
                <Typography component='p' variant='body1' color='textSecondary'>
                  {minimum}
                </Typography>
              </Stack>
            }
            
            {
              recommended && <Stack direction='column'>
                <Typography component="span" variant='subtitle1' fontWeight='bold'>
                  Recommended
                </Typography>
                <Typography component='p' variant='body1' color='textSecondary'>
                  {recommended}
                </Typography>
              </Stack>
            }
          </Stack>
        </AccordionDetails>
      </Accordion>
    </>
  )
}