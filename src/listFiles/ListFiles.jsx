import React, { useState, useEffect } from 'react';
import './ListFiles.css';
import Table from 'react-bootstrap/Table';
import { getFiles } from '../services/services';

function createData(fileName, text, number, hex) {
    return { fileName, text, number, hex };
}

const ListFiles = () => {
    const [rows, setRows] = useState([]);

    useEffect( () => {
        async function fetchData() {
            const resp = await getFiles();
            if (resp) setRows(resp.data);
        }
        fetchData();
    }, []);

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
                {rows.map((row) => 
                    row.lines.map((line) => (
                        <tr>
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
                )}
            </tbody>
        </Table>
        </>
    );
};

  export default ListFiles;