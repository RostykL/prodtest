import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 260px;
    min-height: 100px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.4);
    margin: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url(${props => props.img ? props.img : ""});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    padding: 10px 5px 5px;
    font-family: Arial, serif;
&
::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    height: 100%;
    width: 100%;
    border-radius: 5px;
}

`

export const Title = styled.div`
    color: white;
    z-index: 1;
    text-transform: uppercase;
    letter-spacing: 2px;
`

export const Description = styled.div`
    color: rgba(255, 255, 255, .7);
    font-size: 14px;
    letter-spacing: -0.5px;
    z-index: 1;
	padding: 0 10px;

`

export const Bottom = styled.div`
	width: 100%;
	margin-top: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: white;
	z-index: 1;
    font-size: 15px;
`

export const Count = styled.div`
`

export const More = styled.div`
	&:hover {
		cursor: pointer;
		text-decoration: underline;
	 }
`