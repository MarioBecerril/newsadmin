import React from "react";
import styles from "../utils/gridStyles";
import dateFormat from 'dateformat';

const setColumns = ({ modalDetail}) => {

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
            id: "2",
            field: "title",
            label: "title",
            sortable: false,
            resizable: true,
            width: "300px",
            cellRenderer: ({
                data,
            }) => (data.title.rendered)
        },
        {
            id: "5",
            label: 'image',
            field: "images.image",
            width: "200px",
            sortable: false,
            cellRenderer: ({
                tableManager,
                value,
                data,
                column,
                colIndex,
                rowIndex
            }) => (<img src={data.jetpack_featured_media_url} style={{ width: '200px', padding: '10px', }}/> )
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
            }) => (dateFormat(data.date, "dd/mm/yyyy", true))
        },
        {
            id: "8",
            label: 'ModifiedAt',
            sortable: false,
            cellRenderer: ({
                data,
            }) => (dateFormat(data.modified, "dd/mm/yyyy", true))
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
                            title="Edit"
                            style={styles.styleButton.editButton}
                            onClick={(e) => {
                                e.stopPropagation();
                                modalDetail(data.code, "Edit");
                            }}
                        >
                            {styles.EDIT_SVG}
                        </button> {" - "}
                    <button
                        title="View"
                        style={styles.styleButton.viewButton}
                        onClick={(e) => {
                            e.stopPropagation();
                            modalDetail(data.code, "View");
                        }}
                    >
                        {styles.VIEW_SVG}
                    </button>
                </div>
            )
        }
    ];
};

export default setColumns;
