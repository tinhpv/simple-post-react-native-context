import React, {useContext} from 'react';
import {Context} from '../context/BlogContext';
import BlogForm from '../components/BlogForm';

const CreateBlogScreen = ({navigation}) => {
  const {addNewBlog} = useContext(Context);

  return (
    <BlogForm
      onSubmit={(title, content) => {
        addNewBlog(title, content, () => {
          navigation.goBack();
        });
      }}
    />
  );
};

export default CreateBlogScreen;
