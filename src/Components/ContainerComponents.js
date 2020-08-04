import React,{ useState } from 'react';     
import * as Styles from './ContainerComponents.styled';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { render } from '@testing-library/react';

export const ContainerComponents = (props) =>
{

    const [columnDefs, setcolumnDefs] = useState({
        columnDefs: [
            { headerName: "Make", field: "make" },
            { headerName: "Model", field: "model" },
            { headerName: "Price", field: "price" }]
        
      });

      const [rowData, setrowData] = useState({
        rowData: [
            { make: "Toyota", model: "Celica", price: 35000 },
            { make: "Ford", model: "Mondeo", price: 32000 },
            { make: "Porsche", model: "Boxter", price: 72000 }]
      });

    const gridcoldefs =  () =>  {
        setcolumnDefs(columnDefs);
      };

      const setrowDatades =  () =>  {
        setrowData(rowData);
      };

render()
        return (
      <div className="ag-theme-alpine" style={ {height: '200px', width: '600px'} }>
           <Styles.StyledHeading>Sample Product App</Styles.StyledHeading>
<>
        <input ></input> 
        <AgGridReact
            columnDefs={gridcoldefs}
            rowData={setrowDatades}>
        </AgGridReact>
</>
        </div>
        )

};

export default  ContainerComponents;