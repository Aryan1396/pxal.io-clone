ScrollTrigger.create({
   
    trigger: '.second-page',
    // markers:true,
    start:"top 80%",
    end:"bottom 110%",
  
    onEnter: () => {
      gsap.to('.second-page', {  duration: 0.5, backgroundColor: 'white' , color:"black" , y:-100})
    },
    
    onLeaveBack: () => {
      gsap.to('.second-page', { duration: 0.5, backgroundColor: 'black'})
    },
  
  })



  ScrollTrigger.create({
   
    trigger: '#patel-aryan',
    // markers:true,
    start:"top 30%",
    end:"top 110%",
  
    onEnter: () => {
      gsap.to('.hero', {  duration: 0.5, backgroundColor: 'white'})
    },
    
    onLeaveBack: () => {
      gsap.to('.hero', { duration: 0.5, backgroundColor: 'black'})
    },
  
  })

  ScrollTrigger.create({
   
    trigger: '.fourth-page',
    // markers:true,
    start:"top 55%",
    end:"top 110%",
  
    onEnter: () => {
      gsap.to('.fourth-page', {  duration: 1.2, backgroundColor: 'black' , color:"white"})
    },
    
    onLeaveBack: () => {
      gsap.to('.fourth-page', { duration: 1.2, backgroundColor: 'white'})
    },
  
  })

  ScrollTrigger.create({
   
    trigger: '#Aryan-patel-3',
    // markers:true,
    start:"top 80%",
    end:"bottom 110%",
  
    onEnter: () => {
      gsap.to('#Aryan-patel-3', {  duration: 0.5, y:-60 , opacity: 1})
    },
    
    onLeaveBack: () => {
      gsap.to('#Aryan-patel-3', { duration: 0.5, backgroundColor: 'black'})
    },
  
  })

  ScrollTrigger.create({
   
    trigger: '.big-number',
    markers:true,
    start:"top 30%",
    end:"bottom 110%",
  
    onEnter: () => {
      gsap.to('.big-number', {  duration: 0.5, x:60 , opacity: 1})
    },
    
    onLeaveBack: () => {
      gsap.to('.big-number', { duration: 0.5, backgroundColor: 'black'})
    },
  
  })

  