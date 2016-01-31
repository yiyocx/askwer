import fetch from 'isomorphic-fetch';

// Headers needed for every json request made from the client side
const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

export function httpPost(url, data) {
  const body = JSON.stringify(data);

  return fetch(url, {method: 'post', headers: defaultHeaders, body: body})
    .then((response) => response.json());
};
