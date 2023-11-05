import styled from 'styled-components';

export const Button = styled.button`
  font-weight: 700;
  font-size: 20px;
  border: none;
  background-color: ${p => p.theme.colors.beige};
  color: ${p => p.theme.colors.burgundy};
  border-radius: 16px;
  padding-top: ${props => props.theme.spacing(3)};
  padding-bottom: ${props => props.theme.spacing(3)};
  padding-left: ${props => props.theme.spacing(8)};
  padding-right: ${props => props.theme.spacing(8)};

  box-shadow: 6px 12px 21px -6px rgba(0, 0, 0, 0.38);
  -webkit-box-shadow: 6px 12px 21px -6px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 6px 12px 21px -6px rgba(0, 0, 0, 0.38);
  transition: background-color 400ms linear, color 400ms linear;

  &:hover {
    background-color: ${p => p.theme.colors.burgundy};
    color: ${p => p.theme.colors.beige};
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
