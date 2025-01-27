import { StyledItem } from 'shared/index';
import styled from 'styled-components';

export const BusssinessItemStyled = styled(StyledItem)`
  div {
    padding: 0 20px;
    width: 100%;
    display: flex;

    gap: 8px;
    &:nth-child(1) {
      min-width: 280px;
      align-items: center;
      span {
        width: 50px;
      }
    }
    &:nth-child(2) {
      min-width: 220px;
    }
    &:nth-child(3) {
      min-width: 200px;
    }
    &:nth-child(4) {
      min-width: 180px;
    }
    &:nth-child(5) {
      min-width: 180px;
    }
    &:nth-child(6) {
      min-width: 99px;
      justify-content: flex-end;
    }
  }
`;
