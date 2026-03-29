const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const increment = target / 100;

    if(count < target){
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCounter,20);
    } else{
      counter.innerText = target;
    }

    if(counter.classList.contains("percent")){
      counter.innerText = counter.innerText + "%";
    }

    if(target === 10000){
      counter.innerText = "10K+";
    }

    if(target === 50000){
      counter.innerText = "50K+";
    }

  };

  updateCounter();

});