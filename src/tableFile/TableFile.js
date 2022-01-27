import React, { useState, useEffect } from 'react'
import './TableFile.css'
import Table from 'react-bootstrap/Table'
import { getDataFiles } from '../services/services'
import { connect } from "react-redux";

const TableFile = ({ filterName }) => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDataFiles(filterName);
  }, [filterName])

 
  async function fetchDataFiles (fileName) {
    setLoading(true);
    const resp = await getDataFiles(fileName);
    if (resp) setRows(resp.data);
    setLoading(false);
  }

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          { rows.length > 0 && !loading ? rows.map((row) =>
            row.lines.map((line, idx) => (
              <tr key={idx}>
                <td>
                  {row.file}
                </td>
                <td>
                  {line.text}
                </td>
                <td>
                  {line.number}
                </td>
                <td>
                  {line.hex}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className='center' colSpan={4}>{loading ? 'Loading' : 'No Data'}</td>
            </tr>)
          }
        </tbody>
      </Table>
    </>
  )
}

const mapStateToProps = state => {
    const { filterName } = state;
    return { filterName };
};
export default connect(mapStateToProps)(TableFile);