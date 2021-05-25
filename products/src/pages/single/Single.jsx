import {useParams} from 'react-router-dom'
import {useEffect} from "react";
import useProduct from "../../use/useProducts";

import {Wrapper} from '../../styled/general'
import {Title, WrapperSingle, Image} from "../../styled/singleStyled";
import {updateProduct} from "../../use/useProductUpdate";


export default function Single() {
  const {id} = useParams()
  const [loading, data, error, setReload] = useProduct("http://localhost:3000/products", true, +id);

  const handleEditing = async (id, t, c, we, wi, he) => {
	let title = prompt("Title", t)
	let count = prompt("Count", c)
	let weight = prompt("Weight", we)
	let width = prompt("Width", wi)
	let height = prompt("Height", he)
	await updateProduct(`http://localhost:3000/products/${id}/`, title, count, weight, width, height)
	setReload(true)
  }

  if (!loading && data) {
	return <Wrapper>
	  <WrapperSingle>
		<Image src={data.imageUrl} width={300} height={200}/>
		<Title>TITLe - {data.name}</Title>
		<hr/>
		<Title>
		  PROPERTIES:
		</Title>
		<div>{data.count} count</div>
		<div>{data.weight} weight</div>
		<div>{data.size.width} width</div>
		<div>{data.size.height} height</div>
		<div>
		  <hr/>
		  <Title>comments:</Title>

		  <div>
			{data.comments && data.comments.map(el => {
			  return (
				  <div key={el.id}>
					- <div>{el.date}</div>
					<div>{el.description}</div>

				  </div>
			  );
			})}
		  </div>
		  <hr/>
		  <button
			  onClick={() => handleEditing(data.id, data.name, data.count, data.weight, data.size.width, data.size.height)}>EDIT
		  </button>
		</div>
	  </WrapperSingle>


	</Wrapper>
  } else {
	return <h1>Loading ...</h1>
  }
}