const km = document.getElementById('km');
const min = document.getElementById('min');
const btn = document.getElementById('btn');
const fareDiv = document.getElementById('fare');



btn.addEventListener('click', async() => {
    
    const res=await axios.post('/calcfare', { km: km.value, min: min.value });
    fareDiv.innerHTML = `<h2>Total Fare is : ${res.data.fare}</h2>`;
})

