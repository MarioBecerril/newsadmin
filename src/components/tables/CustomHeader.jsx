import React, { useState, useEffect } from "react";
import { FaAddressBook, FaSearch, FaRegWindowClose } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "react-bootstrap/Button";

const CustomHeader = ({ tableManager, selectedRowsIds, allowWrite, modal_excel, modal_sc, setStringFilter }) => {
  const { searchApi, columnsVisibilityApi, columnsApi } = tableManager;
  const { searchText, setSearchText } = searchApi;
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  useEffect(() => {
    if (searchText.includes("range=createdAt")) {
      const start = searchText.split("|")[1];
      const end = searchText.split("|")[2];
      setDates({ startDate: new Date(start), endDate: new Date(end) });
    }
  }, [searchText]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px 20px",
        background: "#fff",
        width: "100%",
        borderBottom: "1px solid #eee"
      }}
    >
      <ul style={{ listStyleType: 'none' }} id='ListGroup'>
        <li className='styleUl'> <Button className="btn btn-success" size="sm" onClick={() => { modal_excel(0, "Create"); }} >Exportar Excel</Button> </li>
        <li className='styleUl'>
          {selectedRowsIds.length > 0 && allowWrite
            ? (<Button type="button" className="btn btn-warning" alt="Create" size="sm" onClick={() => { modal_sc(0, "Create"); }}> <FaAddressBook /> Enviar Selección </Button>)
            : ('')}
        </li>

        <li style={{ float: 'right', padding: '6px', width: '80px' }}>
          <Button
            className="btn btn-primary"
            id="btnSearch"
            size="sm"
            title="Search"
            onClick={() => {
              setSearchText(`&range=createdAt|${dates.startDate.toISOString()}|${dates.endDate.toISOString()}`);
              setStringFilter(`&range=createdAt|${dates.startDate.toISOString()}|${dates.endDate.toISOString()}`);
            }}
          >
            <FaSearch title="Search" />
          </Button>

          <Button
            className="btn btn-danger"
            size="sm"
            title="Clear"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '';
            }}
          >
            <FaRegWindowClose title="Clear" />
          </Button>

        </li>
        <li style={{ float: 'right', padding: '6px', width: '320px' }}>
          <div className="customDatePickerWidth">
            <DatePicker
              selected={dates.startDate}
              onChange={(date) => setDates({ ...dates, startDate: date })}
              selectsStart
              startDate={dates.startDate}
              endDate={dates.endDate}
              dateFormat="dd/MM/yyyy"
            />
            <DatePicker
              selected={dates.endDate}
              onChange={(date) => setDates({ ...dates, endDate: date })}
              selectsEnd
              startDate={dates.startDate}
              endDate={dates.endDate}
              minDate={dates.startDate}
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </li>

      </ul>
    </div>
  );
};

export default CustomHeader;
