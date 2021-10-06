import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #666;
  border-radius: 4px;
  color: white;
  background: ${props => props.primary ? "red" : "#666"};;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media (min-width: 768px) {
    width: auto;
  }

&:focus {
  outline: none;
}

&:hover,
&:active {
  background: #4d4d4d;
  border-color: #4d4d4d;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}
`;

export default Button;
