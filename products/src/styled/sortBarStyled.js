import styled from 'styled-components';


export const Wrapper = styled.div`
	width: 100%;
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	select {
		height: 70%;
		border: none;
		width: 100px;
		&:focus {
			 outline: none;
		}
	}
`

export const Input = styled.input`
	height: 70%;
	border: none;
	width: 100%;
	text-indent: 10px;
	padding: 0;
	&:focus {
		outline: none;
	}
`

export const SubmitButton = styled.button`
    height: 70%;
    border: none;
    width: 100px;
	cursor: pointer;
	text-transform: uppercase;
	
	&:hover {
		background-color: rgba(0,0,0,0.1);	
	}
`
