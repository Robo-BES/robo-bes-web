import React from 'react';

import Header from '../partials/Header';

import { AmplifyAuthenticator, AmplifySignUp } from '@aws-amplify/ui-react';

function SignIn() {

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
                <AmplifyAuthenticator>
                    <AmplifySignUp headerText="Sign Up Header"
                                   formFields={[{ type: 'username', label: 'Email', placeholder: 'Email', hint: 'Enter Your Email', required: true }, { type: 'name', label: 'Name', placeholder: 'Your Name', hint: 'Enter Your Name', required: true }, { type: 'password', label: 'Password', placeholder: 'Enter Your Password', hint: 'Password', required: true }]}
                                   slot="sign-up" />
                </AmplifyAuthenticator>
              
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default SignIn;
