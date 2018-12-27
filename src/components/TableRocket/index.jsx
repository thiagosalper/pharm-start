import React from 'react';
import ReactTable from "react-table";
import PropTypes from 'prop-types';

export default (props) => (
    <React.Fragment>
        <ReactTable {...props} />
    </React.Fragment>
)

TableRocket.propTypes = {
    data: PropTypes.array,
    filterable: PropTypes.bool,
    previousText: PropTypes.string,
    nextText: PropTypes.string,
    loadingText: PropTypes.string,
    noDataText: PropTypes.string,
    pageText: PropTypes.string,
    ofText: PropTypes.string,
    rowsText: PropTypes.string,
    columns: PropTypes.array,
    showPaginationBottom: PropTypes.bool,
    defaultPageSize: PropTypes.number,
    showPaginationBottom: PropTypes.bool,
    className: PropTypes.string,
};

TableRocket.defaultProps = {
    filterable: true,
    previousText: 'Anterior',
    nextText: 'Próximo',
    loadingText: 'Aguarde...',
    noDataText: 'Nenhum dado encontrado',
    pageText: 'Página',
    ofText: 'de',
    rowsText: 'linhas',
    defaultPageSize: 5,
    showPaginationBottom: true,
    className="-striped -highlight"
};
