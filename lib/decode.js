module.exports= function (parent) {
	var obj={};
	var inputElements;
	
	if(parent)
		inputElements= $(parent).find('.form-input');
	else
		inputElements=$('.form-input');

	$.map(inputElements,function (input) {
		var idKey= $(input).attr('id').split('-');
		var val= $(input).val();

		idKey.reduce(function (reduct,id,index) {
				
			if(index< idKey.length-1)
			{
				if(isNaN(idKey[index+1])) //next id in idKey is a string
				{
					if(isNaN(idKey[index])) //current id in idKey is a string
					{
						if(!reduct.hasOwnProperty(id))
							reduct[id]={};
					}
					else //current id in idKey is a number
					{
						if(!reduct.hasOwnProperty(id)) //if reduct does not have a integer property - id (Note: you can check arrays with hasOwnProperty)
							reduct.push({});
					}
				}
				else //next id in idKey is a number
				{
					if(isNaN(idKey[index])) //current id in idKey is a string
					{
						if(!reduct.hasOwnProperty(id))
							reduct[id]=[];
					}
					else //current id in idKey is a number
					{
						if(!reduct.hasOwnProperty(id))
							reduct.push([]);
					}
				}
			}
			else
			{
				if(isNaN(id)) //current id is string
				{
					reduct[id]= val;
				}
				else
				{
					// console.log(reduct,idKey[index-1],reduct[idKey[index-1]]);
					reduct.push(val);
				}
			}

			if($.isArray(reduct) && reduct.length==0)
			{
				return reduct;
			}
			else
				return reduct[id];
		},obj);
	});

	return obj;
}

