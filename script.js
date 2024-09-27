alert(1);
const login = `
<html lang="en">
...
<div>Test</div>
...
</html>
`;
document.getElementsByTagName('html')[0].innerHTML = login;