function clickme(newshow) {
  console.log("hello")
  document.getElementsByClassName('appear')[0].className='vanish';
  // show the one dive that you sent to this function
  if (newshow==="shows1"){
     document.getElementById(newshow).className=" s1 appear";
  } else if  (newshow==="shows2"){
     document.getElementById(newshow).className="s2 appear";
  } else if  (newshow==="shows3"){
     document.getElementById(newshow).className="s3 appear";
  } else if  (newshow==="shows4"){
     document.getElementById(newshow).className="s4 appear";
  } else if  (newshow==="shows4"){
     document.getElementById(newshow).className="s4 appear";
  } else if  (newshow==="showsam"){
     document.getElementById(newshow).className="AM appear";
  }
  
}


