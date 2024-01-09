import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
	return(
		<div>
			<p className = 'f3'>
				{'Faces Will be Detected Here'}
			</p>
			<div className = 'center'>
				<div className = 'pa4 br3 shadow-5' class="wrap">
					<input className = 'f4 pa2 w-70 center' type = 'text'/>
					<button className = 'ma4 pointer button'>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;