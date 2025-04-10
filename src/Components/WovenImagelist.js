import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
  return (
    <ImageList
      sx={{
        width: '100%',
        height: 'auto',
        overflow: 'hidden',
      }}
      cols={4}
      gap={16}
    >
      {itemData.map((item, index) => (
        <ImageListItem key={index}>
          {item.img.endsWith('.mp4') ? (

            <video
              src={item.img}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: 'auto' }}
            />
          ) : (
            <img
              src={`${item.img}?w=500&h=350&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
          )}
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://diorama.dam-broadcast.com/cdn-cgi/image/width=3000,format=auto/pm_11872_1031_1031875-tocmpjebh4-whr.jpg',
    title: 'Bagies',
  },
  {
    img: 'https://diorama.dam-broadcast.com/cdn-cgi/image/width=3000,format=auto/pm_11872_1031_1031878-x2cx0o1vyh-whr.jpg',
    title: 'Bag',
  },
  {
    img: 'https://diorama.dam-broadcast.com/pm_11872_1022_1022169-ja0tliruik-1080.mp4',
    title: 'Bag',
  },
  {
    img: 'https://diorama.dam-broadcast.com/cdn-cgi/image/width=3000,format=auto/pm_11872_1031_1031881-ptsqlayc29-whr.jpg',
    title: 'Bag',
  },
  {
    img: 'https://diorama.dam-broadcast.com/cdn-cgi/image/width=3000,format=auto/pm_11872_1031_1031884-ymx1oxvhcf-whr.jpg',
    title: 'Bag',
  },
  {
    img: 'https://diorama.dam-broadcast.com/pm_11872_1022_1022205-jgtqtk09nk-1080.mp4',
    title: 'Bag',
  },
  {
    img: 'https://diorama.dam-broadcast.com/cdn-cgi/image/width=3000,format=auto/pm_11872_1031_1031872-i9gw44h2ga-whr.jpg',
    title: 'Bag',
  },
  {
    img: 'https://diorama.dam-broadcast.com/pm_11872_1022_1022205-jgtqtk09nk-1080.mp4',
    title: 'Bag',
  }
];
