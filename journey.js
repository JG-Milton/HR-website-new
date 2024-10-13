gsap.from('#test1', {duration: 2, x: '-100%', ease: 'circ'})
// gsap.from('#test2', {duration: 2, opacity: 0, delay: 1, stagger: '.5'})
gsap.from('#test2', {
    scrollTrigger: '#test2', duration:2, x: 500, delay: '.2', ease: 'power1.inOut'
})
