const setBackground = () => {
  var time = new Date().getHours();
  console.log(time);
  if (time < 6 || time > 12) {
    document.body.style.backgroundImage = 'url("/public/images/night-bg.jpg");';
  } else {
    document.body.style.backgroundImage = 'url("/public/images/day-bg.jpg");';
  }
};

export default setBackground;
