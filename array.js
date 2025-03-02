let names = ['Sunnat', 'Umid', 'Gafar', 'Shokhjahon', 'Islom', 'Muattar'];

let yourName = prompt('Your name: ')

yourName = yourName.charAt(0).toUpperCase() + 
yourName.slice(1).toLowerCase();

if (names.indexOf(yourName) !== -1) {
    alert('Уже есть!');
} else if (yourName.length < 7) {
    alert('Не достаточно символов!')
} else {
    alert(`Вас зовут ${yourName}`)
}