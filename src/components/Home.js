import React from "react";

import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import {Authenticator, withAuthenticator} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);

function Home() {
  return (
    <>
      <h1>THIS IS THE HOME!!!</h1>

      <h2>My App Content</h2>
    </>
  )
}

export default Home;
/*export default withAuthenticator(Home);*/
/*<Authenticator />*/
