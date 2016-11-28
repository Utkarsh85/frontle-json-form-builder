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
				if(isNaN(idKey[index+1]))
				{
					if(!reduct.hasOwnProperty(id))
						reduct[id]={};
				}
				else
				{
					// console.log(idKey[index],idKey[index+1])
					if(!reduct.hasOwnProperty(id))
					reduct[id]=[];
				}
			}
			else
			{
				if(isNaN(id))
					reduct[id]= val;
				else
				{
					// console.log(reduct,idKey[index-1],reduct[idKey[index-1]]);
					reduct.push(val);
				}
			}

			if($.isArray(reduct))
				return reduct;
			else
				return reduct[id];
		},obj);
	});

	return obj;
}

