module.exports=function wrap(element,html,classes,attributes) {

	var newHtml= '<'+element+' class=\"'+classes.join(' ')+'\" ';


	for(var key in attributes)
	{
		newHtml+=key+'=\"'+attributes[key]+'\" ';
	}

	newHtml+='>'+html+'</'+element+'>';

	return newHtml;
};