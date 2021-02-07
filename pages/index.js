import * as React from "react"
import Img from "next/image"
import Link from "@material-ui/core/Link"
import {FaWindows} from "react-icons/fa"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import AppleIcon from "@material-ui/icons/Apple"
import SingleColumnLayout from "../layouts/SingleColumn"

const Home = () => {
  return (
    <SingleColumnLayout>
      <Container maxWidth="md">
        <Section>
          <Box fontFamily="Bebas Neue">
            <Typography
              variant="h3"
              align="center"
              style={{fontFamily: "Bebas Neue"}}
            >
              Stave Editor
            </Typography>
          </Box>
          <Box
            mb={5}
            letterSpacing={2}
            textAlign="center"
            color="text.secondary"
          >
            Writing music programmatically
          </Box>
          <Box display="flex" justifyContent="center">
            <Box mr={2}>
              <Button
                size="large"
                variant="outlined"
                color="primary"
                endIcon={<FaWindows />}
                component={Link}
                href="https://www.dropbox.com/s/xismuay9tdssnok/Stave%20Editor%20Setup%201.0.0.exe?dl=1"
              >
                Windows
              </Button>
            </Box>
            <Button
              size="large"
              variant="outlined"
              color="primary"
              endIcon={<AppleIcon />}
              component={Link}
              href="https://www.dropbox.com/s/oi01s5mghkxxr50/Stave%20Editor-1.0.0.dmg?dl=1"
            >
              Mac
            </Button>
          </Box>
          <Img src="/mac.png" height={3000} width={4000} layout="responsive" />
        </Section>
      </Container>
    </SingleColumnLayout>
  )
}

const Section = ({children}) => (
  <Box height="100%" mt={5}>
    {children}
  </Box>
)

export default Home
