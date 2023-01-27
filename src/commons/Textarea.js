import styled from "@emotion/styled";

const TextareaStyled = styled.textarea`
  font: inherit;
  font-size: var(--small-font);
  background-color: var(--clr-gb-3);
  outline: none;
  width: 84%;
  height: 50px;
  border: 0.1rem solid var(--clr-gb-5);
  border-radius: 12px;
  color: var(--clr-gb-2);
  padding: 10px;
  line-height: 20px;
  background:
    repeating-linear-gradient(to bottom,
      #999 0 1px,
      transparent 1px 20px)
    0 18px / 100% content-box no-repeat;
  overflow: hidden;
`
export const Textarea = ({type = "text", name= "todoText", value, onChange, placeholder="Enter text..."}) => {
return (
    <TextareaStyled type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}/>
)
}