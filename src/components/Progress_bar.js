import React from 'react'
import { useColorMode } from '@chakra-ui/color-mode'



const Progress_bar = ({bgcolor,text,progress,height}) => {
	const { colorMode } = useColorMode();
	const isDark = colorMode === "dark";

	const Parentdiv = {
		height: height,
		width: '100%',
		backgroundColor: `${isDark ? "whitesmoke" : "teal" }`,
		borderRadius: 40,
		margin: 20,
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
		borderRadius:40,
		textAlign: 'left'
	}
	
	const progresstext = {
		padding: 10,
		color: 'black',
		fontWeight: 900
	}
		
	return (
	<div style={Parentdiv}>
	<div style={Childdiv}>
		<span style={progresstext}>{`${text}`}</span>
	</div>
	</div>
	)
}

export default Progress_bar;
