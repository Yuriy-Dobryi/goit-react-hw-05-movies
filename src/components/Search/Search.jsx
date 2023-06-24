import { Form, Input, Btn, SearchIcon } from './Search.styled';

export default function Search({ updateParams }) {

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const search = form.elements.search.value;

    updateParams(search.trim());
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="search"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <Btn type="submit">
        <SearchIcon />
      </Btn>
    </Form>
  );
}