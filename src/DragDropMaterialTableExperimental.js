import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DroppableComponent, DraggableComponent } from './Common';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default ({columns, data}) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map(({title}, i) => <TableCell align={i > 0 ? "right" : "left"}>{title}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody component={DroppableComponent(console.log)}>
          {data.map((row, i) => (
            <TableRow component={DraggableComponent(i.toString(), i)} key={i}>
              {columns.map(({field}, i) => {
                  if(i === 0) return <TableCell component="th" scope="row">{row[field]}</TableCell>
                  return <TableCell align="right">{row[field]}</TableCell>
              })}
            </TableRow>
          ))}
          </TableBody>
      </Table>
    </TableContainer>
  );
}
