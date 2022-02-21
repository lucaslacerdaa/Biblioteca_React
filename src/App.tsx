import { useState } from 'react'
import { GlobalStyle } from "./style/global"

import { Header } from "./components/Header"
import { Dashboard } from "./components/Dashboard"
import { Footer } from "./components/Footer"
import { Catalog } from "./components/Catalog"

import { Provider } from 'react-redux'
import store from './store'

export function App() {
  return (
    <Provider store={store}>
      <Catalog/>
      {/* <>
        <Header/>
        <Dashboard />

        <Footer/>
        <GlobalStyle />
      </> */}
    </Provider>
  );
}