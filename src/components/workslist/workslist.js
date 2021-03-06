import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  }
}));

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const Works = ({ works, headYear, headWork }) => {
  const classes = useStyles();

  return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow backgroundcolor="green">
              <StyledTableCell align="center">{headYear}</StyledTableCell>
              <StyledTableCell>{headWork}</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {works.map(({node: item}) => (
              <StyledTableRow key={item.work}>
                <StyledTableCell component="th" scope="row" align="center">
                  {item.period}
                </StyledTableCell>
                <StyledTableCell align="left">{item.work}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
  );
};
export default Works;