import React from 'react';

const MyContext=React.createContext();
const DadaContext=MyContext.Provider;
const PutiConsumer=MyContext.Consumer;

export {DadaContext, PutiConsumer}