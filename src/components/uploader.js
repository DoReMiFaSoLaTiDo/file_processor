import React, { Component } from 'react';
import { CSVReader } from 'react-papaparse';

class CSVUploader extends Component {

	constructor(props) {
		super(props);

		this.handleOnDrop = this.handleOnDrop.bind(this);
		this.handleOnRemoveFile = this.handleOnRemoveFile.bind(this);
	}

	handleOnDrop = function(data) {
		this.props.processData(data);
		
	}

	handleOnError = function(err, file, inputElem, reason) {
		console.log('error: ', err);
	}

	handleOnRemoveFile = function(data) {
		this.props.updateDataState();
	}

	render() {
		return (
			<CSVReader
				onDrop={this.handleOnDrop}
				onError={this.handleOnError}
				onRemoveFile={this.handleOnRemoveFile}
				addRemoveButton
			>
				<span>Drop file here or Click to upload</span>
			</CSVReader>
		)
	}
}

export default CSVUploader