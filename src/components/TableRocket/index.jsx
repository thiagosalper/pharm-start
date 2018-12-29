import React from 'react';
import ReactTable from "react-table";
import PropTypes from 'prop-types';
import "react-table/react-table.css";

function TableRocket(props) {
    const {
        data,
        columns,
        previousText,
        nextText,
        loadingText,
        noDataText,
        pageText,
        ofText,
        rowsText,
        showPaginationBottom,
        defaultPageSize,
        className
    } = props;

    console.log('data', props);

    return (
        <React.Fragment>
            <ReactTable  
                data={data} 
                columns={columns} 
                previousText={previousText} 
                nextText={nextText} 
                loadingText={loadingText} 
                noDataText={noDataText} 
                pageText={pageText} 
                ofText={ofText} 
                rowsText={rowsText} 
                showPaginationBottom={showPaginationBottom} 
                defaultPageSize={defaultPageSize}
                className={className}
            />
        </React.Fragment>
    );
};

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
    className: "-striped -highlight"
};

export default TableRocket;
