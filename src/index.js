// You should implement your task here.

module.exports = function towelSort(matrix) {
	let newMatrix = [];
    
	// undefined является свойством глобального объекта, то есть, это переменная в глобальной области видимости.
	// Начальным значением undefined является примитивное значение undefined.
	if (matrix === undefined || matrix.length === 0) {
		return newMatrix;
	}

	for (let i = 0; i < matrix.length; i++) {
		// Метод reverse() на месте обращает порядок следования элементов массива.
		// Первый элемент массива становится последним, а последний — первым.
		if (i % 2 !== 0) {
			newMatrix.push(matrix[i].reverse());
		} else if (i % 2 === 0) {
			newMatrix.push(matrix[i]);
		}
	}

	// Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.
	let sortedMatrix = newMatrix.reduce((a, b) => {
		// JavaScript метод concat() используется для объединения двух, или более массивов в один,
		// при этом он не изменяет существующие массивы, а возвращает новый массив.
		return a.concat(b);
	});

	return sortedMatrix;
}
