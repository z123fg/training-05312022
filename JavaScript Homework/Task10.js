//Write a JavaScript function which returns the n rows by n columns identity matrix. 
const matrix = (num) =>{
    
    for(var i=0;i<num;i++)
    {
        
        for(var j=0; j<num; j++)
        {
            
            if (i===j)
            {
                console.log('1')
            }
            else
            {
                console.log('0');
            }
            
        }
       console.log('======');
    }
}
matrix(5);