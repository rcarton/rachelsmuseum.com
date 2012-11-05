
var RachelMuseum = RachelMuseum || {};

RachelMuseum.SECTIONS = {
        experience: 800,
        education: 4500,
        languages: 7000,
        activities: 9500
};
RachelMuseum.init = function() {
	RachelMuseum.s = skrollr.init({
    	constants: RachelMuseum.SECTIONS,
        beforerender: function(data) {
            //console.log('beforerender');
        },
        render: function() {
            //console.log('render');
        },
        easing: {
            WTF: Math.random,
            inverted: function(p) {
                return 1-p;
            }
        }
	});
	
	$('#left nav li a').click(function() {
		var link = $(this).attr('href').substr(1);
		
		RachelMuseum.jumpTo(link);
		
		return false;
	});
	
	$('#left h1').click(function() {
		window.location.href = '/';
	    return false;
	});
	
	$('#begin-the-tour').click(function() { RachelMuseum.jumpTo('experience'); });
	$('#arrow-up').click(RachelMuseum.toPrevious);
	$('#arrow-down').click(RachelMuseum.toNext);
	
};
RachelMuseum.jumpTo = function(section) {
	var end = section=='experience'?2500:1500;
	history.pushState({}, section, section);
	RachelMuseum.s.animateTo(RachelMuseum.SECTIONS[section] + end);
};

RachelMuseum.getCurrent = function() {
	var scroll = $(window).scrollTop();
	var current;
	
	var sectionWLength = new Array();
	for (var i in RachelMuseum.SECTIONS) {
		sectionWLength.push({section: i, end: RachelMuseum.SECTIONS[i] + 1600, mid: RachelMuseum.SECTIONS[i] + 1200});
	}
	
	// Fix for education (longer)
	sectionWLength[0].end += 1000;
	sectionWLength[0].mid += 500;
	
	/*var i = 0;
	for (; i<sectionWLength.length; i++) {
		if (sectionWLength[i].end > scroll) {
			break;
		}
	}
	
	return {
			previous: sectionWLength[Math.max(0, i-1)].section,
			current: sectionWLength[i].section,
			next: sectionWLength[Math.min(sectionWLength.length, i+1)].section
	}*/
	
	// Find the closest section center
	var i=0, min= {index: 0, section: RachelMuseum.SECTIONS[0], val: 10000};
	for (;i<sectionWLength.length; i++) {
		var val = Math.abs(scroll - sectionWLength[i].mid);
		if (val < min.val) {
			min.val = val;
			min.section = sectionWLength[i].section;
			min.index = i;
		}
	}
	
	return {
		previous: sectionWLength[Math.max(0, min.index-1)].section,
		current: sectionWLength[min.index].section,
		next: sectionWLength[Math.min(sectionWLength.length, min.index+1)].section
	}
}

RachelMuseum.toNext = function() {
	RachelMuseum.jumpTo(RachelMuseum.getCurrent().next);
}

RachelMuseum.toPrevious = function() {
	RachelMuseum.jumpTo(RachelMuseum.getCurrent().previous);
}


$(function() {
	
	$('#activities-frame').click(function() {
		window.location.href = '/blog';
	    return false;
	});
	
	var lalala = '@';
	$('.email').attr('href', 'mailto:rachel.luczkowski'+ lalala +'gmail.com');
	$('.email-fill-content').html('rachel.luczkowski'+ lalala +'gmail.com');
	
	RachelMuseum.init();

});


