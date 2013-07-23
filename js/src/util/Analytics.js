/*////////////////////////////////////////////////////////////////////////////////
// ANALYTICS CLASS
////////////////////////////////////////////////////////////////////////////////*/

var Analytics = ObjectCore.extend({
	init:function(){
		// TODO: Add GA script and general tracking functionality in here (Omniture)
	}
});

var Analytics = new Analytics();

/*
setup_omniture:function(){
	// set the omniture variables
	var slug = SLUG;
	var photo_id = PHOTO_ID;
	if( slug != '' ){
		slug = slug + '/';	
	}
	s.pageName = "bigbrothercanada/" + PAGENAME + "/" + slug + photo_id;
	s.server = "bigbrothercanada.slice.ca";
	s.channel = "bigbrothercanada";
	s.pageType = '';
	s.prop1 = '';
	s.prop2 = '';
	s.prop3 = 'canwest';
	s.prop4 = '';
	s.prop5 = s.prop4 + ': ' + s.pageName;
	s.prop23 = document.title;
	s.prop25 = 'default';

	var s_code=s.t();if(s_code)document.write(s_code);
},


*/