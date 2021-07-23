import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const BlogForm = ({payload, onSubmit}) => {
  const [title, setTitle] = useState(payload.title);
  const [content, setContent] = useState(payload.content);

  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Title</Text>
        <TextInput style={styles.input} onChangeText={setTitle} value={title} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Content</Text>
        <TextInput
          style={styles.input}
          onChangeText={setContent}
          value={content}
        />
      </View>
      <Button
        title="Save"
        onPress={() => {
          onSubmit(title, content);
        }}
      />
    </View>
  );
};

BlogForm.defaultProps = {
  payload: {title: '', content: ''},
};

const styles = StyleSheet.create({
  inputContainer: {
    margin: 10,
  },
  title: {
    marginHorizontal: 15,
    fontSize: 16,
  },
  input: {
    height: 55,
    marginHorizontal: 15,
    marginVertical: 3,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});

export default BlogForm;
