// React
import React, { useState, useCallback, useEffect } from 'react';
import DataTableComponent from 'react-data-table-component';
import { Col, Row } from 'reactstrap';

// Components
import { ModalDelete } from '../modal-delete';

interface Action {
  cpf_cnpj: number;
  label: string;
  name: string;
  icon: string;
  classNameColorIcon: string;
  onPress?: (cellProps) => void;
}

interface dataTableIProps {
  data: object[];
  title: string;
  columns: object[];
  loading: boolean;
  actions: Action[];
  handleDelete?: (cpf_cnpj: any) => void;
  canSearch: boolean;
  keysSearch?: string[];
}

export const DataTable = ({
  data,
  title,
  columns,
  loading,
  actions = [],
  handleDelete,
  canSearch = true,
  keysSearch = ['name'],
  ...rest
}: dataTableIProps) => {
  const [isHover, setIsHover] = useState(0);
  const [registerId, setRegisterId] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [modal_delete, setModal_delete] = useState(false);

  const toggleModal = useCallback(
    (cpf_cnpj: string) => {
      setRegisterId(cpf_cnpj);
      setModal_delete(!modal_delete);
    },
    [modal_delete],
  );

  const createColumnsWithActionsData = useCallback(
    (cellProps) => {
      let columns = (actions || []).map((item) => {
        return (
          <li
            key={item.cpf_cnpj}
            title={item.label}
            onClick={() => {
              item.onPress(cellProps);
            }}
          >
            <i
              className={`${item.icon} fs-20 text-${item.classNameColorIcon}`}
            ></i>
          </li>
        );
      });

      return columns;
    },
    [actions, toggleModal],
  );

  const normalizeItem = (item, event) => {
    return item
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s]|_/g, '')
      .toLowerCase()
      .trim()
      .includes(
        event
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[^\w\s]|_/g, '')
          .trim(),
      );
  };

  const handleSearchLocal = (event) => {
    if (event === null) {
      setFilteredData(null);
      return;
    }

    let newData = [];

    (keysSearch || []).map((key) => {
      let newArr = data.filter((item) => {
        if (item[key]) {
          return normalizeItem(item[key], event);
        }
      });
      newData = newData.concat(
        newArr.filter((item) => newData.indexOf(item) < 0),
      );
    });

    setFilteredData(newData);
  };

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    <>
      {canSearch ? (
        <div style={{ marginTop: 15, marginBottom: 15 }}>
          <Row className="g-3 ms-2">
            <Col xl={4} lg={4} md={4} sm={8} xs={8} className="pe-5">
              <div className="search-box">
                <input
                  type="text"
                  id="search"
                  className="form-control search /"
                  placeholder="Pesquisar..."
                  onChange={(e) => handleSearchLocal(e.target.value)}
                />
                <i className="ri-search-line search-icon"></i>
              </div>
            </Col>
          </Row>
        </div>
      ) : null}

      <DataTableComponent
        {...rest}
        pagination
        onRowMouseEnter={(row: any) => {
          setIsHover(row.cpf_cnpj ? row.cpf_cnpj : row.hashid);
        }}
        onRowMouseLeave={() => {
          setIsHover(0);
        }}
        data={filteredData || data}
        columns={[
          ...columns,
          {
            name: <span className="font-weight-bold fs-13"> </span>,
            sortable: false,
            style: {
              justifyContent: 'end',
            },
            cell: (cellProps) => {
              return (
                <ul
                  className="list-inline hstack gap-2 mb-0 "
                  style={{
                    display:
                      isHover === (cellProps.cpf_cnpj || cellProps.hashid)
                        ? 'flex'
                        : 'none',
                    cursor: 'pointer',
                  }}
                >
                  {createColumnsWithActionsData(cellProps)}
                  {handleDelete && (
                    <li
                      title="Deletar"
                      onClick={() => {
                        toggleModal(cellProps.cpf_cnpj);
                      }}
                    >
                      <i className={`las la-trash fs-20 text-danger`}></i>
                    </li>
                  )}
                </ul>
              );
            },
          },
        ]}
        paginationComponentOptions={{
          rowsPerPageText: 'Linhas por página:',
          rangeSeparatorText: 'de',
          selectAllRowsItem: true,
          selectAllRowsItemText: 'Todos',
        }}
      />

      <ModalDelete
        isOpen={modal_delete}
        handleDelete={() => {
          handleDelete(registerId);
          setModal_delete(!modal_delete);
        }}
        goBack={() => setModal_delete(!modal_delete)}
      />
    </>
  );
};
