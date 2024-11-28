// import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from './reactTesting/04.axios';
import Form from './reactTesting/Form';

const App = () => {
  const queryClient = useQueryClient();

  // Fetch posts
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => api.get('/posts').then((res) => res.data),
  });

  const mutation = useMutation({
    mutationFn: (newPost) => api.post('/posts', newPost),
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']); // Refresh posts
    },
  });

  const handleFormSubmit = (formData) => {
    mutation.mutate(formData);
  };

  if (isLoading) return <div><h1>Loading...</h1></div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>React Query with Form Example</h1>
      <Form onSubmit={handleFormSubmit} />
      {mutation.isLoading && <p>Adding post...</p>}
      {mutation.isError && <p>Error adding post: {mutation.error.message}</p>}
      {mutation.isSuccess && <p>Post added successfully!</p>}
      <h2>Posts:</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>: {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
