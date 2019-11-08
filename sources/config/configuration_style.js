// IT'S SIMPLE STYLE FUNCTION WHICH CHANGE MY THEME "DAY" OR "NIGHT'

function toggleText() 
{         
  const btn = document.getElementById('button_id');          
   if (btn.innerHTML == "Day Theme") {
		btn.innerHTML = "Night Theme";

		document.querySelector('#button_id').style.background = '#fff';
		document.querySelector('#button_id').style.border.solid;
		document.querySelector('#button_id').style.color = '#000';
		document.querySelector('header').style.background = 'rgb(207, 253, 253)';
		document.querySelector('footer').style.background = 'rgb(207, 253, 253)';
		document.querySelector('main').style.background = 'url(styles/img/background.jpg)';
		document.querySelector('#add').style.background = '#efefefd1';
		document.querySelector('#liveSearch').style.background = '#efefefd1';
		document.querySelector('#sortByPriority').style.background = '#efefefd1';
		document.querySelector('#sortByStatus').style.background = '#efefefd1';
		document.querySelector('.container2').style.background = 'rgb(207, 253, 253)';
		document.querySelector('#container2_proto').style.background = 'rgb(207, 253, 253)';
 		document.querySelector('.selectvalue3').style.background = '#fff';
 		document.querySelector('header').style.opacity = '0.9';
		document.querySelector('footer').style.opacity = '1';
		document.querySelector('#selectvalue_proto').style.background = '#fff';

		let c = document.getElementsByClassName('validation');
		let j = document.getElementsByClassName('form_btn');

		for(let i = 0; i < c.length; i++ ) {
			c[i].style.background = '#fff';
			c[i].style.color = '#363636';
		}
		for(let i = 0; i < j.length; i++ ) {
			j[i].style.background = '#fff';
		}
  	} 

  	else {
		btn.innerHTML = "Day Theme";

		document.querySelector('#button_id').style.background = '#002D40';
		document.querySelector('#button_id').style.border.solid;
		document.querySelector('#button_id').style.color = '#e91d62';
		document.querySelector('header').style.background = 'rgb(84,84,84)';
		document.querySelector('footer').style.background = 'rgb(84,84,84)';
		document.querySelector('header').style.opacity = '0.9';
		document.querySelector('footer').style.opacity = '1';
		document.querySelector('main').style.background = 'url(styles/img/background_night.jpg)';
		document.querySelector('#add').style.background = 'rgba(51,41,64,1)';
		document.querySelector('#add').style.color = 'grey';
		document.querySelector('#liveSearch').style.background = 'rgba(51,41,64,1)';
		document.querySelector('#sortByPriority').style.background = 'rgba(51,41,64,1)';
		document.querySelector('#sortByStatus').style.background = 'rgba(51,41,64,1)';
		document.querySelector('#sortByPriority').style.color = 'grey';
		document.querySelector('#sortByStatus').style.color = 'grey';
		document.querySelector('.container2').style.background = 'rgba(96,99,104,1)';
		document.querySelector('#container2_proto').style.background = 'rgba(96,99,104,1)';
 		document.querySelector('.selectvalue3').style.background = 'rgba(51,41,64,1)';
 		document.querySelector('#selectvalue_proto').style.background = 'rgba(51,41,64,1)';
      
		let c = document.getElementsByClassName('validation');
		let j = document.getElementsByClassName('form_btn');

		for(let i = 0; i < c.length; i++ ) {
			c[i].style.background = 'rgba(51,41,64,1)';
			c[i].style.color = 'rgb(96, 99, 104)';
		}
		for(let i = 0; i < j.length; i++ ) {
			j[i].style.background = 'rgba(51,41,64,1)';
			c[i].style.color = 'rgb(96, 99, 104)';
		}
	}

}
