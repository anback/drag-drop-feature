import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import DragDropMaterialTable from './DragDropTable'

class App extends Component {
  render() {
    return (
      <div style={{ maxWidth: "100%" }}>
        <DragDropMaterialTable
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
              name: "Mehmet",
              surname: "Baran",
              birthYear: 1988,
              birthCity: 63,
            },
            {
              name: "Mehmet",
              surname: "Baran",
              birthYear: 1989,
              birthCity: 63,
            }
          ]}
          title="Demo Title"
        />
      </div>
    );
  }
}

export default App;
