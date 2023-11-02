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
  padding: ${props => props.theme.spacing(8)};
  text-transform: uppercase;
  text-shadow: 4px 4px 2px rgba(214, 208, 208, 0.2);
`;

export const ContainerBtn = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing(8)};
`;

export const Button = styled.button`
  font-weight: 700;
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

  & :hover {
    background-color: ${p => p.theme.colors.burgundy};
    color: ${p => p.theme.colors.beige};
  }
`;

export const StatisticsTitle = styled.h2`
  width: 100vw;
  padding: ${props => props.theme.spacing(8)};
  text-transform: uppercase;
  text-shadow: 4px 4px 2px rgba(214, 208, 208, 0.2);
`;

export const StatisticsContainer = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing(8)};
  width: 100vw;
  padding: ${props => props.theme.spacing(8)};
  background-color: ${p => p.theme.colors.beige};
  color: ${p => p.theme.colors.burgundy};
  justify-content: center;
  gap: ${props => props.theme.spacing(20)};
  margin-bottom: ${props => props.theme.spacing(8)};
`;

export const TotalFeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(6)};
`;
