const button = document.getElementById('myButton');
    const div = document.getElementById('myDiv');

    
    button.addEventListener('mouseover', function() {
        div.style.display = 'block';
    });

    
    button.addEventListener('mouseout', function() {
        div.style.display = 'none';
    });

    const parent = document.getElementById('parent');
  const child = document.getElementById('child');

  
  parent.addEventListener('mouseover', function() {
      child.style.transform = 'rotate(49deg)'; 
  });

  
  parent.addEventListener('mouseout', function() {
      child.style.transform = 'rotate(0deg)';
  });


  document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('rotatingImage');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY; // Get the vertical scroll position
        const rotationDegree = scrollTop * 0.1; // Adjust the multiplier for desired rotation sensitivity
        image.style.transform = `rotate(${rotationDegree}deg)`;
    });
});


function changeStickyImageOnScroll() {
    const scrollPosition = window.scrollY;

    const imageDiv = document.getElementById('image-div');
    
    if (scrollPosition > 800 && scrollPosition <= 900) {
      imageDiv.style.backgroundImage = "url('assets/img/g1.png')";
    } else if (scrollPosition > 950 && scrollPosition <= 1000) {
      imageDiv.style.backgroundImage = "url('assets/img/g2.png')";
    } else if (scrollPosition > 1200) {
      imageDiv.style.backgroundImage = "url('assets/img/g3.png')";
    } else {
      imageDiv.style.backgroundImage = "url('assets/img/g1.png')";
    }
  }

  // Add scroll event listener
  window.addEventListener('scroll', changeStickyImageOnScroll);