import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DroppableComponent as getDroppableComponent, DraggableComponent as getDraggableComponent} from './Common';

export default ({columns, data}) => {
  const DroppableComponent = getDroppableComponent(console.log)
  return <DroppableComponent>
    <div style={styles.table}>
      {data.map((row, i) => {
        const DraggableComponent = getDraggableComponent(i.toString(), i)
        return <DraggableComponent key={i}>
          <div style={styles.row} key={i}>
            {columns.map(({field}, j) => <div key={j}>{row[field]}</div>)}
          </div>
        </DraggableComponent>
      })}
    </div>
  </DroppableComponent>
}

const styles = {
  table: {
    width: '100%'
  },
  row: {
    display: 'flex', 
    justifyContent: 'space-between',
    margin : 10
  }
}