
const handleClickThp = () => {
  let aboutthp = document.getElementsByClassName('aboutthp');
  for (let i = 0; i < aboutthp.length; i++){
    if(aboutthp[i].style.width !== "300px"){
      aboutthp[i].style.width ="300px";
      aboutthp[i].style.height ="80px";
      aboutthp[i].style.marginLeft ="-60px";
      aboutthp[i].style.visibility ="visible";
      aboutthp[i].style.fontSize ="15px";
      aboutthp[i].style.border ="1px solid black";
      aboutthp[i].style.backgroundColor ="white";
      aboutthp[i].style.padding ="15px";
      aboutthp[i].style.marginTop ="-20px";
      aboutthp[i].style.overflow ="scroll";
      aboutthp[i].innerHTML = `The Hacking project is an intensive 6 months formation bases on peer-to-peer learning : 
      Over 1200 hours of exercices, projects and évaluations per week. 
      Ruby On Rails, Javascript ES6, React Js, Git/GitHub`;
      break;
    }
    else if (aboutthp[i].style.width === "300px"){
      aboutthp[i].style.width ="0px";
      aboutthp[i].style.height ="0px";
      aboutthp[i].style.visibility ="hidden";
      aboutthp[i].style.overflow ="hidden";
      aboutthp[i].style.transition ="all 0.4s ease-in-out";
      aboutthp[i].style.border ="none";
    }
  }
}

export default handleClickThp;