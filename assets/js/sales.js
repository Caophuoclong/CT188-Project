$(document).ready(function () {
    console.log(_10Sales);
    console.log(_5Sales);

    // renderSales(flashSales, ".flash-sales");
    renderProduct(_10Sales, ".10-sales", 1000000);
    renderProduct(_5Sales, ".5-sales", 1000000)
})