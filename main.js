$(document).ready(function(){
	var wrapper = $('div.wrapper'), 	
	    btn_close = wrapper.find('button.btn-close'), 	
	    btn_open = wrapper.find('button.btn-open'), 
	    content = wrapper.find('section.content'),
	    content_p = wrapper.find('section.content p'),
	    out,	/* content */
	    len,
	    i = 0;			    

	/*
	========================================================
	Remove data  
	========================================================
  	*/
  	
  	btn_close.on('click', function(e){
  		$('p').remove();
  		i = 0;
  	});

	/*
	========================================================
	Load data  
	========================================================
  	*/
	btn_open.on('click', function(e){
	var url_p = "pdo_data.php" /* url*/
    	$.getJSON( url_p, function(result){
    		/*$("p").remove();*/
    		/*
        	$.each(result, function(i, field){
        			out = display_text(field);
            			 content.append("<p>"+field.name + "</p>"); 
            			content.append(out);
        		});
        	*/
        	
        	len = result.length;
			while ( i < len )
			{
				r = result[i];
        			out = display_text( r );
            			/*content.append("<p>"+field.name + "</p>"); */
            			content.append(out);
            			i++;
			}
    		});
    		    		    		
    	/*  turn the event of after exec. to prevent bubuling */	
    	/*$( this ).off( e );*/
	});
	
	function display_text( data, ht )
	{
		if ( ht == null )
		{
			ht = "p";
		}
		
		return  "<"+ht+">" + 'My name is ' + data.name + " and i'm " + data.age + " years old." + "</"+ht+">";
	}	
});