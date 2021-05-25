import {ProductWrapper, Wrapper} from "../../styled/general";
import Product from "../../components/product/product";
import SortBar from "../../components/sortBar/sortBar";
import {useHistory} from "react-router-dom";
import useProduct from "../../use/useProducts";
import {useEffect, useState} from "react";

function AllProducts() {
  const history = useHistory()
  const [loading, data, error, setReload] = useProduct("http://localhost:3000/products");
  const [d, setD] = useState([]);
  // INITIALLY SET D FOR DATA TO ARRAY OF GIVEN PRODUCTS
  useEffect(() => {
	setD(data)
  }, [loading])

  // IF WE CLICK UPON A PRODUCT WE WILL BE TRANSFERRED TO ANOTHER PAGE WHERE WE CAN VIEW THE PRODUCT ALONE
  const goToSingleProduct = (id) => {
	history.push('/single/' + id)
  }

  // WE NEED THIS FUNCTION TO GET THE OBJ OF A PRODUCT OR PRODUCTS THAT WE ARE SEARCHING
  const reloadState = (state) => {
	if (state.length > 0) {
	  setD(state)
	}
  }
  // ADDING PRODUCT TO THE SERVER USING FETCH ADN GET REQUEST
  const addProduct = async () => {
	let title = prompt("Title", '')
	let count = prompt("Count", '')
	let weight = prompt("Weight", '')
	let width = prompt("Width", '')
	let height = prompt("Height", '')
	await fetch("http://localhost:3000/products", {
	  method: 'POST',
	  headers: {
		'Content-type': 'application/json; charset=UTF-8'
	  },
	  body: JSON.stringify({
		"name": title,
		"count": count,
		"imageUrl": "https://www.91-img.com/gallery_images_uploads/3/d/3df5ca6a9b470f715b085991144a5b76e70da975.JPG?tr=h-550,w-0,c-at_max",
		"size": {
		  "width": width,
		  "height": height,
		},
		"weight": weight
	  })
	})
		.then(res => {
		  return res.json()
		})
		.then(res => {
		  // IF EVERYTHING IS OKAY WE SET OUR ARRAY OF PRODUCTS TO PREVIOUS ARRAY + THE NEWLY CREATED OBJECT
		  setD(p => [...p, {
			"name": title,
			"count": count,
			"imageUrl": "https://www.91-img.com/gallery_images_uploads/3/d/3df5ca6a9b470f715b085991144a5b76e70da975.JPG?tr=h-550,w-0,c-at_max",
			"size": {
			  "width": width,
			  "height": height,
			},
			"weight": weight
		  }])
		})
  }

  if (!loading) {
	return <Wrapper>
	  <SortBar reload={reloadState}/>
	  <ProductWrapper>
		{d.map(el => {
		  return <Product key={el.id}
						  value={el}
						  onClick={() => goToSingleProduct(el.id)}
						  img={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"}/>
		})}
	  </ProductWrapper>
	  <button onClick={addProduct}>ADD</button>
	</Wrapper>
  } else {
	return <>
	  <h1>Loading ...</h1>
	</>
  }
}

export default AllProducts;
