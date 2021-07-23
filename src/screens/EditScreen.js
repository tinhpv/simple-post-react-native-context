import React, {useContext} from 'react';
import {Context} from '../context/BlogContext';
import BlogForm from '../components/BlogForm';

const EditScreen = ({navigation}) => {
  const {state, editBlog} = useContext(Context);

  const blogToEdit = state.find(item => {
    return item.id === navigation.getParam('blogId');
  });

  return (
    <BlogForm
      payload={{title: blogToEdit.title, content: blogToEdit.content}}
      onSubmit={(title, content) => {
        editBlog(blogToEdit.id, title, content, () => {
          navigation.goBack();
        });
      }}
    />
  );
};

export default EditScreen;
