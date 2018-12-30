export const BASE_URL = "https://api.pharmarocket.com.br";
// export const BASE_URL = 'http://stage.api.pharmarocket.com/api';
// export const BASE_URL = "http://localhost:61596/api";

export const HEADER_REQUEST = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*"
  }
};

export const HEADER_REQUEST_FORM = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*"
  }
};

export const API_HEADER = {
  headers: {
    key: "123"
  }
};

//API-------------------------------------------------------------------------------
//address
export const GET_UF = `${BASE_URL}/endereco/estados`;
export const GET_CITIES = `${BASE_URL}/endereco/cidades`;
export const GET_ADDRESS_BY_CEP_URL = `${BASE_URL}/cep`;

//attendance
export const ATTENDANCE_PAGE = `${BASE_URL}/chamado/ResumoChamadosFarmacia`;
export const ATTENDANCE_DETAILS = `${BASE_URL}/chamado/detalhesChamado`;
export const STATUS_LIST = `${BASE_URL}/chamado/status/all`;

//budget
export const BUDGET_PAGE = `${BASE_URL}/orcamento/OrcamentosChamado`;
export const BUDGET_EMAIL = `${BASE_URL}/Orcamento/ConfirmOrcamento`;
export const REQUEST_BUDGET = `${BASE_URL}/Orcamento/RequestBudget`;
export const CREATE_BUDGET = `${BASE_URL}/orcamento/salvarOrcamento`;
export const REMOVE_BUDGET = `${BASE_URL}/orcamento`;

//budget
export const GET_ORDER_PAGE = `${BASE_URL}/orcamento/fecharpedido`;
export const UPDATE_ADDRESS_CLIENT = `${BASE_URL}/endereco/enderecoCliente`;
export const POST_ORDER_PAGE = `${BASE_URL}/orcamento/fecharpedido`;

//pedido
export const GET_PEDIDOS = `${BASE_URL}/pedido`;
export const STATUS_LIST_PEDIDO = `${BASE_URL}/pedido/status/all`;

//pharm
export const GET_PHARM = `${BASE_URL}/Farmacia`;

//profile
export const USER_PROFILE = `${BASE_URL}/perfil`;
export const PUT_USER_PROFILE = `${BASE_URL}/perfil`;

//user
export const FETCH_USERS = `${BASE_URL}/usuario/all/vm`;
export const CREATE_AND_UPDATE_USER = `${BASE_URL}/usuario`;
export const DELETE_USER = `${BASE_URL}/usuario`;
//----------------------------------------------------------------------------------
