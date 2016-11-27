var wrap= require('./htmlWrapper.js');

function traverse(obj,parent) {
	var html='';
	if(!parent)
		parent='';

	for (var key in obj)
	{
		var idKey;
		if(parent.length>0)
			idKey=parent+'-'+key;
		else
			idKey=key;

		if(typeof(obj[key]) == 'object')
		{
			var h='<p class="form-div-label">'
			+idKey
			+'<input class="form-add-input"/>'
			+'<span class="form-add">Add</span>'
			+'<span class="form-delete">Delete</span>'
			+'</p>'
			+traverse(obj[key],idKey);

			html+=wrap('div',h,['form-div'],{id:idKey});

		}

		else
		{
			html+='<div class="form-input-container">'
			+'<label class="form-input-label">'
			+idKey
			+'</label>'
			+wrap('input','',['form-input'],{id:idKey,value:obj[key]})
			+'<span class="form-delete">Delete</span>'
			+'</div>';
		}
	}

	return html;
}


module.exports= function (obj) {
	var returnHtml=
	'<div class="form-div">' 
	+'<p class="form-div-label">'
	+'<input class="form-add-input"/>'
	+'<span class="form-add">Add</span>'
	+'<span class="form-delete">Delete</span>'
	+'</p>'
	+traverse(obj)
	+'</div>';

	return returnHtml;
}