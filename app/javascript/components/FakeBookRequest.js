import axios from 'axios';

export const getCSRFTokenFromPage = () => {
  const paramElement = document.getElementsByName('csrf-param')[0];
  const tokenElement = document.getElementsByName('csrf-token')[0];
  const token = tokenElement ? tokenElement.content : null;
  const param = paramElement ? paramElement.content : null;
  return { token, param };
};

const fakebookRequest = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  transformRequest: [
    function(data) {
      let { token, param } = getCSRFTokenFromPage();
      if (token && param) {
        data = Object.assign({}, data, { [param]: token });
      }
      return JSON.stringify(data);
    },
  ],
});

export const fakebookRequest2 = axios.create({
  headers: {
    Accept: 'text/html',
    'Content-Type': 'text/html',
  },
  transformRequest: [
    function(data) {
      let { token, param } = getCSRFTokenFromPage();
      if (token && param) {
        data = Object.assign({}, data, { [param]: token });
      }
      return JSON.stringify(data);
    },
  ],
});

export default fakebookRequest;
