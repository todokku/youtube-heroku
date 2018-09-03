import React from 'react'; //import React

const VideoDetail = ({video}) =>{
	if (!video){
		return <div> Loading... </div>;
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;
	console.log(url);

	return(
		<div className="video-detail col-md-8">
			<div className="video">
				<iframe title={video.snippet.title} className="video-iframe" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<br />
				<div>{video.snippet.description}</div>
			</div>
		</div>

	);
};

export default VideoDetail;