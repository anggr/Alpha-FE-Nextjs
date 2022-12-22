import React, { useEffect } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { Container } from "@mui/system"
import {
  PlayButton,
  Section,
  Subtitle,
  Subtitle2,
  Title,
  Title2,
} from "../../styles/game.module"
import { Box, Grid } from "@mui/material"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { getLeaderboard } from "../../src/store/actions/leaderboardActions"
import { useDispatch, useSelector } from "react-redux"

const columns = [
  { id: "rank", label: "Rank", minWidth: 50 },
  { id: "nama", label: "Nama", minWidth: 50 },
  { id: "score", label: "Score", minWidth: 50 },
]

export default function Motox3m() {
  const rows = useSelector((state) => state.leaderboardReducer.leaderboard)
  const dispatch = useDispatch()
  useEffect(() => {
    fetchLeaderboard()
  }, [])
  const fetchLeaderboard = async () => {
    await dispatch(getLeaderboard(1))
  }

  return (
    <Section>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
            <iframe
              style={{
                width: "100%",
                height: "50vh",
              }}
              frameborder="0"
              title='YouTube video player'
              allow='autoplay; encrypted-media;'
              allowFullScreen=''
              data-player-status='playing'
              data-ll-status='loaded'
              allowtransparency='true'
              src='https://www.youtube.com/embed/e4Bqv3KPBRI?enablejsapi=1&amp;version=3&amp;controls=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=e4Bqv3KPBRI&amp;playsinline=1;'
              id='ytplayer-b946b0'
            />
            <Card sx={{ minWidth: 275, backgroundColor: "#1e212e" }} >
              <CardContent>
              <Grid container>
                  <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
                    <Title>Rock Paper Scissors</Title>
                  </Grid>
                  <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                    <PlayButton href="/games/rps/play">
                      Play
                    </PlayButton>
                  </Grid>
                </Grid>
                <Subtitle>
                  Rock Paper Scissors is the classic playground game converted into a fun online multiplayer game&#46; Have you ever had a dispute or disagreement where you and a friend cannot decide who is right and who is wrong&#63; If so then you have probably settled it by playing rock paper scissors&#46;
                  <br />
                  <br />
                  The rules remain the same as the original game&#58; Rock beats scissors&#44; Scissors beats paper and paper beats rock&#46; The rules are easy&#44; the game is simple&#44; the fun continues in this online version of the absolute classic game&#46; Win three times in a row to win the duel outright and win any disagreement that you could ever have&#33;
                </Subtitle>
                <Title>Controls</Title>
                <Subtitle>
                  Use the left mouse button to choose an object&#46;
                </Subtitle>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <Card sx={{ minWidth: 275, height: "50vh", backgroundColor: "#181B26",borderColor:"orange", borderStyle: "solid" }}>
              <CardContent>
                <Typography
                  variant='h5'
                  component='div'
                  sx={{ mb: 1.5, textAlign: "center", color:"white" }}>
                  Leaderboard
                </Typography>
                <Paper sx={{ overflow: "hidden", color:"white", backgroundColor: "#1e212e" }}>
                  <TableContainer sx={{ maxHeight: "50vh" }}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columns.map((column) => (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ minWidth: column.minWidth, color:"white", backgroundColor: "#1e212e" }}>
                              {column.label}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row,index) => {
                          return (
                            <TableRow key={index} hover>
                              <TableCell align={row.align} sx={{ color:"white" }}>Gold</TableCell>
                              <TableCell sx={{ color:"white" }}>
                                {row?.detail_user?.username}
                                {/* {row?.detail_user?.first_name}{" "}
                                {row?.detail_user?.last_name} */}
                              </TableCell>
                              <TableCell sx={{ color:"white" }}>{row?.score}</TableCell>
                            </TableRow>
                          )
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
}
