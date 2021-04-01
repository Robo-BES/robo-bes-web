import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';

import { Auth } from 'aws-amplify';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';

async function signIn(email, password) {
    try {
        return await Auth.signIn(email, password);
    } catch (error) {
        console.log('error signing in', error);
    }
}

function SignIn() {

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    let email = e.target.elements.email?.value;
    let password = e.target.elements.password?.value;

    console.log(await signIn(email, password));
};

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Welcome back. We exist to offer joyful retirement.</h1>
              </div>

              {/* Form */}
              <AmplifyAuthenticator />
              
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default SignIn;