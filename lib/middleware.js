module.exports=[
	function (ctx,next) {
		// form-delete click handler
		$('body').on('click','.form-delete',function (e) {
			if($(e.target).parents('.form-input-container').length>0)
				$(e.target).parents('.form-input-container')[0].remove();
			else if($(e.target).parents('.form-div').length>0)
				$(e.target).parents('.form-div')[0].remove();
		});

		// form-add click handler
		$('.form-add').click(function (e) {
			var parentDiv=$(e.target).parents('.form-div')[0];
			var name= $(parentDiv).attr('id');
			var addInput=$(e.target).siblings('input').val();

			if(name)
				var idKey=name+'-'+addInput;
			else
				var idKey=addInput;

			var html='<div class="form-input-container">'
			+'<label class="form-input-label">'+idKey+'</label>'
			+'<input class="form-input" id="'+idKey+'" value=""></input>'
			+'<span class="form-delete">Delete</span>'
			+'</div>';

			if(addInput.length>0)
				$(parentDiv).append(html);
		});

		next();
	}
]