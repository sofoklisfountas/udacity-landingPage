var sections = () => document.querySelectorAll('[data-section]');
const navLinks = () => document.querySelectorAll('.nav-link');

const contentContainers = document.querySelectorAll('[data-content]');
const container = document.querySelector('.container');
const pContent = 'Ut id rhoncus leo. Sed vel magna non justo mollis maximus. Etiam egestas pulvinar suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vel nisi eget purus luctus tempor. Vivamus porttitor id ipsum elementum venenatis. Sed congue nulla at sem imperdiet pulvinar. Nam porta pharetra ultricies. Quisque sit amet sapien eget velit ultricies placerat. Vivamus id molestie justo. Mauris vel quam id enim efficitur vehicula a ut justo. Suspendisse luctus laoreet felis, aliquam interdum quam ullamcorper sed. Nunc rutrum blandit aliquet. Fusce nec nunc at lorem cursus fermentum. Fusce tempus, nulla sed semper convallis, felis sem imperdiet purus, sit amet aliquam augue sem vulputate nisi Ut pretium vel nibh vitae egestas. Proin maximus nunc ut sapien venenatis, eu pulvinar lectus porttitor. In quis urna tempus, suscipit leo eget, accumsan purus. Integer efficitur neque eu dignissim ornare. Duis id odio ac neque pulvinar bibendum. Quisque vel nisl quis leo maximus placerat in ut leo. Mauris placerat mauris felis, eu cursus lorem tincidunt sed. Cras vehicula blandit tincidunt. Nunc blandit, tellus ut laoreet interdum, diam tortor congue quam, sed dignissim massa est condimentum risus. Vestibulum posuere id orci a mattis. Donec semper, erat nec pharetra sagittis, nibh mi fringilla erat, pretium sodales nunc lectus quis ligula. Mauris eu fringilla risus. Sed eu maximus lorem, id elementum augue. Nam tincidunt diam ullamcorper nibh placerat tincidunt. Nullam tincidunt varius dui non vulputate. Ut id rhoncus leo. Sed vel magna non justo mollis maximus. Etiam egestas pulvinar suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vel nisi eget purus luctus tempor. Vivamus porttitor id ipsum elementum venenatis. Sed congue nulla at sem imperdiet pulvinar. Nam porta pharetra ultricies. Quisque sit amet sapien eget velit ultricies placerat. Vivamus id molestie justo. Mauris vel quam id enim efficitur vehicula a ut justo. Suspendisse luctus laoreet felis, aliquam interdum quam ullamcorper sed. Nunc rutrum blandit aliquet. Fusce nec nunc at lorem cursus fermentum. Fusce tempus, nulla sed semper convallis, felis sem imperdiet purus, sit amet aliquam augue sem vulputate nisi Ut pretium vel nibh vitae egestas. Proin maximus nunc ut sapien venenatis, eu pulvinar lectus porttitor. In quis urna tempus, suscipit leo eget, accumsan purus. Integer efficitur neque eu dignissim ornare. Duis id odio ac neque pulvinar bibendum. Quisque vel nisl quis leo maximus placerat in ut leo. Mauris placerat mauris felis, eu cursus lorem tincidunt sed. Cras vehicula blandit tincidunt. Nunc blandit, tellus ut laoreet interdum, diam tortor congue quam, sed dignissim massa est condimentum risus. Vestibulum posuere id orci a mattis. Donec semper, erat nec pharetra sagittis, nibh mi fringilla erat, pretium sodales nunc lectus quis ligula. Mauris eu fringilla risus. Sed eu maximus lorem, id elementum augue. Nam tincidunt diam ullamcorper nibh placerat tincidunt. Nullam tincidunt varius dui non vulputate.';
const sectionTemplate = `<section class="section" data-section="section">
<h2 class="section-heading"></h2>
<p class="section-content" data-content="content">${pContent}</p>
</section>`;



function populateAllSections() {
  contentContainers.forEach(container => {
    // container.innerText = pContent;
    // console.log(container.innerText);
  });
}

/**
 * Get the number of sections based on data-section attribute
 * @returns {Number} the number of sections
 */
function getSectionsCount() {
  return sections ? sections().length : undefined;
}

/**
 * Clone the 1st section and append it to 
 * sections container.
 */
function addDataSection() {
  // const section = document.querySelector('.container');
  // const clonedSection = section.cloneNode(true);
  container.insertAdjacentHTML('beforeEnd', sectionTemplate);
  generateHeading();
  generateNavLink();
  addIdsToSections();
}

function generateHeading() {
  const index = getSectionsCount() - 1;
  const heading = sections()[index].querySelector('.section-heading');
  heading.innerHTML = `Section Heading ${index}`;
}

function addIdsToSections() {
  const index = getSectionsCount() - 1;
  sections()[index].id = `section${index}`;
  navLinks()[index].href = `#${sections()[index].id}`;
  // sections().forEach((section, index) => {
  //   section.id = `section${index}`;
  //   navLinks()[index].href = `#${section.id}`;
  // });
}

function generateNavLink() {
  const index = getSectionsCount() - 1;
  const navList = document.querySelector('.nav-list');
  const navLinkHTML = `<li class="nav-item"><a href="#section${index}" class="nav-link">Section link ${index}</a></li>`;
  navList.innerHTML += navLinkHTML;
  // sections().forEach((section, index) => {

  //   // const navLink = section.querySelector('.nav-link');

  // });

  // populate their text
  // navLinks().forEach((navlink, index) => {
  //   // const navLink = section.querySelector('.nav-link');
  //   navlink.innerHTML = `Section Link ${index}`;
  //   navLink.href = '#'
  // });
}

// function generateNavLink() {
//   const navList = document.querySelector('.nav-list');
//   const navLinkHTML = `<li class="nav-item"><a href="" class="nav-link"></a></li>`;
//   navList.innerHTML += navLinkHTML;
//   sections().forEach((section, index) => {

//     // const navLink = section.querySelector('.nav-link');

//   });

//   // populate their text
//   navLinks().forEach((navlink, index) => {
//     // const navLink = section.querySelector('.nav-link');
//     navlink.innerHTML = `Section Link ${index}`;
//   });
// }

// function addIdsToSections() {
//   sections().forEach((section, index) => {
//     section.id = `section${index}`;
//     navLinks()[index].href = `#${section.id}`;
//   });
// }

const options = {
  root: null, // it is the viewport
  threshold: 0,
  rootMargin: "-100px"
};

function updateObservers() {
  sections().forEach((section) => {
    observer.observe(section);
  });
  console.log("Update");
}


const buttonAdd = document.querySelector('.buttonAdd');
buttonAdd.addEventListener('click', () => {
  // const buttonAdd = document.querySelector('.buttonAdd');
  addDataSection();
  updateObservers();
});

// window.addEventListener('DOMContentLoaded', () => {

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    navLink = document.querySelector(`.nav-link[href="#${id}"]`);
    // console.log(entry.target);
    if (navLink) {
      if (entry.intersectionRatio > 0) {
        console.log(entry.target);
        document.querySelector(`.nav-link[href="#${id}"]`).classList.add('active');
      } else {
        document.querySelector(`nav li a[href="#${id}"]`).classList.remove('active');
      }
    }
    console.log(navLink);
    return;
  });
}, options);
// Track all sections that have an `id` applied
updateObservers()