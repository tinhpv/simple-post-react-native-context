import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Context} from '../context/BlogContext';

const BlogDetailScreen = ({navigation}) => {
  const {state} = useContext(Context);
  const blog = state.find(item => {
    return item.id === navigation.getParam('blogId');
  });

  return (
    <View>
      <Text>{blog.title}</Text>
    </View>
  );
};

BlogDetailScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <View style={styles.editHeaderButton}>
        <Button
          title="Edit"
          onPress={() => {
            navigation.navigate('Edit', {
              blogId: navigation.getParam('blogId'),
            });
          }}
        />
      </View>
    ),
  };
};

const styles = StyleSheet.create({
  editHeaderButton: {
    marginHorizontal: 10,
  },
});

export default BlogDetailScreen;
