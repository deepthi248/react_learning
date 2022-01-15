import React from 'react'
/*
step 1 : Create user Context 
step 2: provide it to the children components 
step 3 : consume the value provided inside the children component 
*/

const UserContext = React.createContext('Hello World!!');
const Provider = UserContext.Provider;
const Consumer = UserContext.Consumer;

export { UserContext, Provider, Consumer }