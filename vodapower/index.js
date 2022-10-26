import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';

// 👇️ IMPORTANT: use correct ID of your root element
// this is the ID of the div in your index.html file
const container = document.getElementById('app');
const root = hydrateRoot(container,<App tab="home"/>);

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );


// import { hydrateRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = hydrateRoot(container, <App tab="home" />);