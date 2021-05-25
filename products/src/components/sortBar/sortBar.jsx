import {Input, Wrapper, SubmitButton} from "../../styled/sortBarStyled";
import {useState} from "react";
import useProduct from "../../use/useProducts";

export default function SortBar({reload}) {
  const [text, setText] = useState('')
  const [loading, data, error, setReload] = useProduct("http://localhost:3000/products");

  // SIMPLE SEARCH SYSTEM
  // IF WE TYPES SOMETHING WE FILTER OUR PRODUCTS AND GET THE ONE WE NEED AND WE RELOAD THE APP COMPONENT(ALLPRODUCTS.JSX) USING HOOK (setReload)

  function handleInput() {
	if (text.length > 0) {
	  let find = data.filter(el => el.name.toLowerCase() === text.toLowerCase())
	  setReload(true)
	  reload(find)
	} else {
	  reload(data)
	  setReload(true)
	}
}


return <Wrapper>
  <Input placeholder={"Iphone 12 max"} onChange={e => setText(e.target.value)}/>
  <SubmitButton onClick={handleInput}>Find</SubmitButton>
  <select id="sort" defaultValue={"DESC"}>
	<option value="ASC">ASC</option>
	<option value="DESC">DESC</option>
  </select>
</Wrapper>
}