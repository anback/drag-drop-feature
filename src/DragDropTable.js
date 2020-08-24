import React, { Component, useState } from "react";
import MaterialTable from "material-table";
import MTableBodyRow from 'material-table/dist/components/m-table-body-row'

const reodering = console.log
 
export default () => {
  const [dragState, setDragState] = useState(-1)
  const [dropIndex, setDropIndex] = useState(-1)

  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
          components={{
              Row: props => (
                  <MTableBodyRow {...props}
                      draggable="true"
                      onDragStart={(e) => {
                          console.log('onDragStart');
                          setDragState(props.data.tableData.id)
                      }}

                      onDragEnter={e => {
                          e.preventDefault();
                          console.log(`onDragEnter`, 'dragState', dragState, 'dropIndex', dropIndex, 'props.data.tableData.id', props.data.tableData.id )
                          if( props.data.tableData.id !== dragState) setDropIndex(props.data.tableData.id)                         
                      }}

                      onDragEnd={(e) => {
                        console.log('onDragEnd')
                        e.preventDefault();
                        if(dropIndex !== -1) reodering({dragState, dropIndex})
                        setDragState(-1)
                        setDropIndex(-1)
                      }}
                  />

              )
          }}

        columns={[
          { title: "Adı", field: "name" },
          { title: "Soyadı", field: "surname" },
          { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
          {
            title: "Doğum Yeri",
            field: "birthCity",
            lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
          },
        ]}
        data={[
          {
            name: "Mehmet",
            surname: "Baran",
            birthYear: 1987,
            birthCity: 63,
          },
          {
              name: "Mehmet 2",
              surname: "Baran",
              birthYear: 1988,
              birthCity: 63,
          },
          {
            name: "Mehmet 2",
            surname: "Baran",
            birthYear: 1989,
            birthCity: 63,
        },
        {
          name: "Mehmet 2",
          surname: "Baran",
          birthYear: 1990,
          birthCity: 63,
        }
        ]}
        title="Demo Title"
      />
    </div>
  );
}