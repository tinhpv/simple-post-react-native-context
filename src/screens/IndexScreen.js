import React, {useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Context} from '../context/BlogContext';

const IndexScreen = ({navigation}) => {
  const {state, deleteBlog} = useContext(Context);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Detail', {blogId: item.id});
              }}>
              <View style={styles.row}>
                <Text style={styles.rowText}>{item.title}</Text>
                <View style={styles.rowButton}>
                  <Button
                    title="Delete"
                    onPress={() => {
                      deleteBlog(item.id);
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <View style={styles.addHeaderButton}>
        <Button
          title="Add"
          onPress={() => {
            navigation.navigate('Create');
          }}
        />
      </View>
    ),
  };
};

const styles = StyleSheet.create({
  addHeaderButton: {
    marginHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginVertical: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
  },
  rowText: {
    padding: 20,
    fontSize: 16,
  },
  rowButton: {
    marginHorizontal: 12,
  },
});

export default IndexScreen;
