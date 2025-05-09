<!-- # zyad-fiach-projetFinal-dom
Web Application README
Overview
This web application provides a variety of interactive elements for a smooth user experience, including modals, responsive navigation, carousels, menu filtering, testimonial slides, and scroll-to-top functionality. It is built using HTML, CSS, and JavaScript to provide an engaging, dynamic, and user-friendly interface.

Features
1. Modal Window
Open Modal: Clicking on the button with ID openModalBtn opens a modal window.

Close Modal: The modal can be closed by clicking the closeModalBtn or clicking outside the modal.

JavaScript functionality:

Modal opens with display: flex.

Modal closes with display: none.

2. Responsive Navigation Menu
A burger menu icon (#burger) toggles visibility of the navigation links when clicked.

The menu icon changes between the list icon and X icon depending on whether the menu is open or closed.

JavaScript functionality:

The .show class is toggled on the .nav-links container to control visibility.

The burger icon switches between bi-list and bi-x based on the state of the menu.

3. Carousel (Image Slider)
Play Button: Clicking the #playBtn shows or hides the carousel.

Navigation: The carousel items can be navigated through "next" and "previous" buttons, using window.next() and window.prev() functions.

JavaScript functionality:

The showItem() function controls the visibility of carousel items.

The carousel cycles through items using currentIndex, and a timer automatically transitions between items every 3 seconds.

4. Menu Tabs
The menu can be filtered based on categories using clickable tabs.

Clicking on a tab hides or displays menu items based on their associated category.

JavaScript functionality:

Categories of items are displayed or hidden by toggling their display style.

The active tab is highlighted by adding the active class.

5. Specials Section
Clicking on buttons filters items in the specials menu based on their category.

JavaScript functionality:

Each button shows specific content (e.g., modi, unde, paria, etc.) and hides others.

Only one category of items is visible at a time.

6. Testimonial Carousel
A carousel for displaying testimonials, showing up to 3 cards at a time.

Navigation through testimonials is possible using the "next" and "previous" buttons, or it cycles automatically every 3 seconds.

JavaScript functionality:

The showSlides() function controls which slides are visible, showing the current batch of testimonials.

The currentcaro variable tracks the current testimonial index.

7. Gallery Section
The gallery images are clickable, but the action is not yet defined in this section.

JavaScript functionality:

querySelectorAll() is used to add event listeners to all gallery images, though further functionality is needed for what happens when an image is clicked.

8. Scroll-to-Top Button
A button that appears when the user scrolls down more than 300px from the top of the page.

Clicking the button scrolls the page smoothly back to the top.

JavaScript functionality:

The topBtn visibility is toggled based on the scroll position (window.scrollY).

Clicking the button triggers window.scrollTo() to scroll smoothly to the top.

git clone https://github.com/your-username/your-repository-name.git

cd your-repository-name

Requirements
A modern web browser (Google Chrome, Firefox, etc.)

No external dependencies or frameworks are required.

Contributing
If you want to contribute to this project, feel free to fork the repository and submit a pull request. Any improvements, bug fixes, or feature requests are welcome!

License
This project is licensed under the MIT License - see the LICENSE file for details -->