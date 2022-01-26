import React, { useState, useEffect } from 'react'
import './ListFiles.css'
import Table from 'react-bootstrap/Table'
import { getListFiles, getDataFiles } from '../services/services'
import Form from 'react-bootstrap/Form'

const ListFiles = () => {
  const [rows, setRows] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchListFiles();
    fetchDataFiles();
  }, [])

  async function fetchListFiles () {
    const resp = await getListFiles();
    if (resp) setFileNames(resp.data);
  }
  async function fetchDataFiles (fileName) {
    setLoading(true);
    const resp = await getDataFiles(fileName);
    if (resp) setRows(resp.data);
    setLoading(false);
  }

  const handleSelectChange = (eventSelect) => {
    fetchDataFiles(eventSelect.target.value);
  }

  return (
    <>
      <Form.Select className="select-file" aria-label="File names" onChange={handleSelectChange}>
        <option value="">Todos</option>
        {fileNames.map((fileName, idx) => (
          <option key={idx} value={fileName}>{fileName}</option>
        ))}
      </Form.Select>
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

export default ListFiles
