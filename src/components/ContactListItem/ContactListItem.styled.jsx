import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #333;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.16;
`;

export const Name = styled.span`
  margin-right: 10px;
  color: #333;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.16;
`;

export const Number = styled.span`
  color: #797c7c;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.16;
`;

export const Button = styled.button`
  width: 60px;
  padding: 3px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;

  overflow: hidden;
  color: #333;
  background-color: rgb(227, 227, 227);
  border: 1px solid rgb(193, 193, 193);
  border-radius: 4px;
  transition: all 0.45s ease-Out;

  :hover {
    background-color: rgba(185, 183, 240, 0.8);
    box-shadow: inset rgba(15, 7, 238, 0.4) 0px 0px 16px 2px;
  }
`;
