const pi = 3.14;
let r = 6.378e6;

let volumeOfSphere = 4/3*pi*r**3;
let circumferenceOfSphere = 2*pi*r;
let surfaceAreaOfSphere = 4*pi*r**2;

document.write("The radius of the sphere is " + r + '<br>');
document.write("The circumference is " + circumferenceOfSphere + '<br>');
document.write("The surface area is " + surfaceAreaOfSphere + '<br>');
document.write("The volume is " + volumeOfSphere + '<br>');