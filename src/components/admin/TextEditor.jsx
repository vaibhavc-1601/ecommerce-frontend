 `use client`

import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const TextEditor = ({ placeholder,value,onChangeHandler }) => {
	const editor = useRef(null);
	

	return (
		<JoditEditor
			ref={editor}
			value={value}
			
			tabIndex={1} // tabIndex of textarea
			onChange={(data) => onChangeHandler(data)}
		/>
	);
};
 export default TextEditor;