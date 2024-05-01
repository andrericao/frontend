import { useState }from 'react'
import './App.css';
import ThemeContext, { themes } from './context';
import { useMemo } from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Layout from './components/Layout';

export default function App() {  

  const [theme, setTheme] = useState(themes.light);

  const handleChangeTheme = () => {
    if (theme === themes.dark) setTheme(themes.light);
    if (theme === themes.light) setTheme(themes.dark);
  }

  const providerValue = useMemo(() => ({theme, handleChangeTheme}), [theme, handleChangeTheme])

  return (
    <ThemeContext.Provider value={providerValue} >
      <Layout>
        <Navbar />
        <Body />
      </Layout>
    </ThemeContext.Provider>
  );
}