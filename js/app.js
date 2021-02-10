
const info=document.querySelector("#student-info")

//create element and render
function renderInfo(doc){
let tr=document.createElement('tr')
let reg_no=document.createElement('td')
let s_name=document.createElement('td')
let s_address=document.createElement('td')
let s_age=document.createElement('td')
let s_pho=document.createElement('td')
let national=document.createElement('td')
let o_name=document.createElement('td')
let o_address=document.createElement('td')
let o_pho=document.createElement('td')
let o_job=document.createElement('td')
let verification=document.createElement('td')
tr.setAttribute('data-id',doc.id)
reg_no.textContent=doc.data().reg_number;
s_name.textContent=doc.data().full_name;
s_address.textContent=doc.data().address;
s_age.textContent=doc.data().age;
national.textContent=doc.data().national
s_pho.textContent=doc.data().phone_no
o_name.textContent=doc.data().owner_name
o_address.textContent=doc.data().owner_address
o_pho.textContent=doc.data().owner_phone
o_job.textContent=doc.data().owner_job
verification.textContent=doc.data().verified
tr.appendChild(reg_no)
tr.appendChild(s_name)
tr.appendChild(s_address)
tr.appendChild(s_age)
tr.appendChild(national)
tr.appendChild(s_pho)
tr.appendChild(o_name)
tr.appendChild(o_address)
tr.appendChild(o_pho)
tr.appendChild(o_job)
tr.appendChild(verification)


info.appendChild(tr);

}

var docRef = db.collection("Student_details");

docRef.get().then((snapshot) => {

  snapshot.docs.forEach(doc => {
    renderInfo(doc)
  });
});