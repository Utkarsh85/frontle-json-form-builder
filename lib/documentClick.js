var state={};

module.exports= function(stateName,triggerElement,executeFunc)
{
	// console.log('Current State = ',state);
	if(state.hasOwnProperty(stateName) && state[stateName])
	{
		return false;
	}

	else
	{
		$(document).on('click',triggerElement,executeFunc);
		state[stateName]= true;
		return true;
	}
}