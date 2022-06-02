function agree() {
		if ($('#terms').prop('checked'))
     //if ($('#terms').attr('checked'))	
		{
      $('.hidden').show();
      //window.open('https://www.google.com', '_blank');
		}
			else 
			{
        $('.hidden').hide();
			//return false;
			}
	}