const login = `
<html lang="en">
...
<div>Test</div>
...
</html>
`;
document.getElementsByTagName('html')[0].innerHTML = login;
console.log(document.getElementsByTagName('html')[0].innerHTML);