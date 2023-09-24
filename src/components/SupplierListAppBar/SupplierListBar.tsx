import React, { useState } from 'react';
import { Appbar, Searchbar } from 'react-native-paper';

const SupplierListAppBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const onChangeSearch = (query: string) => setSearchQuery(query);

  const onPressMagnify = () =>
    showSearch ? setShowSearch(false) : setShowSearch(true);

  return (
    <>
      <Appbar.Header style={{ backgroundColor: '#4A43EC' }}>
        <Appbar.BackAction color="white" onPress={() => {}} />
        <Appbar.Content
          title="Supplier List"
          titleStyle={{ fontWeight: 'bold' }}
          color="white"
        />
        <Appbar.Action icon="magnify" color="white" onPress={onPressMagnify} />
        <Appbar.Action icon="sort" color="white" onPress={() => {}} />
        <Appbar.Action icon="dots-vertical" color="white" onPress={() => {}} />
      </Appbar.Header>
      {showSearch && (
        <Searchbar
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{
            margin: 5,
            color: 'white',
            backgroundColor: '#4A43EC',
          }}
          iconColor="white"
          inputStyle={{ color: 'white' }}
        />
      )}
    </>
  );
};

export default SupplierListAppBar;
