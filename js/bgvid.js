/*
JS Modified from a tutorial found here: 
http://www.inwebson.com/html5/custom-html5-video-controls-with-jquery/

I really wanted to learn how to skin html5 video.
*/
$(document).ready(function(){
	//INITIALIZE
	var video = $('#bgvid');
	
	//remove default control when JS loaded
	video[0].removeAttribute("controls");

	video.on('loadedmetadata', function() {
			
		//set video properties
		// $('.current').text(timeFormat(0));
		// $('.duration').text(timeFormat(video[0].duration));
		video[0].volume = 0.6;
			
		//start to get video buffering data 
		setTimeout(startBuffer, 150);
			
		//bind video events
		
	});
	
	//display video buffering bar
	var startBuffer = function() {
		var currentBuffer = video[0].buffered.end(0);
		var maxduration = video[0].duration;
		var perc = 100 * currentBuffer / maxduration;
		$('#loadingprogress').css('width',perc+'%');
			
		if(currentBuffer < maxduration) {
			setTimeout(startBuffer, 500);
		}
	};	
	
	//display current video play time
	video.on('timeupdate', function() {
		var currentPos = video[0].currentTime;
		var maxduration = video[0].duration;
		var perc = 100 * currentPos / maxduration;
		$('#butterfly').css('width',perc+'%');	
		// $('.current').text(timeFormat(currentPos));	
	});
	
	//CONTROLS EVENTS
	//video screen and play button clicked
	video.on('click', function() { playpause(); } );
	$('#status-bgvid').on('click', function() { playpause(); } );
	var playpause = function() {
		if(video[0].paused || video[0].ended) {
			$('#status-bgvid').text('Pause');
			video[0].play();
		}
		else {
			$('#status-bgvid').text('Play');
			video[0].pause();
		}
	};

	
	//VIDEO EVENTS
	//video canplay event
	video.on('canplay', function() {
		$('.loading').fadeOut(100);

	});
	
	//video canplaythrough event
	//solve Chrome cache issue
	var completeloaded = false;
	video.on('canplaythrough', function() {
		completeloaded = true;
	});
	
	//video ended event
	video.on('ended', function() {
		$('.btnPlay').removeClass('paused');
		video[0].pause();
		enter_site();

	});

	//video seeking event
	video.on('seeking', function() {
		//if video fully loaded, ignore loading screen
		if(!completeloaded) { 
			$('.loading').fadeIn(200);
		}	
	});
	
	//video seeked event
	video.on('seeked', function() { });
	
	//video waiting for more data event
	video.on('waiting', function() {
		$('.loading').fadeIn(200);
	});
	
	//VIDEO PROGRESS BAR
	//when video timebar clicked
	var timeDrag = false;	/* check for drag event */
	$('#progressbar').on('mousedown', function(e) {
		timeDrag = true;
		updatebar(e.pageX);
	});
	$(document).on('mouseup', function(e) {
		if(timeDrag) {
			timeDrag = false;
			updatebar(e.pageX);
		}
	});
	$(document).on('mousemove', function(e) {
		if(timeDrag) {
			updatebar(e.pageX);
		}
	});
	var updatebar = function(x) {
		var progress = $('#butterfly');
		var progressbar = $('#progressbar');
		//calculate drag position
		//and update video currenttime
		//as well as progress bar
		var maxduration = video[0].duration;
		var position = x - progress.offset().left;
		var percentage = 100 * position / progressbar.width();
		if(percentage > 100) {
			percentage = 100;
		}
		if(percentage < 0) {
			percentage = 0;
		}
		$('#butterfly').css('width',percentage+'%');	
		video[0].currentTime = maxduration * percentage / 100;
	};

	

	//Time format converter - 00:00
	var timeFormat = function(seconds){
		var m = Math.floor(seconds/60)<10 ? "0"+Math.floor(seconds/60) : Math.floor(seconds/60);
		var s = Math.floor(seconds-(m*60))<10 ? "0"+Math.floor(seconds-(m*60)) : Math.floor(seconds-(m*60));
		return m+":"+s;
	};
});