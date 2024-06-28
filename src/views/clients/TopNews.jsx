import React, { useState, useEffect } from "react";
import GridTable from "@nadavshaar/react-grid-table";
import setColumns from "./setColumns";
import Spinner from 'react-bootstrap/Spinner';
import ClientCrudService from '../../services/ClientCrudService';
import ModalNews from './ModalNews';
import { getNewsFromLocalStorage, updateReadStatusInLocalStorage } from '../utils/localStorageHelper';


const TopNews = () => {

  const nameView = "News";
  const [dataItem, setItem] = useState({ codeItem: 0, typeView: '', nameView: '' });

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [rowsLoading, setRowsLoading] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [selectedRowsIds, setSelectedRowsIds] = useState([]);

  const modalDetail = (codeItem, typeView) => {
    setShow(true);
    setItem({ codeItem, typeView, nameView });
  };

  const handleViewOnSite = (id, link) => {
    updateReadStatusInLocalStorage(id, true);
    window.open(link, '_blank');
  };

  const OnPageChange = (event) => {
    setPage(event);
  }

  const columnsGrid = (setColumns({ modalDetail, handleViewOnSite }));

  const onRowsRequest = async () => {

    let dataSearch = '&per_page=10';
    let response = getNewsFromLocalStorage();;

    if (!response) return;
    setRowsLoading(false);

    console.log('response', response);

    return {
      rows: response,
      totalRows: response.length
    };
  };

  return (
    <>
      <div className='titleView'>
        <h2>Top News</h2>
      </div>

    <div className="tableWrapper">
        {rowsLoading
          ? (<Spinner animation="border" role="status" variant="secondary" >
            <span className="visually-hidden">Loading...</span>
          </Spinner>) : (<>
            <GridTable
              columns={columnsGrid}
              rowIdField={'id'}
              onRowsRequest={onRowsRequest}
              pageSizes={[10, 20, 30]}
              pageSize={pageSize}
              onPageSizeChange={setPageSize}
              onPageChange={OnPageChange}
              page={page}
              selectedRowsIds={selectedRowsIds}
              onSelectedRowsChange={setSelectedRowsIds}
              showSearch={false}
              showColumnVisibilityManager={false}
              highlightSearch={false}
              minSearchChars={3}
            />
          </>)}
      </div>
      <ModalNews show={show} handleClose={handleClose} dataItem={dataItem}/>
    </>
  );
};

export default TopNews;