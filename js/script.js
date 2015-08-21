$(document).ready(function(){

		// openingSequence();
		onHoverRotate();
		// openingSequencePlayer();
		allImagesHovered = 0;

});

function fadeHoveredImage(){
	// if(allImagesHovered === 14){
	// 	jQuery(".char-image").delay(2000).css({"opacity":"0"});
	// }
}

function playlistPlayer(){
	audio = $('#bday-audio');
	playlist = $('#playlist');
	tracks = playlist.find('li a');
	current_track=0;
	track_len = tracks.length;
	// flag = "sec";
	audio[0].volume = 1;
	audio[0].play();
	audio[0].addEventListener('ended', track_ended());

	$('#play_audio').click(function(){
			// alert('play');
			$("#play_audio").hide();
			$("#pause_audio").show();
			var audio1 = $("#bday-audio")[0];
			audio1.play();
	});

	$('#pause_audio').click(function(){
			// alert('paused');
			$('#pause_audio').hide();
			$("#play_audio").show();
			var audio1 = $("#bday-audio")[0];
			audio1.pause();

		});

	$('#next_audio').click(track_ended);
}

	
function track_ended(){
	current_track++;
        if(current_track == track_len){
            current_track = 0;
            link = playlist.find('a')[0];
        }else{
            link = playlist.find('a')[current_track];    
        }
        run($(link),audio[0]);
}


function run(link, player){
        player.src = link.attr('href');
        var title = link.attr('title');
        // alert(title);
        $('#song-name').text(title);
        par = link.parent();
        par.addClass('active').siblings().removeClass('active');
        audio[0].load();
        audio[0].volume = 0.5;
        audio[0].play();
}




function openingSequencePlayer(){
	var aud = document.getElementById("intro-music");
	aud.volume = 0.5;
}

function openingSequence(){
	$("#os-phrases > h2").lettering('words').children("span").lettering().children("span").lettering(); 
}


function onHoverRotate(){
	//Individual Rotation
	$('.char1 >.char-image').hover(function(){
		$(this).css({"transform":"rotate(-25deg) translateX(3px) translateY(296px) scale(1.4)","top":"100px;"});
		allImagesHovered++;
		fadeHoveredImage();
	});
	$('.char2 .char-image').hover(function(){
		$(this).css({"transform":"rotate(-21deg) translateX(7px) translateY(-206px) scale(1.4)"});
		allImagesHovered++;
		fadeHoveredImage();
	});
	$('.char3 .char-image').hover(function(){
		$(this).css({"transform":"rotate(-17deg) translateX(10px) translateY(221px) scale(1.4)"});
		allImagesHovered++;
		fadeHoveredImage();
	});
	$('.char4 .char-image').hover(function(){
		$(this).css({"transform":"rotate(-14deg) translateX(10px) translateY(-265px) scale(1.4)"});
		allImagesHovered++;
		fadeHoveredImage();
	});
	$('.char5 .char-image').hover(function(){
		$(this).css({"transform":"rotate(-10deg) translateX(8px) translateY(175px) scale(1.4)"});
		allImagesHovered++;
		fadeHoveredImage();
	});
	$('.char7 .char-image').hover(function(){
		$(this).css({"transform":"rotate(-3deg) translateX(3px) translateY(-306px) scale(1.4)"});
		allImagesHovered++;
		fadeHoveredImage();
	});
	$('.char8 .char-image').hover(function(){
		$(this).css({"transform":"rotate(0deg) translateX(0px) translateY(150px) scale(1.4)"});
		allImagesHovered++;
		fadeHoveredImage();
	});
	$('.char9 .char-image').hover(function(){
		$(this).css({"transform":"rotate(2deg) translateX(-2px) translateY(-308px) scale(1.4)"});
		allImagesHovered++;
		fadeHoveredImage();
	});
	$('.char10 .char-image').hover(function(){
		$(this).css({"transform":"rotate(6deg) translateX(-6px) translateY(161px) scale(1.4)"});
		allImagesHovered++;
		fadeHoveredImage();
	});
	$('.char11 .char-image').hover(function(){
		$(this).css({"transform":"rotate(10deg) translateX(-8px) translateY(-284px) scale(1.4)"});
		allImagesHovered++;
		fadeHoveredImage();
	});
	$('.char12 .char-image').hover(function(){
		$(this).css({"transform":"rotate(14deg) translateX(-10px) translateY(200px) scale(1.4)"});
		allImagesHovered++;
		fadeHoveredImage();
	});
	$('.char13 .char-image').hover(function(){
		$(this).css({"transform":"rotate(18deg) translateX(-9px) translateY(-230px) scale(1.4)"});
		allImagesHovered++;
		fadeHoveredImage();
	});
	$('.char14 .char-image').hover(function(){
		$(this).css({"transform":"rotate(22deg) translateX(-6px) translateY(265px) scale(1.4)"});
		allImagesHovered++;
		fadeHoveredImage();
	});
	$('.char15 .char-image').hover(function(){
		$(this).css({"transform":"rotate(25deg) translateX(-2px) translateY(-159px) scale(1.4)"});
		allImagesHovered++;
		fadeHoveredImage();
	});

}



function enter_site(){
	// jQuery("#skip-anim").fadeOut();
	// jQuery("#os-phrases").fadeOut();
	// jQuery(".os-loader").delay(1000).fadeOut("fast");
	jQuery("#bgvid-div").delay(1000).fadeOut("fast");
	jQuery("#content").delay(2000).fadeIn("fast");
	jQuery("html").css({"overflow": "auto", "background":"#1d242b"});
	jQuery(".char1").fadeIn("fast");

	$("#intro-music").trigger('pause');
	playlistPlayer();
	jQuery(".char2").delay(2000).fadeIn("fast");
	jQuery(".char3").delay(2020).fadeIn("fast");
	jQuery(".char4").delay(2040).fadeIn("fast");
	jQuery(".char5").delay(2060).fadeIn("fast");
	jQuery(".char6").delay(2080).fadeIn("fast");
	jQuery(".char7").delay(2100).fadeIn("fast");
	jQuery(".char8").delay(2120).fadeIn("fast");
	jQuery(".char9").delay(2140).fadeIn("fast");
	jQuery(".char10").delay(2160).fadeIn("fast");
	jQuery(".char11").delay(2180).fadeIn("fast");
	jQuery(".char12").delay(2200).fadeIn("fast");
	jQuery(".char13").delay(2220).fadeIn("fast");
	jQuery(".char14").delay(2240).fadeIn("fast");
	jQuery(".char15").delay(2260).fadeIn("fast");


}

function skip_anim(){
	enter_site();
}

	





