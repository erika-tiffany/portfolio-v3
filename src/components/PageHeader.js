import React, { useState } from 'react';
import { Stack } from '../components/Stack/Stack';
import { Header } from '../components/Header';

export const PageHeader = (props) => {
  const [stackAnimated, setStackAnimated] = useState(false);

  return (
    <>
      <Stack colors={ props.stackColors }
             handleChangeStackAnimated={ () => setStackAnimated(true) }/>
      <Header title={ props.title } 
              breadcrumbs={ props.breadcrumbs } 
              animate={ stackAnimated } >
        { props.children }
      </Header>
    </>
  );
}