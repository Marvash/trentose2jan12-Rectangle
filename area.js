
module.exports = {
	getArea:function (array)
	{
		if(Number.isInteger(array[0]) && Number.isInteger(array[1])
		{
			return array[0] * array[1];
		}
		else
		{
			return -1;
		}
	}
};