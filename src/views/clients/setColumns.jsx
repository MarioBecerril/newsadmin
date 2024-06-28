import React from "react";
import styles from "../utils/gridStyles";
import { Col, Card, Button, CardGroup, Badge } from 'react-bootstrap';
import dateFormat from 'dateformat';
import { IoEyeOutline } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";

const setColumns = ({ modalDetail, handleViewOnSite}) => {

    return [
        {
            id: "checkbox",
            visible: true,
            pinned: true,
            width: "54px",
        },
        {
            id: "id",
            field: "id",
            label: "id",
            width: '100px',
            sortable: false,
            resizable: true,
        },
        {
            id: "1",
            field: "title",
            label: "title",
            sortable: false,
            resizable: true,
            width: "400px",
        },
        {
            id: "2",
            label: 'image',
            field: "image",
            width: "200px",
            sortable: false,
            cellRenderer: ({
                tableManager,
                value,
                data,
                column,
                colIndex,
                rowIndex
            }) => (<img src={data.image} style={{ width: '200px', padding: '10px', }}/> )
        },
        {
            id: "6",
            field: "status",
            label: "status",
            width: '100px',
            sortable: false,
            resizable: true,
        },
        {
            id: "7",
            label: 'CreatedAt',
            sortable: false,
            cellRenderer: ({
                data,
            }) => (dateFormat(data.createdAt, "dd/mm/yyyy", true))
        },
        {
            id: "8",
            label: 'ModifiedAt',
            sortable: false,
            cellRenderer: ({
                data,
            }) => (dateFormat(data.modifiedAt, "dd/mm/yyyy", true))
        },
        {
            id: "9",
            field: "readStatus",
            label: "StatusView",
            width: '150px',
            sortable: false,
            resizable: true,
            cellRenderer: ({
                data,
            }) => (data.readStatus ? (
                <Badge bg="success" className="ms-2">Leído</Badge>
              ) : (
                <Badge bg="danger" className="ms-2">Por leer</Badge>
              ))            
        },
        {
            id: "buttons",
            label: "Action",
            width: '110px',
            pinned: true,
            sortable: false,
            resizable: false,
            cellRenderer: ({
                data,
            }) => (
                <div style={styles.styleButton.buttonsCellContainer}>
                    
                    <button
                            title="Preview"
                            style={styles.styleButton.editButton}
                            onClick={(e) => {
                                e.stopPropagation();
                                modalDetail(data.id, "View");
                            }}
                        >
                            <IoEyeOutline />
                        </button> {" - "}
                    <button
                        title="View OnSite"
                        style={styles.styleButton.editButton}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleViewOnSite(data.id, data.link);
                            window.location.href = '/topnews';
                        }}
                    >
                        <TfiWorld />
                    </button>
                </div>
            )
        }
    ];
};

export default setColumns;
