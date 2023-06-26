import styled from 'styled-components';

export default function Reviews() {
  return (
    <Wrapper>
      <h2>About service</h2>
      <p>
        Welcome to the MovieMuse, where you can explore a vast collection of
        movie reviews, detailed information about films, and insights into
        various actors.
      </p>
      <p>
        Additionally, a dedicated feature is planned to showcase highly
        anticipated movies that everyone is eagerly awaiting. Stay tuned for the
        latest updates on upcoming blockbusters and hidden gems.
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 40px;
  font-size: 20px;
  background-color: #292d33;
  color: white;
  border-radius: 15px;

  & p:not(:last-child) {
    margin-bottom: 20px;
  }
`;