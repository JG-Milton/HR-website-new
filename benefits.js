// ........SIDEBAR, DO NOT TOUCH!!!.......

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='none'
}





// Select all boxes
const boxes = document.querySelectorAll('.box');

// When any box is hovered
boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        // Example: Modify specific items on hover
        const specialItems = document.querySelectorAll('.container1');
        
        // Apply styles to special items
        specialItems.forEach(item => {
            item.style.opacity = '0.2'; // Dim special items
            item.style.pointerEvents = 'none'; // Disable interaction
        });

        // You can also disable other boxes if you want
        boxes.forEach(otherBox => {
            if (otherBox !== box) {
                otherBox.style.opacity = '0.2'; // Dim other boxes
                otherBox.style.pointerEvents = 'none'; // Disable other boxes
            }
        });
    });

    // Reset styles when hover ends
    box.addEventListener('mouseout', () => {
        const specialItems = document.querySelectorAll('.box');
        
        // Reset styles for special items
        specialItems.forEach(item => {
            item.style.opacity = '1';
            item.style.pointerEvents = 'auto';
        });

        // Reset styles for other boxes
        boxes.forEach(otherBox => {
            otherBox.style.opacity = '1';
            otherBox.style.pointerEvents = 'auto';
        });
    });
});
