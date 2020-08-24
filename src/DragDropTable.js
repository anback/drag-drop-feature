import React, { Component } from "react";
import MaterialTable from "material-table";
import MTableBodyRow from 'material-table/components/m-table-body-row'

const reodering = () => {}
 
export default class App extends Component {
  render() {
    const DragState = { row: -1} //current row dropIndex: -1 // drag target 
    return (
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable

            components={{
                Row: props => (
                    <MTableBodyRow {...props}
                        draggable="true"
                        onDragStart={(e) => {
                            console.log('onDragStart');
                            DragState.row = props.data.tableData.id

                        }}

                        onDragEnter={e => {
                            e.preventDefault();
                            if( props.data.tableData.id !== DragState.row){
                                DragState.dropIndex = props.data.tableData.id ;

                            }                                                  
                        }}

                        onDragEnd={(e) => {
                            console.log(`onDragEnd`);
                            if(DragState.dropIndex != -1){
                                reodering({index: DragState.row, dropIndex: DragState.dropIndex})
                            }
                            DragState.row = -1;
                            DragState.dropIndex = -1;

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
                birthYear: 1987,
                birthCity: 63,
            },
          ]}
          title="Demo Title"
        />
      </div>
    );
  }
}