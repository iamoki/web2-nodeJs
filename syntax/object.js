var members = ['a', 'b', 'c'];
console.log(members[1]);

var i = 0;
while(i < members.length) {
  console.log('array loop', members[i]);
    i = i + 1;
}

var roles = {
  'programmer' : 'egoing',
  'designer' : 'k9995',
  'manager' : 'hoya',
}

console.log(roles.designer);

for(var name in roles) {
  console.log('key =>', name, 'value =>', roles[name]);
}