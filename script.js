let body = document.body;

let home = document.createElement('li'),
    link1 = document.createElement('a'),
    about = document.createElement('li'),
    link2 = document.createElement('a'),
    projects = document.createElement('li'),
    link3 = document.createElement('a');

home.append(link1);
about.append(link2);
projects.append(link3);

home.innerHTML = 'home';
about.innerHTML ='about';
projects.innerHTML = 'projects';


body.append(home, about, projects);





body.className = 'container';




console.log(body);

//create links
