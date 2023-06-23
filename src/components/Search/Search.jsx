import { useState } from 'react';
import { Form, Input, Btn, Label } from './Search.styled';

export default function Search({ updateParams }) {
  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const trimmedSearch = search.trim();

    updateParams(trimmedSearch);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="search"
        type="text"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <Btn type="submit">
        <Label>Search</Label>
      </Btn>
    </Form>
  );
}