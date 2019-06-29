import React from 'react';
import { Container } from 'semantic-ui-react';
// importing helper from the 'next.js' library.

// This 'Head' thing right here is a 'component' and we can use it inside of any
// other 'react' 'component'

// If we use any other tags inside of this component, those child tags will be
// automatically moved up to the '<Head>' of our HTML document.

// We can use this '<Head>' tag not only for '<link>' tags or '<script>' tags, but we can
// use this '<Head>' tag to add other things like '<Meta>' tags for
// Search Engine Optimization (SEO) purposes.
import Head from 'next/head';
// Importing 'Header.js' file with its components
import Header from './Header';

// Where we're going to house all of our layout for all of our pages
// Recall that our functional components get called with the 'props' argument inside
// of the return statement
export default props => {
  // don't expect to need any helper functions

  // WHere 'Header.js' provides us with the '<Header>' tag
  // Next, adding 'Container' component to add constraint to sizing of components and giving us some
  // white space on each side
  return (
  // We know that the 'Layout.js' component will always be rendered with 'next.js'
  // Must move the '<link>' tag to the 'Layout.js' component

  // In order to preserve styling when navigating to different pages and to
  // other directories to grab other JavaScript files to use, we must
  // move the '<link>' code block to the 'Layout.js' file and place it under the
  // '<Head>' tag block.

  //
  <div>
    <Container>
      <Head>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </Head>

      <Header />
      {props.children}
    </Container>
  </div>
  );
};
