import React from "react"
import {
  Section,
  Title,
  Subtitle,
  Image,
  PlayButton,
} from "../styles/index.module"
import Grid from "@mui/material/Grid"
import { Container } from "@mui/system"
import GamesList from "../src/component/gamesList/gamesList.jsx"

//Testimony
import {
  Section3,
  Subtitle2,
  Title2,
  Subtitle3,
  CustomCard,
  CustomCard2,
  Subheader,
  Subheader2,
} from "../styles/index.module"
import Avatar from "@mui/material/Avatar"
import CardContent from "@mui/material/CardContent"
import { CardHeader } from "@mui/material"
import StarIcon from "@mui/icons-material/Star"

//News
import {
  Section4,
  Title3,
  Title4,
  Subtitle4,
  Subtitle5,
  CustomCard3,
  Button,
} from "../styles/index.module"
import { TextField } from "@mui/material"

//Footer
import { Divider } from "@mui/material"
import {
  FooterLink,
  Heading,
  Section5,
  Title5,
  Subtitle6,
  Round,
  Copyright,
} from "../styles/index.module"
import {
  FacebookRounded,
  Instagram,
  Twitter,
  LinkedIn,
} from "@mui/icons-material"

export default function Home() {
  return (
    <React.Fragment>
      {/* home */}
      <Section>
        <Container>
          <Grid container spacing={12}>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <Title>Rock Paper Scissor</Title>
              <Subtitle>
                Rock paper scissors (also known by other orderings of the three
                items, with rock sometimes being called stone, or as Rochambeau,
                roshambo, or ro-sham-bo) is a hand game originating from China
              </Subtitle>
              <PlayButton href='games/rps/play'>Play Now →</PlayButton>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
              <Image src='/assets/rock-paper-scissor.png' alt='image'></Image>
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* GamesList */}
      <GamesList />

      {/* Testimony */}
      <Section3 id='testimony'>
        <Container>
          <Title2>What they said about our games</Title2>
          <Subtitle2>Real experience from our customer</Subtitle2>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            justifyContent='center'
            alignItems='center'>
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              lg={4}
              xl={4}
              justifyContent='center'
              alignItems='center'>
              <CustomCard>
                <CardHeader
                  sx={{ color: "white" }}
                  avatar={
                    <Avatar
                      src='/static/images/avatar/1.jpg'
                      aria-label='avatar'></Avatar>
                  }
                  title='Viezh Robert'
                  subheader={<Subheader>Stray</Subheader>}
                  action={
                    <div>
                      4,5
                      <StarIcon sx={{ fontSize: 15, color: "orange" }} />
                    </div>
                  }
                />
                <CardContent>
                  <Subtitle3>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s
                  </Subtitle3>
                </CardContent>
              </CustomCard>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              lg={4}
              xl={4}
              justifyContent='center'
              alignItems='center'>
              <CustomCard2>
                <CardHeader
                  sx={{ color: "white" }}
                  avatar={
                    <Avatar
                      src='/static/images/avatar/1.jpg'
                      aria-label='avatar'></Avatar>
                  }
                  title='Yessica Christy'
                  subheader={<Subheader2>Rock Paper Scissors</Subheader2>}
                  action={
                    <div>
                      4,5
                      <StarIcon sx={{ fontSize: 15, color: "orange" }} />
                    </div>
                  }
                />
                <CardContent>
                  <Subtitle3>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s
                  </Subtitle3>
                </CardContent>
              </CustomCard2>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              lg={4}
              xl={4}
              justifyContent='center'
              alignItems='center'>
              <CustomCard2>
                <CardHeader
                  sx={{ color: "white" }}
                  avatar={
                    <Avatar
                      src='/static/images/avatar/1.jpg'
                      aria-label='avatar'></Avatar>
                  }
                  title='Kim Young Jou'
                  subheader={<Subheader2>Paper Minecraft</Subheader2>}
                  action={
                    <div>
                      4,5
                      <StarIcon sx={{ fontSize: 15, color: "orange" }} />
                    </div>
                  }
                />
                <CardContent>
                  <Subtitle3>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s
                  </Subtitle3>
                </CardContent>
              </CustomCard2>
            </Grid>
          </Grid>
        </Container>
      </Section3>

      {/* News */}
      <Section4 id='news'>
        <Container>
          <Title3>Newsletter</Title3>
          <Subtitle4>Keep in touch with us to experience new update</Subtitle4>
          <CustomCard3>
            <CardContent>
              <Grid
                container
                columns={{ xs: 4, sm: 8, md: 12 }}
                justifyContent='space-between'
                alignItems='center'>
                <Grid item xs={4} sm={7} md={7}>
                  <Title4>Stay in the loop</Title4>
                  <Subtitle5>
                    Subscribe to receive the latest news and updates about TDA.
                    <br />
                    We promise not to spam you!
                  </Subtitle5>
                </Grid>
                <Grid item xs={4} sm={5} md={5}>
                  <Grid
                    container
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    justifyContent='space-between'
                    alignItems='center'
                    bgcolor='white'
                    padding='10px 10px 10px 30px'
                    borderRadius='8px'>
                    <Grid item xs={2} sm={9} md={9} alignItems='center'>
                      <TextField
                        id='standard-basic'
                        label='Enter Email Address'
                        variant='standard'
                        size='small'
                      />
                    </Grid>
                    <Grid item xs={2} sm={3} md={3} alignItems='center'>
                      <Button>Continue</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </CustomCard3>
        </Container>
      </Section4>

      {/* Footer */}
      <Section5>
        <Container>
          <Grid
            container
            columns={{ xs: 4, sm: 8, md: 12 }}
            justifyContent='space-between'
            marginBottom={5}
            marginTop={5}>
            <Grid item xs={2} sm={5} md={5}>
              <Title5>LOGO</Title5>
              <Subtitle6>This is gaming website</Subtitle6>
            </Grid>
            <Grid item xs={4} sm={7} md={7}>
              <Grid
                container
                columns={{ xs: 4, sm: 8, md: 12 }}
                alignItems='flex-end'>
                <Grid item xs={2} sm={4} md={4} flexDirection='row'>
                  <Heading>About Us</Heading>
                  <FooterLink href='#'>Home</FooterLink>
                  <FooterLink href='#'>Games</FooterLink>
                  <FooterLink href='#'>Testimony</FooterLink>
                  <FooterLink href='#'>Newsletter</FooterLink>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <Heading>Contact Us</Heading>
                  <FooterLink href='#'>Okky</FooterLink>
                  <FooterLink href='#'>Isa</FooterLink>
                  <FooterLink href='#'>Hafidz</FooterLink>
                  <FooterLink href='#'>Gladys</FooterLink>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <div>
                    <Round>
                      <FacebookRounded sx={{ color: "white" }} />
                    </Round>
                    <Round>
                      <Instagram sx={{ color: "white" }} />
                    </Round>
                    <Round>
                      <Twitter sx={{ color: "white" }} />
                    </Round>
                    <Round>
                      <LinkedIn sx={{ color: "white" }} />
                    </Round>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Divider color='grey' />
        <Container sx={{ justifyContent: "center" }}>
          <Copyright>Copyright ® 2022 All Rights Reserved</Copyright>
        </Container>
      </Section5>
    </React.Fragment>
  )
}
