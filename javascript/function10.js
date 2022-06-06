/**function 10: */
function matrix(x, y)
{
    if (x >= 1 && y >= 1)
    {
        var rows = x;
        var columns = y;
        var m = [];

        for (var i = 0; i < rows; i++)
        {
            m[i] = [];
            for (var j = 0; j < columns; j++)
            {
                m[i][j] = Math.floor(Math.random() * 2);
            }
        }
        console.log(m);
    }
    else
    {
        console.log("insufficent size");
    }
}

console.log("function 10: ");
matrix(3, 3);
matrix(6, 4);
matrix(0, 0);