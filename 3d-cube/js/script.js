const cube = document.querySelector('.cube');

let x = 310,
    y = 398;

document.onkeydown = function (e) {
         if (e.key === 'ArrowUp') y -= 4
    else if (e.key === 'ArrowRight') x -= 4
    else if (e.key === 'ArrowDown') y += 4
    else if (e.key === 'ArrowLeft') x += 4;

    cube.setAttribute('style', 'transform:  rotateX(' + y + 'deg) rotateY(' + x + 'deg);');
}