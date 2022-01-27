import React, { useState, useEffect } from 'react'
import './SelectFile.css'
import { getListFiles } from '../services/services'
import Form from 'react-bootstrap/Form'
import { connect } from "react-redux";
import { setFilterName } from "../redux/actions";

const SelectFile = ({ setFilterName }) => {
    
  const [fileNames, setFileNames] = useState([]);

  useEffect(() => {
    fetchListFiles();
  }, [])

  async function fetchListFiles () {
    const resp = await getListFiles();
    if (resp) setFileNames(resp.data);
  }

  const handleSelectChange = (value) => {
    setFilterName(value);
  }

  return (
      <Form.Select className="select-file" aria-label="File names" onChange={(e) => handleSelectChange(e.target.value)}>
        <option value="">Todos</option>
        {fileNames.map((fileName, idx) => (
          <option key={idx} value={fileName}>{fileName}</option>
        ))}
      </Form.Select>
  )
}

export default connect(
    null,
    { setFilterName }
  )(SelectFile);