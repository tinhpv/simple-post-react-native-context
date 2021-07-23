import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';
import BlogDetailScreen from './src/screens/BlogDetailScreen';
import CreateBlogScreen from './src/screens/CreateBlogScreen';
import EditScreen from './src/screens/EditScreen';

const AppNavigator = createStackNavigator(
  {
    Index: IndexScreen,
    Detail: BlogDetailScreen,
    Create: CreateBlogScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: 'Index',
  },
);

const App = createAppContainer(AppNavigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
