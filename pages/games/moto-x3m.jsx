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
import { Grid } from "@mui/material"
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
    await dispatch(getLeaderboard(2))
  }

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
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
              title='YouTube video player'
              frameborder='0'
              allow='autoplay; encrypted-media;'
              allowFullScreen=''
              data-player-status='playing'
              data-ll-status='loaded'
              allowtransparency='true'
              src='https://www.youtube.com/embed/fhOLg3vL_sI?enablejsapi=1&amp;version=3&amp;controls=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=fhOLg3vL_sI&amp;playsinline=1;'
              id='ytplayer-b946b0'
            />
            <Card sx={{ minWidth: 275, backgroundColor: "#1e212e" }}>
              <CardContent>
                <Grid container>
                  <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
                    <Title>Moto X3M</Title>
                  </Grid>
                  <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                    <PlayButton href="/games/moto-x3m/play">
                      Play
                    </PlayButton>
                  </Grid>
                </Grid>
                <Subtitle>
                  Moto X3M is a time trial bike racing game featuring
                  challenging obstacles&#46; There are 22 levels&#44; each of
                  which poses a new challenge and provides the opportunity to
                  perform wild stunts on your dirt bike&#46; Equip your
                  helmet&#44; rev your engine&#44; and race against the clock to
                  the finish line&#33;
                </Subtitle>
                <Title>How to Play Moto X3M</Title>
                <Subtitle>
                  As you progress through Moto X3M, there&#39;s an element of
                  trial and error as you navigate the various obstacles
                  presented by each new track&#46; However&#44; errors cost time
                  and affect your score when you finish the level&#46;
                </Subtitle>
                <Title2>Tips and tricks</Title2>
                <Subtitle>Drive fast but approach new obstacles with caution&#46; Each mistake costs time and lowers the star rating awarded at the end of a level&#46; You can perform stunts to take time off your final score&#44; so make sure you fit flips in over big jumps&#33;</Subtitle>
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
                                {row?.detail_user?.first_name}{" "}
                                {row?.detail_user?.last_name}
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
