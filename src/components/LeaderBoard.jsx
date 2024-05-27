import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  //   [`&.${tableCellClasses.head}`]: {
  //     backgroundColor: theme.palette.common.black,
  //     color: theme.palette.common.white,
  //   },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 17,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "td, th": {
    border: 0,
    color: "gray",
  },
}));

function createData(
  rank,
  name,
  calmarRatio,
  overallProfit,
  avgDailyProfit,
  win,
  price,
  action
) {
  return {
    rank,
    name,
    calmarRatio,
    overallProfit,
    avgDailyProfit,
    win,
    price,
    action,
  };
}

const rows = [
  createData(
    1,
    "Selling with re entr",
    3.96,
    381845,
    319.54,
    0.65,
    "-",
    "View"
  ),
  createData(2, "strategy_name", 3.62, 268872.5, 216.31, 0.64, "500", "Buy"),
  createData(
    3,
    "Based on premium and",
    3.42,
    255425,
    208.51,
    0.64,
    "-",
    "View"
  ),
  createData(4, "strategy_name", 3.22, 370845, 303.47, 0.65, "-", "View"),
  createData(5, "strategy_name", 3.22, 370845, 303.47, 0.65, "-", "View"),
  createData(
    6,
    "Based on premium wit",
    3.01,
    135980,
    185.77,
    0.49,
    "-",
    "View"
  ),
  createData(7, "strategy_name", 2.76, 267867.5, 218.49, 0.6, "-", "View"),
  createData(
    8,
    "Wait and trade_Save",
    2.62,
    178252.5,
    161.9,
    0.63,
    "-",
    "View"
  ),
  createData(9, "iron condor", 2.44, 176420, 137.51, 0.65, "-", "View"),
  createData(10, "strategy_name", 2.04, 244555, 198.66, 0.62, "-", "View"),
];

export default function LeaderBoard() {
  const Slippage = ["0%", "0.5%", "1%"];
  return (
    <>
      <div className="my-10">
        <div className="ml-2 md:ml-28">
          <h1 className="text-2xl font-semibold mb-2">LeaderBoard</h1>
          <div className="flex gap-2">
            <a href="https://www.unfluke.in/trading">
              <HomeOutlinedIcon />
            </a>
            <p>/</p>
            <p className="text-[#808080]">LeaderBoard</p>
          </div>
        </div>

        <main
          style={{
            marginBottom: "30px",
            height: "calc(100% - 30px)",
            border: 0,
            boxShadow: "0 1.25rem 1.5625rem rgba(22,28,45,.05)",
          }}
          className="w-[90%] mx-auto bg-white rounded-xl"
        >
          <div
            className="flex flex-col md:flex-row items-center justify-between mt-10 mb-4 py-4 px-6"
            style={{ borderBottom: "1px solid rgb(236, 236, 236)" }}
          >
            <h2 className="text-2xl font-semibold">Basic Backtest</h2>

            <div>
              <Autocomplete
                className="scale-[0.8]"
                disablePortal
                id="combo-box-demo"
                options={Slippage}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Slippage" />
                )}
              />
            </div>
          </div>

          <TableContainer
            component={Paper}
            className="p-2 border-none shadow-none px-6 "
          >
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead style={{ borderBottom: "2px solid #7184AD" }}>
                <TableRow className="text-[#1f2c73]">
                  <StyledTableCell className="bg-white text-black text-[#1f2c73] font-semibold text-base">
                    Rank
                  </StyledTableCell>
                  <StyledTableCell
                    align="right"
                    className="bg-white text-black  text-[#1f2c73] font-semibold text-base "
                  >
                    Name
                  </StyledTableCell>
                  <StyledTableCell
                    align="right"
                    className="bg-white text-black text-[#1f2c73] font-semibold text-base "
                  >
                    Calmar Ratio
                  </StyledTableCell>
                  <StyledTableCell
                    align="right"
                    className="bg-white text-black text-[#1f2c73] font-semibold text-base "
                  >
                    Overall Profit
                  </StyledTableCell>
                  <StyledTableCell
                    align="right"
                    className="bg-white text-black text-[#1f2c73] font-semibold text-base "
                  >
                    Avg. Daily Profit
                  </StyledTableCell>
                  <StyledTableCell
                    align="right"
                    className="bg-white text-black text-[#1f2c73] font-semibold text-base "
                  >
                    Win %(Day)
                  </StyledTableCell>
                  <StyledTableCell
                    align="right"
                    className="bg-white text-black text-[#1f2c73] font-semibold text-base "
                  >
                    Price (Rs)
                  </StyledTableCell>
                  <StyledTableCell
                    align="right"
                    className="bg-white text-black text-[#1f2c73] font-semibold text-base "
                  >
                    Action
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.rank}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      className="text-[#7184AD]"
                    >
                      {row.rank}
                    </StyledTableCell>
                    <StyledTableCell align="right" className="text-[#7184AD]">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right" className="text-[#7184AD]">
                      <TrendingUpIcon className="text-[green] mr-2" />
                      {row.calmarRatio}
                    </StyledTableCell>
                    <StyledTableCell align="right" className="text-[#7184AD]">
                      {row.overallProfit}
                    </StyledTableCell>
                    <StyledTableCell align="right" className="text-[#7184AD]">
                      {row.avgDailyProfit}
                    </StyledTableCell>
                    <StyledTableCell align="right" className="text-[#7184AD]">
                      {row.win}
                    </StyledTableCell>
                    <StyledTableCell align="right" className="text-[#7184AD]">
                      {row.price}
                    </StyledTableCell>
                    <StyledTableCell align="right" className="text-[blue]">
                      {row.action}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </main>
      </div>
    </>
  );
}
