import React, { useState } from "react";
import MaterialTable from "material-table";
import MTableBodyRow from 'material-table/dist/components/m-table-body-row'

const doNothing = () => {}
export default (props) => {
  let {onDragEnd} = props
  const [data, setData] = useState(props.data)
  onDragEnd = onDragEnd || doNothing
  const DragState = { index: -1, dropIndex: -1  };

  return (
    <MaterialTable
          {...props}
          data={data}
          components={{
              Row: props => (
                  <MTableBodyRow {...props}
                    draggable="true"
                    onDragStart={(e) => {DragState.index = props.data.tableData.id}}
                    onDragEnter={e => {
                        e.preventDefault();
                        if( props.data.tableData.id !== DragState.index){
                            DragState.dropIndex = props.data.tableData.id;
                        }                                                  
                    }}

                    onDragEnd={(e) => {
                        e.preventDefault();
                        if(DragState.dropIndex !== -1) {
                            const newData = data.reduce((a,b, i) => {
                                if(i === DragState.index) {a.push({...data[DragState.dropIndex], tableData: undefined}); return a}
                                if(i === DragState.dropIndex) {a.push({...data[DragState.index], tableData: undefined}); return a}
                                a.push({...b, tableData: undefined})
                                return a
                            }, [])
                            setData(newData)
                            onDragEnd(newData)
                        }
                        DragState.index = -1;
                        DragState.dropIndex = -1;
                    }}
                  />
              )
          }}
      />
  );
}