function createTable()
{
    var table=document.getElementById("myTable");
    var rows=prompt("Enter no of rows");
    var cols=prompt("Enter no of columns");

    for(rowIndex=0; rowIndex<rows ;rowIndex++)
    {
        var tr=document.createElement('tr');
        for(colIndex=0 ; colIndex<cols; colIndex++)
        {
            var td=document.createElement('td');
            var content=document.createTextNode("Cell"+colIndex);
            td.id="row"+rowIndex+"col"+colIndex;
            td.appendChild(content);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

createTable();