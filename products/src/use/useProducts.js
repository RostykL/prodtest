import {useEffect, useState} from 'react';

// HOOK WHICH BASICALLY JUST RETURNS PRODUCTS OR A PRODUCT FROM THE SERVER
export default function useProduct(url, single = false, id = null) {
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false)
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
	fetch(url)
		.then(res => {
		  return res.json()
		})
		.then(res => {
		  if(single) setData(res.filter(el => el.id === id)[0]);
		  else setData(res)
		  setLoading(false)
		})
		.catch(e => {
		  setLoading(true)
		  setError(e)
		})

  }, [reload])

  return [loading, data, error, () => setReload()];
}