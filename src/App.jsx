import { useEffect, useMemo, useState } from 'react';

import Color from './components/Color';
import { apiGetAllCountries } from './api/api';
import Header from './components/Header';
import Main from './components/Main';
import ColorPicker from './components/ColorPicker';
import Countries from './components/Countries';
import CountryFilter from './components/CountryFilter';

const COLORS = ['#e67e22', '#2ecc71', '#bdc3c7', '#34495e', '#ecf0f1', '#FFF'];

function getDefaultColor() {
  for (let i = 0; i < 10_000; i++) {
    console.log(i);
  }

  return '#a3cb38';
}

export default function App() {
  /**
   * State para a cor de fundo
   */
  const [backgroundColor, setBackgroundColor] = useState(() =>
    getDefaultColor()
  );

  /**
   * State para o filtro de países
   */
  const [countryFilter, setCountryFilter] = useState('');

  /**
   * State para todos os países, que
   * serão preenchidos pelo backend
   */
  const [countries, setCountries] = useState([]);

  /**
   * Preenchendo países a partir do backend
   */
  useEffect(() => {
    apiGetAllCountries().then(backendCountries =>
      setCountries(backendCountries)
    );
  }, []);

  /**
   * Função para lidar com a troca
   * de cores pelo usuário
   */
  function handleColorChange(newColor) {
    setBackgroundColor(newColor);
  }

  /**
   * Função para lidar com a digitação
   * do filtro de país pelo usuário
   */
  function handleFilterChange(newFilter) {
    setCountryFilter(newFilter);
  }

  /**
   * Cálculo do filtro de países a partir
   * do que foi digitado pelo usuário
   */
  // const filteredCountries = countries.filter(({ name }) => {
  //   if (!countryFilter || countryFilter.length < 3) {
  //     return false;
  //   }

  //   for (let i = 0; i < 100; i++) {
  //     console.log(i);
  //   }

  //   return name.toLowerCase().includes(countryFilter);
  // });

  /**
   * Solução do problema da lentidão acima
   * com useMemo
   */
  const filteredCountries = useMemo(() => {
    return countries.filter(({ name }) => {
      if (!countryFilter || countryFilter.length < 3) {
        return false;
      }

      for (let i = 0; i < 100; i++) {
        console.log(i);
      }

      return name.toLowerCase().includes(countryFilter);
    });
  }, [countries, countryFilter]);

  /**
   * Montando o JSX de cores
   */
  const colorsJsx = COLORS.map(color => {
    return (
      <Color key={color} onColorClick={handleColorChange}>
        {color}
      </Color>
    );
  });

  return (
    <>
      <Header>Dev Summit III</Header>

      <Main backgroundColor={backgroundColor}>
        <ColorPicker>{colorsJsx}</ColorPicker>

        <CountryFilter onFilterChange={handleFilterChange}>
          {countryFilter}
        </CountryFilter>

        <Countries>{filteredCountries}</Countries>
      </Main>
    </>
  );
}
