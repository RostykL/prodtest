
// MAKE A REQUEST TO A SERVER WHERE I UPDATE PRODUCT DETAILS
export const updateProduct = async (url, title, count, width, height, weight) => {
  let data = '';
  await fetch(url, {
	method: 'PUT',
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
	  .then(res => data = (res))

  return data;
}