import React, { useEffect } from "react"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"
import { Button, Container } from "@mui/material"
import { Title2 } from "../styles/index.module"
import { styled } from "@mui/material/styles"
import { getScoreboard } from "../src/store/actions/scoreboardActions"
import { useDispatch, useSelector } from "react-redux"
import withAuth from "../src/withAuth"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}))

const columns = [
  {
    id: "gameId",
    label: "ID Game",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "score",
    label: "Score",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
]

function Scoreboard() {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const rows = useSelector((state) => state.scoreboardReducer.scoreboard)
  const dispatch = useDispatch()
  useEffect(() => {
    fetchScoreboard()
  }, [])
  const fetchScoreboard = async () => {
    await dispatch(getScoreboard())
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Container>
      <Title2>Scoreboard</Title2>
      <Paper sx={{ width: "80vh", overflow: "hidden", margin: "auto" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <StyledTableRow>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {rows.map((item, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>{item.gameId}</TableCell>
                    <TableCell>{item.score}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  )
}
export default withAuth(Scoreboard)
