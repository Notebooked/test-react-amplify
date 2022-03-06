import React from "react";

import './css/home.css';

import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import {Authenticator, withAuthenticator} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);

function Home() {
  return (
    <>
      <div className="section">
        <h1 className="title">485 BSA</h1>
      </div>
    </>
  )
}

export default Home;
