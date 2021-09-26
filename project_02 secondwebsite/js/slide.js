const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const p = entry.target.querySelector('.Din');
      const h2 = entry.target.querySelector('.Lacrosse-center-subheader');
      const h1 = entry.target.querySelector('.Lacrosse-center-heading');
  
      if (entry.isIntersecting) {
        p.classList.add('opacity-animation');
        h2.classList.add('slide-left-animation');
        h1.classList.add('slide-right-animation');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      p.classList.remove('opacity-animation');
      h2.classList.remove('slide-left-animation');
      h1.classList.remove('slide-right-animation');
    });
  });
  
  //observer.observe(document.querySelector('.centered'));
  observer.observe(document.querySelector('.centered'));
