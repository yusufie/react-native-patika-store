import React from 'react';
import patika_products from './products.json';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import ProductsCard from './src/components/ProductsCard';
import SearchBar from './src/components/SearchBar';

function App() {
  const renderItems = ({item}: any) => <ProductsCard product={item} />;
  return (
    <SafeAreaView>
      <Text style={styles.header}>PATIKASTORE</Text>
      <SearchBar />
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={patika_products}
        renderItem={renderItems}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 10,
    color: 'purple',
  },
});

export default App;
