function getServiceDuration(startDateStr, endDateStr) {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  // Convert both dates to UTC to avoid time zone issues
  const utcStart = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  const utcEnd = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

  // Calculate the difference in milliseconds and convert to days
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const dayDifference = Math.floor((utcEnd - utcStart) / millisecondsPerDay);

  let service = (dayDifference*0.5/365).toFixed(4);
   document.getElementById('result1').innerHTML = service;
   return service;
}


function joiningDuration(startDateStr, endDateStr) {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  // Convert both dates to UTC to avoid time zone issues
  const utcStart = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  const utcEnd = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

  // Calculate the difference in milliseconds and convert to days
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const jdc= Math.floor((utcEnd - utcStart) / millisecondsPerDay);   //this line final varable = dayDifference print at id result 3
  
 return jdc ;
}

// Example usage:
 function calculate() {
  //--------------------result1----------------------------

  let oldDate = document.getElementById('oldDate').value;
  getServiceDuration(oldDate, '2025-05-31');

  //-------------------result2--------------------------

  let catagory= document.getElementById("catagory").value;
     // document.getElementById('result2').innerHTML = catagory;

   //--------------------result3----------------------------

  let joinDate = document.getElementById('joinDate').value;
  joiningDuration(joinDate, '2025-05-31');

//--------------------------------2&3-----------------------
let result23 = (catagory/365) * joiningDuration(joinDate, '2025-05-31');
document.getElementById('result23').innerHTML = result23.toFixed(4);
//-------------------result4--------------------------

  let spouse= document.getElementById("spouse").value;
      document.getElementById('result4').innerHTML = spouse;

 //-------------------result5--------------------------

  let phc= document.getElementById("phc").value;
      document.getElementById('result5').innerHTML = phc;

//-------------------result6--------------------------

  let union= document.getElementById("union").value;
      document.getElementById('result6').innerHTML = union;

  //-------------------result7--------------------------

  let reapprotionment= document.getElementById("reapprotionment").value;
      document.getElementById('result7').innerHTML = reapprotionment;

  //-------------------result8--------------------------

  let SeperatedWomen= document.getElementById("SeperatedWomen").value;
      document.getElementById('result8').innerHTML = SeperatedWomen;

   //-------------------result9--------------------------

  let Souts= document.getElementById("Souts").value;
      document.getElementById('result9').innerHTML = Souts;

let tpoints = Number (Souts) + Number(SeperatedWomen)+Number(reapprotionment)+Number(union)+Number(phc)+Number(spouse)+Number(result23)+Number(getServiceDuration(oldDate, '2025-05-31'));
                  document.getElementById('finalResult').innerHTML = tpoints.toFixed(4);;
    }


