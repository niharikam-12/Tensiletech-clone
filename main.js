function but1()
{
    document.getElementById("heading").innerHTML="We are your startup's tech plugin";
    document.getElementById("paragraph").innerHTML="We empower your startup with comprehensive technological solutions, breaking through barriers and propelling growth to new heights. With our expertise, your journey is poised for accelerated success.";
    document.getElementById("circle1").classList.add("change");
    document.getElementById("circle2").classList.remove("change");
    document.getElementById("circle3").classList.remove("change");
}


function but2(){
    document.getElementById("heading").innerHTML="Need a team?";
    document.getElementById("paragraph").innerHTML="We incubate startups and form meaningful teams in the process. Come find our Exceptional Teammates among our community and connect with them.";
    document.getElementById("circle2").classList.add("change");
    document.getElementById("circle1").classList.remove("change");
    document.getElementById("circle3").classList.remove("change");
}
function but3(){
    document.getElementById("heading").innerHTML="Have an opensource project?";
    document.getElementById("paragraph").innerHTML="Let us assist you in refining your open source project, transforming it into a world-class endeavor. With our extensive network of talented developers and mentors, we'll provide the support and guidance you need to unlock its full potential.";
    document.getElementById("circle3").classList.add("change");
    document.getElementById("circle1").classList.remove("change");
    document.getElementById("circle2").classList.remove("change");
}