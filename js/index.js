document.addEventListener('DOMContentLoaded', function () {
  var p1e = document.getElementById('p1');
  var ope = document.getElementById('op');
  var p2e = document.getElementById('p2');
  var ree = document.getElementById('res');
  var clb = document.getElementById('calc');
  clb.addEventListener('click', function () {
    if (!/^(0|[+-]?[1-9][0-9]*)$/.exec(p1e.value)) {
      alert('左オペランドの値が不正です');
      return false;
    }
    var alops = ['add', 'sub', 'mul', 'div'];
    if (alops.indexOf(ope.value) < 0) {
      alert('演算子がセットされていません');
      return false;
    }
    if (!/^(0|[+-]?[1-9][0-9]*)$/.exec(p2e.value)) {
      alert('右オペランドの値が不正です');
      return false;
    }
    switch(ope.value) {
      case 'add':
        ree.value = parseInt(p1e.value) + parseInt(p2e.value);
        break;
      case 'sub':
        ree.value = parseInt(p1e.value) - parseInt(p2e.value);
        break;
      case 'mul':
        ree.value = parseInt(p1e.value) * parseInt(p2e.value);
        break;
      case 'div':
        if (p2e.value === '0') {
          alert('0で割ることはできません');
          return false;
        }
        ree.value = parseInt(p1e.value) / parseInt(p2e.value);
        break;
    }
    return false;
  });
});
