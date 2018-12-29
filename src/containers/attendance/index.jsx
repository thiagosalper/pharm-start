import React from 'react';

import './style.css';
import * as config from '../../utils/reactTable';
import TableRocket from '../../components/TableRocket';

const mock = [
    {
        id: 1,
        canal: 'Manipulaê',
        cliente: 'Mock',
        data: "15/12/2018 - 01:41:01",
        detalhes: '',
        modificado: '',
        status: 'Novo',
        telefone: '9999-2222'
    },    
    {
        id: 2,
        canal: 'Manipulaê',
        cliente: 'Mock',
        data: "15/12/2018 - 01:41:01",
        detalhes: '',
        modificado: '',
        status: 'Novo',
        telefone: '9999-2222'
    },
    {
        id: 3,
        canal: '2',
        cliente: 'Mock',
        data: "15/12/2018 - 01:41:01",
        detalhes: '',
        modificado: '',
        status: 'Novo',
        telefone: '9999-2222'
    },    
    {
        id: 4,
        canal: 'Manipulaê',
        cliente: 'Mock',
        data: "15/12/2018 - 01:41:01",
        detalhes: '',
        modificado: '',
        status: 'Novo',
        telefone: '9999-2222'
    },    
    {
        id: 5,
        canal: 'Manipulaê',
        cliente: 'Mock',
        data: "15/12/2018 - 01:41:01",
        detalhes: '',
        modificado: '',
        status: 'Novo',
        telefone: '9999-2222'
    },    
    {
        id: 6,
        canal: 'Manipulaê',
        cliente: 'Mock',
        data: "15/12/2018 - 01:41:01",
        detalhes: '',
        modificado: '',
        status: 'Novo',
        telefone: '9999-2222'
    },    
    {
        id: 7,
        canal: 'Manipulaê',
        cliente: 'Mock',
        data: "15/12/2018 - 01:41:01",
        detalhes: '',
        modificado: '',
        status: 'Novo',
        telefone: '9999-2222'
    },    
    {
        id: 8,
        canal: 'Manipulaê',
        cliente: 'Mock',
        data: "15/12/2018 - 01:41:01",
        detalhes: '',
        modificado: '',
        status: 'Novo',
        telefone: '9999-2222'
    },
]

class Attendance extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    populateTable = (data) => {
        data.map((obj, key) => {
            return {
                ...obj,
                id: key,
                acoes: (
                    <div className="actions-right">
                    </div>
                )
            }
        })
    }

    render() {
        return (
            <div>
                <TableRocket
                    columns={config.attendanceParameters}
                    data={mock}
                />
            </div>
        );
    }
}

export default Attendance;