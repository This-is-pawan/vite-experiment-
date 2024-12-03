import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactQueryApp from './ReactQueryApp'

import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient=new QueryClient()
ReactDOM.createRoot(document.getElementById('root').render(
 <QueryClientProvider client={queryClient}>
<ReactQueryApp/>
 </QueryClientProvider>
))
