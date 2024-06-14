import React from 'react';
import {SafeAreaView, TextInput} from 'react-native';

import styles from './SearchBar.style';

const SearchBar = () => {
  return <TextInput placeholder="Search..." style={styles.searchArea} />;
};

export default SearchBar;
