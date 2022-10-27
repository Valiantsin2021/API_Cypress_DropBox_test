const { 
    authCheckBody, 
    uploadDropBoxAPIArg,
    uploadContentType,
    path,
    wrongPath,
    ContentTypeAuthHeader,
    ContentTypeHeader,
    } = require('../fixtures/constants')

let getTokenOptions = {
    url: Cypress.env('authTokenUrl'),
    headers: {
      'Content-Type': ContentTypeAuthHeader,
      'Cookie': 'locale=en; t=MHEYc5dUJHUnxofca9PH9XEQ'
    },
    body: {
      refresh_token: Cypress.env('DropBoxToken'),
      grant_type: 'refresh_token', 
      client_id: Cypress.env('appKey'), 
      client_secret: Cypress.env('appSecret')
  }
};
let checkUserOptions = {
    url: `${Cypress.env('authEndpoint')}/check/user`,
    headers: {
      'Authorization': `Bearer`,
      'Content-Type': ContentTypeHeader
    },
    body: authCheckBody
};
let checkAppOptions = {
    url: `${Cypress.env('authEndpoint')}/check/app`,
    headers: {
      'Authorization': `Basic ${Buffer.from(`${Cypress.env('appKey')}:${Cypress.env('appSecret')}`).toString('base64')}`,
      'Content-Type': ContentTypeHeader
    },
    body: authCheckBody
};
let fileUploadOptions = {
    url: `${Cypress.env('filesEndpoint')}/files/upload`,
    headers: {
      'Dropbox-API-Arg': JSON.stringify(uploadDropBoxAPIArg),
      'Content-Type': uploadContentType,
      'Authorization': `Bearer`
    },
    body: "Hello from Cypress!!!"
};
let searchUploadedFileOptions = {
    url: `${Cypress.env('authEndpoint')}/files/get_metadata`,
    headers: {
      'Content-Type': ContentTypeHeader,
      'Authorization': `Bearer`
    },
    body: JSON.stringify({
      path: path,
      include_media_info: false,
      include_deleted: false,
      include_has_explicit_shared_members: false
    })
};
let deleteFileOptions = {
    url: `${Cypress.env('authEndpoint')}/files/delete_v2`,
    headers: {
      'Content-Type': ContentTypeHeader,
      'Authorization': `Bearer`
    },
    body: JSON.stringify({
      path: path
    }),
    failOnStatusCode: false
};
let wrongPathFileUploadOptions = {
    url: `${Cypress.env('filesEndpoint')}/files/upload/1`,
    headers: {
      'Dropbox-API-Arg': JSON.stringify(uploadDropBoxAPIArg),
      'Content-Type': uploadContentType,
      'Authorization': `Bearer`
    },
    body: "If you read this - something is wrong!",
    failOnStatusCode: false
};
let wrongPathSearchFileOptions = {
    url: `${Cypress.env('authEndpoint')}/files/get_metadat`,
    headers: {
      'Content-Type': ContentTypeHeader,
      'Authorization': `Bearer`
    },
    body: JSON.stringify({
      path: path,
      include_media_info: false,
      include_deleted: false,
      include_has_explicit_shared_members: false
    }),
    failOnStatusCode: false
};
let wrongPathDeletefileOptions = {
    url: `${Cypress.env('authEndpoint')}/files/delete_v1`,
    headers: {
        'Content-Type': ContentTypeHeader,
        'Authorization': `Bearer`
    },
    body: JSON.stringify({
        path: '/text.txt'
    }),
    failOnStatusCode: false
}
let wrongBodySearchFileOptions = {
    url: `${Cypress.env('authEndpoint')}/files/get_metadata`,
    headers: {
      'Content-Type': ContentTypeHeader,
      'Authorization': `Bearer`
    },
    body: JSON.stringify({
      path: wrongPath,
      include_media_info: false,
      include_deleted: false,
      include_has_explicit_shared_members: false
    }),
    failOnStatusCode: false
};
let wrongBodyDeleteFileOptions = {
    url: `${Cypress.env('authEndpoint')}/files/delete_v2`,
    headers: {
      'Content-Type': ContentTypeHeader,
      'Authorization': `Bearer`
    },
    body: JSON.stringify({
      path: wrongPath
    }),
    failOnStatusCode: false
}
module.exports = {
  getTokenOptions,
  checkUserOptions,
  checkAppOptions,
  fileUploadOptions,
  searchUploadedFileOptions,
  deleteFileOptions,
  wrongPathFileUploadOptions,
  wrongPathSearchFileOptions,
  wrongPathDeletefileOptions,
  wrongBodyDeleteFileOptions,
  wrongBodySearchFileOptions
}