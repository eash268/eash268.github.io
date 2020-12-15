var submitted_demo = false;

function main() {
    $('#demo_button').css('display', 'none')
}
main();

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return false;
}

function getDay() {
	var now = new Date();
	var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	return days[ now.getDay() ];
}

function calculateIdentity(identity, link) {
	return identity + link
}

(firstTimeVisit = function() {
	if ( getCookie('rv') ) {
		console.log('rv')
		document.getElementById('salutation').innerHTML = 'Welcome back';
	} else {
		console.log('ftv')
		document.getElementById('salutation').innerHTML = 'Hi there';
		setCookie('rv', 1, 365);
	}
})();

(setDay = function() {
	document.getElementById('day_question').innerHTML = 'Today is ' + getDay() + '.';
})();

$(document).ready(function(){
	$('.dropdown-trigger').dropdown();
	$('.carousel').carousel();
	$('.sidenav').sidenav();
	$('.collapsible').collapsible();
	$($('.chip')[0]).click();
});

$('.section').click(function() {
	$('.section').each(function() {
		$(this).removeClass('blue lighten-2 z-depth-2 no-border')
	});
	$(this).addClass('blue lighten-2 z-depth-2 no-border');

	$('.story_block').css('display', 'none');
	$( '#' + $(this).data('href') ).css('display', 'block');

	$('#left_section').removeClass('z-depth-3');
});

$('#demo_submit').click(function() {
	if (submitted_demo) {
		$('#demo_submit').addClass('disabled');
		$('#demo_submit').html('Thanks for Participating!');
	} else {
		var identity = '';
		var link = 'http://facebook.com/profile.php?=73322363';
		submitted_demo = true;

		$('input').prop('disabled', 'disabled');
		setCookie('dld', 1, 1);
		$('#demo_submit').addClass('disabled');
		$('#demo_submit').html('<i class="fa fa-spinner fa-spin"></i> Calculating...');

		setTimeout(function(){
			$('#demo_submit').prop('href', calculateIdentity(identity, link))
			$('#demo_submit').removeClass('disabled');
			$('#demo_submit').addClass('red');
			$('#demo_submit').html('View Predicted Identity');
		}, 5000);
	}
});
