function openTab(event, tabName) {
    // 1. Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // 2. Remove 'active' class from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. Show the specific tab clicked
    document.getElementById(tabName).classList.add('active');

    // 4. Add 'active' styling to the button that was clicked
    event.currentTarget.classList.add('active');
}
