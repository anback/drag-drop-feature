import React, { useState } from "react";
import MaterialTable from "material-table";
import MTableBodyRow from 'material-table/dist/components/m-table-body-row'

const doNothing = () => {}
export default (props) => {
  let {onDragEnd, onDragEnter, sortId} = props
  const [data, setData] = useState(props.data)
  console.log(data)
  onDragEnd = onDragEnd || doNothing
  onDragEnter = onDragEnter || doNothing
  const DragState = { row: -1, dropIndex: -1  };

  return (
    <MaterialTable
          {...props}
          data={data}
            options={{
                rowStyle: (data, index) => {
                    console.log('rowStyle')
                    return {backgroundColor: index % 2 === 0 ? 'grey' : 'white'}
                }
            }}
          components={{
              Row: props => (
                  <MTableBodyRow {...props}
                  draggable="true"
                  onDragStart={(e) => {DragState.index = props.data.tableData.id}}

                  onDragEnter={e => {
                      e.preventDefault();
                      if( props.data.tableData.id !== DragState.index){
                          DragState.dropIndex = props.data.tableData.id;
                          onDragEnter(DragState)
                          setData([...data.reverse().map(item => ({...item, tableData: undefined}))])
                      }                                                  
                  }}

                  onDragEnd={(e) => {
                      console.log('onDragEnd', DragState)
                      if(DragState.dropIndex !== -1) {
                        console.log('setData')
                        setData([...data.reverse().map(item => ({...item, tableData: undefined}))])
                        onDragEnd(DragState)
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