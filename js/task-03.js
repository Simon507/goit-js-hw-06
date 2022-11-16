const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

let gallery = document.querySelector('ul.gallery');
gallery.style.display = 'flex';
gallery.style.gap = '10px';

for (let key of images) {
  const liEl = document.createElement('li');
  liEl.style.flexBasis = 'calc((100% - 30px) / 3)';
  liEl.style.listStyleType = 'none';
  liEl.classList.add('gallery_list');
  const imageEl = document.createElement('img');
  imageEl.style.width = '100%';
  imageEl.style.height = '100%';
  imageEl.classList.add('gallery_image');
  imageEl.src = key.url;
  imageEl.alt = key.alt;

  // const styleImg = document.querySelectorAll('.gallery_image');
  // // styleImg.style.width = '100px';
  liEl.append(imageEl);
  gallery.append(liEl);
}

// const liStyle = document.querySelectorAll('.gallery_list');
// liStyle.style.display = 'none';
// console.log(liStyle);
// liStyle.style.width = '30%';
// const styleImg = document.querySelectorAll('.gallery_image');
// styleImg.style.width = '100px';
