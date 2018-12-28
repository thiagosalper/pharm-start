export const BASE_URL = "https://api.pharmarocket.com.br";

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

// export const API_URL = "https://pharma-rocket-api.azurewebsites.net/api";
export const API_URL = 'http://stage.api.pharmarocket.com/api';

export const SIGNIN_USERS = `${API_URL}/login`;

//address
export const GET_UF = `${API_URL}/endereco/estados`;
export const GET_CITIES = `${API_URL}/endereco/cidades`;
export const GET_ADDRESS_BY_CEP_URL = `${API_URL}/cep`;

//attendance
export const ATTENDANCE_PAGE = `${API_URL}/chamado/ResumoChamadosFarmacia`;
export const ATTENDANCE_DETAILS = `${API_URL}/chamado/detalhesChamado`;
export const STATUS_LIST = `${API_URL}/chamado/status/all`;

//budget
export const BUDGET_PAGE = `${API_URL}/orcamento/OrcamentosChamado`;
export const BUDGET_EMAIL = `${API_URL}/Orcamento/ConfirmOrcamento`;
export const REQUEST_BUDGET = `${API_URL}/Orcamento/RequestBudget`;
export const CREATE_BUDGET = `${API_URL}/orcamento/salvarOrcamento`;
export const REMOVE_BUDGET = `${API_URL}/orcamento`;

//budget
export const GET_ORDER_PAGE = `${API_URL}/orcamento/fecharpedido`;
export const UPDATE_ADDRESS_CLIENT = `${API_URL}/endereco/enderecoCliente`;
export const POST_ORDER_PAGE = `${API_URL}/orcamento/fecharpedido`;

//pedido
export const GET_PEDIDOS = `${API_URL}/pedido`;
export const STATUS_LIST_PEDIDO = `${API_URL}/pedido/status/all`;

//pharm
export const GET_PHARM = `${API_URL}/Farmacia`;

//profile
export const USER_PROFILE = `${API_URL}/perfil`;
export const PUT_USER_PROFILE = `${API_URL}/perfil`;

//user
export const FETCH_USERS = `${API_URL}/usuario/all/vm`;
export const CREATE_AND_UPDATE_USER = `${API_URL}/usuario`;
export const DELETE_USER = `${API_URL}/usuario`;