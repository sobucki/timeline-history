import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  position: relative;
`;

export const Input = styled.input`
  width: 300px;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const ListContainer = styled.ul`
  width: 300px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  max-height: 200px;
  overflow-y: auto;
`;

export const ListItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors?.secondary || "#ddd"};
    color: #fff;
  }
`;
