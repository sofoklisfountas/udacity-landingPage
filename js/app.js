const pContent = 'Ut id rhoncus leo. Sed vel magna non justo mollis maximus. Etiam egestas pulvinar suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vel nisi eget purus luctus tempor. Vivamus porttitor id ipsum elementum venenatis. Sed congue nulla at sem imperdiet pulvinar. Nam porta pharetra ultricies. Quisque sit amet sapien eget velit ultricies placerat. Vivamus id molestie justo. Mauris vel quam id enim efficitur vehicula a ut justo. Suspendisse luctus laoreet felis, aliquam interdum quam ullamcorper sed. Nunc rutrum blandit aliquet. Fusce nec nunc at lorem cursus fermentum. Fusce tempus, nulla sed semper convallis, felis sem imperdiet purus, sit amet aliquam augue sem vulputate nisi Ut pretium vel nibh vitae egestas. Proin maximus nunc ut sapien venenatis, eu pulvinar lectus porttitor. In quis urna tempus, suscipit leo eget, accumsan purus. Integer efficitur neque eu dignissim ornare. Duis id odio ac neque pulvinar bibendum. Quisque vel nisl quis leo maximus placerat in ut leo. Mauris placerat mauris felis, eu cursus lorem tincidunt sed. Cras vehicula blandit tincidunt. Nunc blandit, tellus ut laoreet interdum, diam tortor congue quam, sed dignissim massa est condimentum risus. Vestibulum posuere id orci a mattis. Donec semper, erat nec pharetra sagittis, nibh mi fringilla erat, pretium sodales nunc lectus quis ligula. Mauris eu fringilla risus. Sed eu maximus lorem, id elementum augue. Nam tincidunt diam ullamcorper nibh placerat tincidunt. Nullam tincidunt varius dui non vulputate.';

const sections = () => document.querySelectorAll('[data-section]');
const navLinks = () => document.querySelectorAll('.nav-link');

const contentContainers = document.querySelectorAll('[data-content]');
const container = document.querySelector('.container');



function populateAllContentContainers() {
 contentContainers.forEach(container => {
    container.innerText = pContent;
     console.log(container.innerText);
 });
}

/**
 * Get the number of sections based on data-section attribute
 * @returns {Number} the number of sections
 */
function getContentCount() {
    return sections().length;
}

function addDataSection() {
    const section = document.querySelector('[data-section]');
    const clonedSection = section.cloneNode(true);

    container.appendChild(clonedSection);
}

function generateHeadingForSections() {
    sections().forEach( (section, index) => {
        const heading = section.querySelector('.section-heading');
        heading.innerHTML = `Section Heading ${index}`;
    });
}

function generateNavLinksForSections() {
    const navList = document.querySelector('.nav-list');
    const navLinkHTML = `<li class="nav-item"><a href="" class="nav-link"></a></li>`;
    sections().forEach( (section, index) => {
        // const navLink = section.querySelector('.nav-link');
        navList.innerHTML += navLinkHTML;
    });

    // populate their text
    navLinks().forEach( (navlink, index) => {
        // const navLink = section.querySelector('.nav-link');
        navlink.innerHTML = `Section Link ${index}`;
    });
}

function addIdsToSections() {
    sections().forEach( (section, index) => {
        section.id = `section${index}`;
        navLinks()[index].href = `#${section.id}`;
    });
}

window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.intersectionRatio > 0) {
          document.querySelector(`.nav-link[href="#${id}"]`).classList.add('active');
        } else {
          document.querySelector(`nav li a[href="#${id}"]`).classList.remove('active');
        }
      });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
      if(section.id) {
        observer.observe(section);
      }
    });

  });


populateAllContentContainers();
addDataSection();
generateHeadingForSections();
generateNavLinksForSections();
addIdsToSections();
console.log("TEST");