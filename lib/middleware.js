var documentClick= require('./documentClick');

module.exports=[
	function (ctx,next) {
		// form-delete click handler
		// $('body').on('click','.form-delete',);

		documentClick('json-form-builder-base-delete','.form-delete',function (e) {
			console.log(e);
			if($(e.target).parents('.form-input-container').length>0)
				$(e.target).parents('.form-input-container')[0].remove();
			else if($(e.target).parents('.form-div').length>0)
				$(e.target).parents('.form-div')[0].remove();
		});

		// form-add click handler
		// $('.form-add').click();
		documentClick('json-form-builder-base-add','.form-add',function (e) {
			var parentDiv=$(e.target).parents('.form-div')[0];
			var name= $(parentDiv).attr('id');
			var addInput=$(e.target).siblings('input.form-add-input').val();
			var divCheckbox=$(e.target).siblings('input.form-div-checkbox').is(':checked');

			// console.log(parentDiv,name,addInput,divCheckbox,$(e.target).siblings('input.form-div-checkbox'));

			if(name)
				var idKey=name+'-'+addInput;
			else
				var idKey=addInput;

			var html;
			if(!divCheckbox)
				html='<div class="form-input-container">'
				+'<label class="form-input-label">'+idKey+'</label>'
				+'<input class="form-input" id="'+idKey+'" value=""></input>'
				+'<span class="form-delete">Delete</span>'
				+'</div>';
			else
				html='<div class="form-div" id="'+idKey+'">'
				+'<p class="form-div-label">'
				+idKey
				+'<input class="form-add-input"/>'
				+'<span class="form-add">Add</span>'
				+'<input class="form-div-checkbox" type="checkbox"/>'
				+'<span class="form-delete">Delete</span>'
				+'</p>'
				+'</div>';

			if(addInput.length>0)
				$(parentDiv).append(html);
		});

		next();
	}
]