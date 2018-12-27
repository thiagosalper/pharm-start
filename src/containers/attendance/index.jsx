import React from 'react';

import './style.css';
import * as config from '../../utils/reactTable';
import TableRocket from '../../components/TableRocket';

const mock = [
    {
        
    }
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
                Attendance
                <TableRocket
                    columns={config.attendanceParameters}
                    tableData={this.state.list}
                />
            </div>
        );
    }
}

export default Attendance;