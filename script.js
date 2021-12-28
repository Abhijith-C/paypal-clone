const count_sec = document.querySelectorAll('.count-sec');
const count_min = document.querySelectorAll('.count-min');

count_min.forEach((counter) => {
    const updateCount = () => {
      const target = parseInt(counter.getAttribute('data-target'));
      const count = parseInt(counter.innerText);
  
      if (count < target) {
        counter.innerText = count + 1;
        setTimeout(updateCount, 10000);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });

count_sec.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute('data-target'));
    const count = parseInt(counter.innerText);

    if (count < target) {
      counter.innerText = count + 1;
      setTimeout(updateCount, 1000);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});
