
const handleClick42 = () => {
  let about42 = document.getElementsByClassName('about42');
  for (let i = 0; i < about42.length; i++){
  if(about42[i].style.width !== "250px"){
      about42[i].style.width ="250px";
      about42[i].style.height ="80px";
      about42[i].style.visibility ="visible";
      about42[i].style.marginLeft ="-25px";
      about42[i].style.fontSize ="15px";
      about42[i].style.border ="1px solid black";
      about42[i].style.backgroundColor ="white";
      about42[i].style.padding ="10px";
      about42[i].style.marginTop ="-20px";
      about42[i].style.overflow ="scroll";
      about42[i].innerHTML = "School 42 is based on peer-to-peer learning: I was preselected for one intensive month of projects and exams. Shell, language C#,  algorithms.";
      break;
    }
    else if (about42[i].style.width === "250px"){
      about42[i].style.width ="0px";
      about42[i].style.height ="0px";
      about42[i].style.visibility ="hidden";
      about42[i].style.overflow ="hidden";
      about42[i].style.transition ="all 0.4s ease-in-out";
      about42[i].style.border ="none";
    }
  }
}
export default handleClick42;
