import React from "react";
import PropTypes from "prop-types";
import { makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import CssBaseline from "@material-ui/core/CssBaseline";
import { tableData } from "../tileData";

const useRowStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.secondary.main,
    "& > *": {
      borderBottom: "unset",
    },
  },
  container: {
    display: "flex",
    maxHeight: "85vh",
  },
  cell: {
    color: theme.palette.secondary.main,
  },
}));

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center" component="tr" scope="row">
          {row.rindex}
        </TableCell>
        <TableCell align="right">{row.total}</TableCell>
        <TableCell align="right">{row.percentage}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="additionl info">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.cell}>Side</TableCell>
                    <TableCell className={classes.cell} align="right">
                      Quantity
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.details.map((detailsRow) => (
                    <TableRow key={detailsRow.side}>
                      <TableCell component="th" scope="row">
                        {detailsRow.side}
                      </TableCell>
                      <TableCell align="right">{detailsRow.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
    details: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
      })
    ).isRequired,
    rindex: PropTypes.number.isRequired,
  }).isRequired,
};

export default function CollapsibleTable() {
  const classes = useRowStyles();
  return (
    <TableContainer className={classes.container}>
      <Table stickyHeader aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell className={classes.cell}>Category3 Index</TableCell>
            <TableCell className={classes.cell} align="right">
              Total Defects
            </TableCell>
            <TableCell className={classes.cell} align="right">
              Defects Found&nbsp;(%)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <Row key={row.rindex} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
