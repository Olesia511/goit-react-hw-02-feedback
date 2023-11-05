import styled from 'styled-components';

export const BasicContainer = styled.div`
  height: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  text-align: center;
  padding: ${props => props.theme.spacing(4)};
  gap: ${props => props.theme.spacing(4)};
  font-weight: 700;
  background-color: ${p => p.theme.colors.purple};
  color: ${p => p.theme.colors.beige};
`;

export const Title = styled.h2`
  width: 100vw;
  margin-bottom: ${props => props.theme.spacing(8)};
  text-transform: uppercase;
  text-shadow: 4px 4px 2px rgba(214, 208, 208, 0.2);
`;

export const Section = styled.section`
  margin-bottom: ${props => props.theme.spacing(8)};
`;
export const Notification = styled.h3`
  margin-bottom: 20px;
`;
