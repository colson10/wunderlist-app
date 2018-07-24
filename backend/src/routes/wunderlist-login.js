'use strict';

import superagent from 'superagent';
import { Router } from 'express';

const wunderlistRouter = new Router();

require('dotenv').config();

const WUNDERLIST_OAUTH_URL = 'https://www.wunderlist.com/oauth/access_token';

wunderlistRouter.get('/oauth/wunderlist', (request, response) => {
  console.log('__STEP 3.1 - RECEIVING CODE__');
  if (!request.query.code) {
    response.redirect(process.env.CLIENT_URL);
  } else {
    console.log('__THIS_IS_THE_CODE__', request.query.code);

    console.log('__STEP 3.2 - SENDING THE CODE BACK__');

    return superagent.post(WUNDERLIST_OAUTH_URL)
      .type('form')
      .send({
        code: request.query.code,
        client_id: process.env.WUNDERLIST_OAUTH_ID,
        client_secret: process.env.WUNDERLIST_OAUTH_SECRET,
        redirect_uri: `${process.env.API_URL}/oauth/wunderlist`
      })
      .then(tokenResponse => {
        console.log('__STEP 3.3 - ACCESS TOKEN__');

        if (!tokenResponse.body.access_token) {
          response.redirect(process.env.CLIENT_URL);
        }
        const accessToken = tokenResponse.body.access_token;
        console.log(accessToken)
        response.cookie('Wunderlist Token', accessToken);
        response.redirect(process.env.CLIENT_URL);
      })
      .catch(error => {
        console.log(error);
        response.redirect(process.env.CLIENT_URL + '? erro=oauth');
      });
  }
});

export default wunderlistRouter;
