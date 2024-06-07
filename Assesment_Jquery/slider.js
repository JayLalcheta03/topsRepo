let sliderItems = $(".slider-items");
let indicators = $(".indicator");

let indicatorIndex = 2;
indicators[2].style.backgroundColor = "orangered";

let leftCounter = 1;
let rightCounter = 1;

$(".left").click(() => {
  if (sliderItems[0].offsetLeft > -2400) {
    for (let i = 0; i < sliderItems.length; i++) {
      indicators[i].style.backgroundColor = "grey";
      sliderItems[i].style.left = `${sliderItems[i].offsetLeft - 600}px`;
    }
  }

  indicatorIndex++;
  indicators[indicatorIndex].style.backgroundColor = "orangered";
});
$(".right").click(() => {
  if (sliderItems[0].offsetLeft < 0) {
    for (let i = 0; i < sliderItems.length; i++) {
      indicators[i].style.backgroundColor = "grey";
      sliderItems[i].style.left = `${sliderItems[i].offsetLeft + 600}px`;
    }
  }
  indicatorIndex--;
  indicators[indicatorIndex].style.backgroundColor = "orangered";
});
