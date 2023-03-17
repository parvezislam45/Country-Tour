const restCountry =()=>{
fetch('https://restcountries.com/v3.1/all')
.then(res =>res.json())
.then(data => showCountry(data))
}

showCountry =countries => {
    const countryContainer =document.getElementById('country')
    countries.forEach(country =>{
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('col')
        countryDiv.innerHTML =`
         
          <div class="flex flex-col justify-center items-center max-w-sm mx-auto my-8 ">
    <div style="background-image: url('${country.flags.png}')"
         class=" h-64 w-full rounded-lg shadow-md bg-cover bg-center"></div>
    <div class="w-56 md:w-64 bg-black -mt-10 shadow-lg rounded-lg overflow-hidden">
      <div class="py-2 text-center text-white font-bold uppercase tracking-wide text-gray-800">Name :${country.name.common}</div>
      <div class="py-2 -mt-5 text-center text-white font-bold uppercase tracking-wide text-gray-800">Capital :${country.capital}</div>
      <div class="py-2 -mt-5 text-center text-white font-bold uppercase tracking-wide text-gray-800">Region :${country.region}</div>
      <div class="py-2 -mt-5 text-center text-white font-bold uppercase tracking-wide text-gray-800">Population :${country.population}</div>
      <div class="py-2 -mt-5 text-center text-white font-bold uppercase tracking-wide text-gray-800">Area :${country.area}</div>
     
    </div>
  </div>
        </div>
      </div>
        `;
        countryContainer.appendChild(countryDiv)
    console.log(country)
    })
}

restCountry()