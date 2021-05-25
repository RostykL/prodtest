import {Wrapper, Title, Description, Bottom, Count, More} from "../../styled/productStyled";

// PRODUCT COMPONENT
export default function Product({img, onClick, value, ...props}) {
  const {name, count} = value;
  return <Wrapper img={img} onClick={onClick}>
	<Title>{name}</Title>
	<Description>description</Description>
	<Bottom>
		<Count>{count}</Count>
	  <More>more</More>
	</Bottom>
  </Wrapper>
}