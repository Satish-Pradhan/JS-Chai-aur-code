const form = document.querySelector('form')
//this use case will give empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault();

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if (height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a vallid height. <br>
    ${height} is invallid`;
  }
  else if (weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a vallid weight. <br>
    ${weight} is invallid`;
  }
  else {
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`
  }
  
})