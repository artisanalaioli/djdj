import React from 'react';
import ReactDOM from 'react-dom';

var SearchSong = ({data}) => (
	//need to inherit song info from parent
	//two ways of making the song model - as a link and as a button  --> used to be line 9 <img className="thumbnail" src="#"/>

		<div>    
 
		<li className="list-group-item song">data.snippet.title</li>
	</div>
		
	)


module.exports = SearchSong;