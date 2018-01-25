
module.exports = {
	getArea:function (array)
	{
		if(array != undefined && (array[0] != undefined && Number.isInteger(array[0]) && array[0] >= 0) && (array[1] != undefined && Number.isInteger(array[1]) && array[1] >= 0))
		{
			return array[0] * array[1];
		}
		else
		{
			return -1;
		}
	}
};