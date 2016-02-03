import fetch from 'isomorphic-fetch';
import React        from 'react';

// Headers needed for every json request made from the client side
const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

function buildHeaders() {
  let authToken = localStorage.getItem('phoenixAuthToken');
  return Object.assign(defaultHeaders, {Authorization: authToken});
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function httpPost(url, data) {
  const body = JSON.stringify(data);

  return fetch(url, {method: 'post', headers: defaultHeaders, body: body})
    .then(checkStatus)
    .then((response) => response.json());
};

export function httpGet(url) {
  return fetch(url, {method: 'get', headers: buildHeaders()})
    .then(checkStatus)
    .then((response) => response.json());
};

export function httpDelete(url) {
  return fetch(url, {method: 'delete', headers: buildHeaders()})
    .then(checkStatus)
    .then((response) => response.json());
};

// Render the errors related to a ref of some React component
// for example a form
export function renderErrors(errors, ref) {
  if (!errors) return false;

  return errors.map((error, i) => {
    if (error[ref]) {
      return (
        <div key={i}>
          {error[ref]}
        </div>
      );
    }
  });
}

export function setDocumentTitle(title) {
  document.title = `${title} | Askwer`;
}
