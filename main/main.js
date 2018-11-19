module.exports = function main(array) {
    console.log("Debug Info");
    var text = '';
    text += '***<store earning no money>Receipt ***\n';
    var buyArray = [];
    var i;
    for (i = 0; i < array.length; i++) {
        var exist = false;
        var j;
        for (j = 0; j < buyArray.length; j++) {
            if (buyArray[j].Name == array[i].Name) {
                console.log(array.Name);
                buyArray[j].count = buyArray[j].count + 1;
                exist = true;
            }
        }
        if (exist == false) {
            buyArray.push({ Name: array[i].Name, count: 1, price: array[i].Price, unit: array[i].Unit });
        }
    }
    var k;
    var total = 0;
    for (k = 0; k < buyArray.length; k++) {
        var ut;
        if (buyArray[k].count > 1) {
            ut = ' ' + buyArray[k].unit + 's';
        } else {
            ut = '';
        }
        text += 'Name: ' + buyArray[k].Name + ', Quantity: ' + buyArray[k].count + ut + ', Unit price: ' + (buyArray[k].price).toFixed(2) + ' (yuan), Subtotal: ' + (buyArray[k].price * buyArray[k].count).toFixed(2) + ' (yuan)\n';
        total = total + (buyArray[k].price * buyArray[k].count);
    }
    text += '----------------------\n' +
        'Total: ' + total.toFixed(2) + ' (yuan)\n' +
        '**********************';

    return text;
};