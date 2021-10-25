var submit = document.getElementById('submit');

var total = 100;
var output = document.createElement('div');
output.id = 'total';
document.getElementsByClassName('col')[0].appendChild(output);

submit.addEventListener('click',() => calculate());

function calculate(){
    // getting data
    var education = document.getElementById('education').value;
    var networth = document.getElementById('networth').value;
    var caste = document.getElementById('caste').value;
    var isMusical = document.getElementById('musical').checked;
    var cooks = document.getElementById('cook').checked;
    var goodCharacter = document.getElementById('character').checked;
    var singsWell = document.getElementById('sings').checked;
    var isYoung = document.getElementById('a1823').checked;
    var isMiddle = document.getElementById('a2427').checked;
    var isOld = document.getElementById('a28').checked;
    var badAttitude = document.getElementById('attitude').checked;
    var gossips = document.getElementById('gcharacter').checked;
    var negativePerson = document.getElementById('person').checked;

    if (education == 'undergraduate'){
        total *= 1.5;
    }
    else if (education == 'college'){
        total *= 1.2;
    }
    else if (education == 'high'){
        total *= 1.05;
    }
    else if (education == 'middle'){
        total *= .9;
    }
    if (networth == 'upper_class'){
        total *= 2;
    }
    else if (networth == 'middle_class'){
        total *= 1.5;
    }
    else if (networth == 'lower_class'){
        total *= 1.2;
    }
    if (caste == 'Brahmin'){
        total += 100;
    }
    else if (caste == 'Kshatriya'){
        total += 50;
    }
    else if (caste == 'Vaishya'){
        total += 20;
    }
    else if (caste == 'Shudra'){
        total += 10;
    }
    if (isMusical){
        total += 10;
    }
    if (cooks){
        total += 20;
    }
    if (goodCharacter){
        total += 15;
    }
    if (singsWell){
        total += 10;
    }
    if (isYoung)
        total *= 1.5;
    if (isMusical)
        total *= 1.2;
    if (isOld)
        total *= .95;
    if (badAttitude)
        total *= 0.85;
    if (gossips)
        total *= 0.9;
    if (negativePerson)
        total -= 20;
    document.getElementById('total').innerHTML = '<b>Total: </b> $' + total;
    total = 100;
}