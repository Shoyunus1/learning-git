localStorage.setItem('name', 'Bob'); 
localStorage.setItem('age', '25');
localStorage.removeItem('age');

sessionStorage.setItem('name', 'Bob');
sessionStorage.setItem('age', '25');

document.cookie = 'name=Bob; expires=' + new Date(9999,0, 1).toUTCString();