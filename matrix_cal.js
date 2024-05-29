"use strict";

var A1 = [
    [1, 2, 8, 9],
    [3, 4, 8, 8],
    [5, 6, 6, 7],
    [7, 8, 3, 6]
];

var B1 = [
    [1, 2, 8, 3],
    [2, 3, 4, 5],
    [5, 7, 4, 2],
    [5, 3, 2, 7]
];

const O = (rows, cols) => {
    var matrix = [];

    function zeros(width) {
        var array = [];
        for (var i = 0; i < width; i++) {
            array[i] = 0
        }
        return array;
    }
    for (var i = 0; i < rows; i++) {
        matrix[i] = zeros(cols)
    }
    return matrix;
}

const I = (order) => {
    var matrix = [];

    function zeros(width) {
        var array = [];
        for (var i = 0; i < width; i++) {
            array[i] = 0;
        }
        return array;
    }
    for (var i = 0; i < order; i++) {
        matrix[i] = zeros(order);
        matrix[i][i] = 1;
    }
    return matrix;
}

const T = (A) => {
    A.rows = A.length;
    A.cols = A[0].length;
    var Transpose = O(A.cols, A.rows);
    Transpose.rows = Transpose.length;
    Transpose.cols = Transpose[0].length;
    for (var i = 0; i < Transpose.rows * Transpose.cols; i++) {
        Transpose[Math.floor(i / Transpose.cols)][i % Transpose.cols] = A[i % A.rows][Math.floor(i / A.rows)];
    }
    return Transpose;
}

const mul = (A, B) => {
    A.rows = A.length;
    A.cols = A[0].length;
    B.rows = B.length;
    B.cols = B[0].length;
    if (A.cols == B.rows) {
        var Product = O(A.rows, B.cols);
        Product.rows = Product.length;
        Product.cols = Product[0].length;
        var i = 0;
        while (i < Product.rows * Product.cols) {
            var entry = 0;
            for (var j = 0; j < A.cols; j++) {
                entry += A[Math.floor(i / Product.cols)][j] * B[j][i % Product.cols];
            }
            Product[Math.floor(i / Product.cols)][i % Product.cols] = entry;
            entry = 0;
            i++;
        }
        return Product;
    } else {
        console.log(A.cols);
        console.log(B.rows);
        return;
    }
}

const add = (A, B) => {
    A.rows = A.length;
    A.cols = A[0].length;
    B.rows = B.length;
    B.cols = B[0].length;
    if (A.rows == B.rows && A.cols == B.cols) {
        var Sum = O(A.rows, A.cols);
        Sum.rows = Sum.length;
        Sum.cols = Sum[0].length;
        for (var i = 0; i < Sum.rows * Sum.cols; i++) {
            var entry = A[Math.floor(i / Sum.rows)][i % Sum.rows] + B[Math.floor(i / Sum.rows)][i % Sum.rows];
            Sum[Math.floor(i / Sum.rows)][i % Sum.rows] = entry;
        }
        return Sum;
    } else {
        return;
    }
}

const sub = (A, B) => {
    A.rows = A.length;
    A.cols = A[0].length;
    B.rows = B.length;
    B.cols = B[0].length;
    if (A.rows == B.rows && A.cols == B.cols) {
        var Difference = O(A.rows, A.cols);
        Difference.rows = Difference.length;
        Difference.cols = Difference[0].length;
        for (var i = 0; i < Difference.rows * Difference.cols; i++) {
            var entry = A[Math.floor(i / Difference.rows)][i % Difference.rows] - B[Math.floor(i / Difference.rows)][i % Difference.rows];
            Difference[Math.floor(i / Difference.rows)][i % Difference.rows] = entry;
        }
        return Difference;
    } else {
        return;
    }
}

const det2 = (A) => {
    A.rows = A.length;
    A.cols = A[0].length;
    if (A.cols == A.rows) {
        var Determinant = 0;
        Determinant = A[0][0] * A[1][1] - A[1][0] * A[0][1];
        return Determinant;
    } else {
        return;
    }
}

// more functions gonna make... 

const fac = (n) => {
    var Factorial = 1;
    for (var i = 1; i <= n;  i++) {
        Factorial *= i
    };
    return Factorial;
}

const sgn = (n) => {
    var Sign = 0;
    if (n > 0) {
        Sign = 1;
    } else {
        if (n < 0) {
            Sign = -1;
        }
    }
    return Sign;
}