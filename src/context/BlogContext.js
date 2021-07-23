import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blog':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case 'delete_blog':
      const resultState = state.filter(item => {
        return item.id !== action.payload;
      });
      return resultState;
    case 'edit_blog':
      const remainingBlogList = state.filter(item => {
        item.id !== action.payload.id;
      });
      return [
        ...remainingBlogList,
        {
          id: action.payload.id,
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

const addNewBlog = dispatch => {
  return (title, content, callback) => {
    dispatch({type: 'add_blog', payload: {title, content}});
    callback();
  };
};

const deleteBlog = dispatch => {
  return id => {
    dispatch({type: 'delete_blog', payload: id});
  };
};

const editBlog = dispatch => {
  return (id, title, content, callback) => {
    dispatch({type: 'edit_blog', payload: {id, title, content}});
    callback();
  };
};

export const {Context, Provider} = createDataContext(
  blogReducer,
  {addNewBlog, deleteBlog, editBlog},
  [],
);
