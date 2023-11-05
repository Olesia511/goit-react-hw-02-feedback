import styled from 'styled-components';

export const StatisticsNumber = styled.div`
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
