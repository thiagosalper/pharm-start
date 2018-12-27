import React from 'react';

export const attendanceParameters = [
    {
        Header: 'Canal',
        accessor: 'canal',
        filterable: true
    },
    {
        Header: 'Cliente',
        accessor: 'cliente',
        filterable: true
    },
    {
        Header: 'Data',
        accessor: 'data',
        filterable: true
    },
    {
        Header: 'Telefone',
        accessor: 'telefone',
        filterable: true
    },
    {
        Header: 'Modificado',
        accessor: 'modificado',
        filterable: true
    },
    {
        Header: 'Status',
        accessor: 'status',
        filterable: true,
        Cell: row => (
            (
                <span>
                    <span
                        style={{
                            color:
                                row.value === 'Aguardando orçamento'
                                    ? '#ffbf00'
                                    : row.value === 'Novo'
                                        ? '#57d500'
                                        : '#ff2e00',
                            transition: 'all .3s ease'
                        }}
                    >
                        &#x25cf;
                    </span>{' '}
                    {row.value}
                </span>
            )
        )
    },
    {
        Header: 'Ações',
        accessor: 'acoes',
        sortable: false,
        filterable: false
    }
];
export const clientParameters = [
    {
      Header: "Nome",
      accessor: "nome",
      filterable: true
    },
    {
      Header: "E-mail",
      accessor: "email",
      filterable: true
    },
    {
      Header: "Última interação",
      accessor: "interacao",
      filterable: true
    },
    {
      Header: "Status",
      accessor: "status",
      filterable: false,
      width: 90,
      Cell: row => (
        <span>
          <span
            style={{
              color:
                row.value === "inativo"
                  ? "#ffbf00"
                  : row.value === "ativo"
                    ? "#57d500"
                    : "#ff2e00",
              transition: "all .3s ease"
            }}
          >
            &#x25cf;
          </span>{" "}
          {row.value === "inativo"
            ? "Inativo"
            : row.value === "ativo"
              ? "Ativo"
              : "Excluído"}
        </span>
      )
    },
    {
      Header: "Ações",
      accessor: "acoes",
      sortable: false,
      filterable: false,
      width: 60
    }
];
export const userParameters = [
    {
        Header: 'Nome',
        accessor: 'nome',
        filterable: true,
    },
    {
        Header: 'Email',
        accessor: 'email',
        filterable: true,
    },
    {
        Header: 'Telefone',
        accessor: 'telefone',
        filterable: true,
    },
    {
        Header: 'Criado',
        accessor: 'criado',
        filterable: true,
    },
    {
        Header: 'Modificado',
        accessor: 'modificado',
        filterable: true,
    },
    {
        Header: 'Ações',
        accessor: 'acoes',
        sortable: false,
        filterable: false,
    }
]
export const pedidoParameters = [
    {
        Header: 'Número',
        accessor: 'numPedido',
        filterable: true,
    },
    {
        Header: 'Status',
        accessor: 'status',
        filterable: true,
    },
    {
        Header: 'Cliente',
        accessor: 'cliente',
        filterable: true,
    },
    {
        Header: 'Código de Rastreio',
        accessor: 'codRastreio',
        filterable: true,
    },
    {
        Header: 'Data',
        accessor: 'criado',
        filterable: true,
    },
    {
        Header: 'Modificado',
        accessor: 'modificado',
        filterable: true,
        style: {
            textAlign: 'center',
        }
    },
    {
        Header: 'Ações',
        accessor: 'acoes',
        sortable: false,
        filterable: false,
    },
]