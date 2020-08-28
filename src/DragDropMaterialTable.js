import React, { useState } from "react";
import MaterialTable from "material-table";
import MTableBodyRow from 'material-table/dist/components/m-table-body-row'
import DragDropMaterialTableExperimental from "./DragDropMaterialTableExperimental";

const doNothing = () => {}
export default (props) => {
  let {onDragEnd} = props
  const [isDragging, setIsDragging] = useState(false)
  onDragEnd = onDragEnd || console.log

  if(isDragging) return <DragDropMaterialTableExperimental {...props} />

  return (
    <MaterialTable
          {...props}
          components={{
              Row: props => (
                  <MTableBodyRow {...props} draggable="true" onDragStart={() => setIsDragging(true)}/>
              )
          }}
      />
  );
}